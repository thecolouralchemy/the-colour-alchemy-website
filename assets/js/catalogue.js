/* =========================================================
   THE COLOUR ALCHEMY — Product Catalogue

   Behaviour:
   - Load ALL products when products.html opens
   - Search products instantly
   - Filter by brand
   - Filter by category
   - Combine multiple filters
   - Clear filters returns to ALL products
   - Keep dynamically rendered product cards permanently visible
   ========================================================= */

"use strict";

function populateFilterOptions() {
  const brandSelect = document.getElementById("filter-brand");
  const categorySelect = document.getElementById("filter-category");
  if (!brandSelect || !categorySelect) return;

  /* Avoid duplicate options if this function is ever called twice. */
  brandSelect.querySelectorAll("option:not(:first-child)").forEach((option) => option.remove());
  categorySelect.querySelectorAll("option:not(:first-child)").forEach((option) => option.remove());

  PRODUCT_BRANDS.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });

  PRODUCT_CATEGORIES.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function getFilterValues() {
  return {
    searchTerm: (document.getElementById("filter-search")?.value || "").trim().toLowerCase(),
    brand: document.getElementById("filter-brand")?.value || "",
    category: document.getElementById("filter-category")?.value || "",
  };
}

function getFilteredProducts() {
  const { searchTerm, brand, category } = getFilterValues();

  return PRODUCTS.filter((product) => {
    const searchableText = [
      product.name,
      product.brand,
      product.category,
      product.subcategory,
      product.description,
      Array.isArray(product.keywords) ? product.keywords.join(" ") : product.keywords,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch = !searchTerm || searchableText.includes(searchTerm);
    const matchesBrand = !brand || product.brand === brand;
    const matchesCategory = !category || product.category === category;

    return matchesSearch && matchesBrand && matchesCategory;
  });
}

/**
 * Dynamic catalogue rows must not inherit the site's reveal-on-scroll hiding.
 * The global reveal system is designed for static page sections, not cards that
 * are repeatedly destroyed and recreated while filtering.
 */
function keepCatalogueVisible(grid) {
  if (!grid) return;

  grid.classList.remove("reveal-on-scroll");
  grid.classList.add("is-visible");
  grid.style.opacity = "1";
  grid.style.transform = "none";
  grid.style.transitionDelay = "0ms";

  grid.querySelectorAll(".reveal-on-scroll").forEach((element) => {
    element.classList.remove("reveal-on-scroll");
    element.classList.add("is-visible");
    element.style.opacity = "1";
    element.style.transform = "none";
    element.style.transitionDelay = "0ms";
  });
}

function renderCatalogue() {
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("products-empty");
  const countLabel = document.getElementById("results-count");

  if (!grid || typeof PRODUCTS === "undefined" || typeof renderProductCard !== "function") return;

  const results = getFilteredProducts();

  if (results.length === 0) {
    grid.innerHTML = "";
    keepCatalogueVisible(grid);

    if (emptyState) {
      emptyState.classList.remove("d-none");
      emptyState.innerHTML = `
        <i class="bi bi-search" style="font-size:2rem;color:var(--color-gold);" aria-hidden="true"></i>
        <h2 class="h5 mt-3 mb-2">No products found</h2>
        <p class="mb-0">Try another search term, brand or category.</p>`;
    }

    if (countLabel) countLabel.textContent = `Showing 0 of ${PRODUCTS.length} products`;
    return;
  }

  grid.innerHTML = results.map(renderProductCard).join("");
  keepCatalogueVisible(grid);

  if (typeof wireWhatsAppLinks === "function") wireWhatsAppLinks(grid);
  if (emptyState) emptyState.classList.add("d-none");

  if (countLabel) {
    const { searchTerm, brand, category } = getFilterValues();
    const noFiltersActive = !searchTerm && !brand && !category;
    countLabel.textContent = noFiltersActive
      ? `Showing all ${PRODUCTS.length} products`
      : `Showing ${results.length} of ${PRODUCTS.length} products`;
  }
}

function clearFilters() {
  const search = document.getElementById("filter-search");
  const brand = document.getElementById("filter-brand");
  const category = document.getElementById("filter-category");

  if (search) search.value = "";
  if (brand) brand.value = "";
  if (category) category.value = "";

  renderCatalogue();
}

function applyUrlFilters() {
  const params = new URLSearchParams(window.location.search);
  const rawBrandParam = params.get("brand");
  const brandParam = rawBrandParam === "Causeway" ? "Asian Paints Causeway" : rawBrandParam;
  const categoryParam = params.get("category");
  const searchParam = params.get("search");

  const brandSelect = document.getElementById("filter-brand");
  const categorySelect = document.getElementById("filter-category");
  const searchInput = document.getElementById("filter-search");

  if (brandParam && brandSelect && PRODUCT_BRANDS.includes(brandParam)) {
    brandSelect.value = brandParam;
  }

  if (categoryParam && categorySelect && PRODUCT_CATEGORIES.includes(categoryParam)) {
    categorySelect.value = categoryParam;
  }

  if (searchParam && searchInput) searchInput.value = searchParam;
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PRODUCTS === "undefined") {
    console.error("The Colour Alchemy: PRODUCTS data could not be loaded.");
    return;
  }

  if (typeof renderProductCard !== "function") {
    console.error("The Colour Alchemy: renderProductCard() could not be found.");
    return;
  }

  populateFilterOptions();
  applyUrlFilters();
  renderCatalogue();

  document.getElementById("filter-search")?.addEventListener("input", renderCatalogue);
  document.getElementById("filter-brand")?.addEventListener("change", renderCatalogue);
  document.getElementById("filter-category")?.addEventListener("change", renderCatalogue);
  document.getElementById("filter-clear")?.addEventListener("click", clearFilters);
});
