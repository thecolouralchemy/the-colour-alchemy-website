/* =========================================================
   THE COLOUR ALCHEMY — Product Catalogue

   Behaviour:
   - Load ALL products when products.html opens
   - Search products instantly
   - Filter by brand
   - Filter by customer-facing catalogue category
   - Support grouped links from the homepage
   - Combine search + brand + category filters
   - Clear filters returns to ALL products
   ========================================================= */

"use strict";


function populateFilterOptions() {
  const brandSelect =
    document.getElementById("filter-brand");

  const categorySelect =
    document.getElementById("filter-category");

  if (
    !brandSelect
    ||
    !categorySelect
  ) {
    return;
  }


  brandSelect
    .querySelectorAll(
      "option:not(:first-child)"
    )
    .forEach(
      (option) => option.remove()
    );


  categorySelect
    .querySelectorAll(
      "option:not(:first-child), optgroup"
    )
    .forEach(
      (option) => option.remove()
    );


  PRODUCT_BRANDS.forEach(
    (brand) => {
      const option =
        document.createElement("option");

      option.value = brand;
      option.textContent = brand;

      brandSelect.appendChild(
        option
      );
    }
  );


  const groups =
    typeof PRODUCT_CATEGORY_GROUPS !== "undefined"
      ? PRODUCT_CATEGORY_GROUPS
      : [
          {
            label: "Categories",
            value: "",
            categories: PRODUCT_CATEGORIES
          }
        ];


  groups.forEach(
    (group) => {
      const availableCategories =
        group.categories.filter(
          (category) =>
            PRODUCT_CATEGORIES.includes(
              category
            )
        );


      if (
        group.value
        &&
        availableCategories.length
      ) {
        const groupOption =
          document.createElement(
            "option"
          );

        groupOption.value =
          `group:${group.value}`;

        groupOption.textContent =
          `All ${group.label}`;

        categorySelect.appendChild(
          groupOption
        );
      }


      if (
        !availableCategories.length
      ) {
        return;
      }


      const optgroup =
        document.createElement(
          "optgroup"
        );

      optgroup.label = group.label;


      availableCategories.forEach(
        (category) => {
          const option =
            document.createElement(
              "option"
            );

          option.value =
            category;

          option.textContent =
            category;

          optgroup.appendChild(
            option
          );
        }
      );


      categorySelect.appendChild(
        optgroup
      );
    }
  );
}


function getFilterValues() {
  return {
    searchTerm:
      (
        document
          .getElementById(
            "filter-search"
          )
          ?.value
        ||
        ""
      )
        .trim()
        .toLowerCase(),

    brand:
      document
        .getElementById(
          "filter-brand"
        )
        ?.value
      ||
      "",

    category:
      document
        .getElementById(
          "filter-category"
        )
        ?.value
      ||
      ""
  };
}


function productMatchesCategory(
  product,
  categoryFilter
) {
  if (!categoryFilter) {
    return true;
  }


  if (
    categoryFilter.startsWith(
      "group:"
    )
  ) {
    const group =
      categoryFilter.replace(
        "group:",
        ""
      );

    return (
      product.catalogueGroup
      ===
      group
    );
  }


  return (
    (
      product.catalogueCategory
      ||
      product.category
    )
    ===
    categoryFilter
  );
}


function getFilteredProducts() {
  const {
    searchTerm,
    brand,
    category
  } = getFilterValues();


  return PRODUCTS.filter(
    (product) => {
      const searchableText = [
        product.name,
        product.brand,
        product.catalogueCategory,
        product.category,
        product.subcategory,
        product.description,

        Array.isArray(
          product.keywords
        )
          ? product.keywords.join(" ")
          : product.keywords
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();


      const matchesSearch =
        !searchTerm
        ||
        searchableText.includes(
          searchTerm
        );


      const matchesBrand =
        !brand
        ||
        product.brand === brand;


      const matchesCategory =
        productMatchesCategory(
          product,
          category
        );


      return (
        matchesSearch
        &&
        matchesBrand
        &&
        matchesCategory
      );
    }
  );
}


/**
 * Dynamic catalogue rows must not inherit the site's reveal-on-scroll hiding.
 * The global reveal system is designed for static sections, not cards that are
 * repeatedly recreated while filtering.
 */
function keepCatalogueVisible(grid) {
  if (!grid) {
    return;
  }


  grid.classList.remove(
    "reveal-on-scroll"
  );

  grid.classList.add(
    "is-visible"
  );

  grid.style.opacity = "1";
  grid.style.transform = "none";
  grid.style.transitionDelay = "0ms";


  grid
    .querySelectorAll(
      ".reveal-on-scroll"
    )
    .forEach(
      (element) => {
        element.classList.remove(
          "reveal-on-scroll"
        );

        element.classList.add(
          "is-visible"
        );

        element.style.opacity = "1";
        element.style.transform = "none";
        element.style.transitionDelay = "0ms";
      }
    );
}


function renderCatalogue() {
  const grid =
    document.getElementById(
      "products-grid"
    );

  const emptyState =
    document.getElementById(
      "products-empty"
    );

  const countLabel =
    document.getElementById(
      "results-count"
    );


  if (
    !grid
    ||
    typeof PRODUCTS === "undefined"
    ||
    typeof renderProductCard !== "function"
  ) {
    return;
  }


  const results =
    getFilteredProducts();


  if (
    results.length === 0
  ) {
    grid.innerHTML = "";

    keepCatalogueVisible(
      grid
    );


    if (emptyState) {
      emptyState.classList.remove(
        "d-none"
      );

      emptyState.innerHTML = `
        <i
          class="bi bi-search"
          style="font-size:2rem;color:var(--color-gold);"
          aria-hidden="true"
        ></i>

        <h2
          class="h5 mt-3 mb-2"
        >
          No products found
        </h2>

        <p class="mb-0">
          Try another search term, brand or category.
        </p>
      `;
    }


    if (countLabel) {
      countLabel.textContent =
        `Showing 0 of ${PRODUCTS.length} products`;
    }


    return;
  }


  grid.innerHTML =
    results
      .map(
        renderProductCard
      )
      .join("");


  keepCatalogueVisible(
    grid
  );


  if (
    typeof wireWhatsAppLinks
    ===
    "function"
  ) {
    wireWhatsAppLinks(
      grid
    );
  }


  if (emptyState) {
    emptyState.classList.add(
      "d-none"
    );
  }


  if (countLabel) {
    const {
      searchTerm,
      brand,
      category
    } = getFilterValues();


    const noFiltersActive =
      !searchTerm
      &&
      !brand
      &&
      !category;


    countLabel.textContent =
      noFiltersActive
        ? `Showing all ${PRODUCTS.length} products`
        : `Showing ${results.length} of ${PRODUCTS.length} products`;
  }
}


function clearFilters() {
  const search =
    document.getElementById(
      "filter-search"
    );

  const brand =
    document.getElementById(
      "filter-brand"
    );

  const category =
    document.getElementById(
      "filter-category"
    );


  if (search) {
    search.value = "";
  }

  if (brand) {
    brand.value = "";
  }

  if (category) {
    category.value = "";
  }


  renderCatalogue();
}


function applyUrlFilters() {
  const params =
    new URLSearchParams(
      window.location.search
    );


  const rawBrandParam =
    params.get(
      "brand"
    );


  const brandParam =
    rawBrandParam;


  const categoryParam =
    params.get(
      "category"
    );


  const groupParam =
    params.get(
      "group"
    );


  const searchParam =
    params.get(
      "search"
    );


  const brandSelect =
    document.getElementById(
      "filter-brand"
    );

  const categorySelect =
    document.getElementById(
      "filter-category"
    );

  const searchInput =
    document.getElementById(
      "filter-search"
    );


  if (
    brandParam
    &&
    brandSelect
    &&
    PRODUCT_BRANDS.includes(
      brandParam
    )
  ) {
    brandSelect.value =
      brandParam;
  }


  if (
    groupParam
    &&
    categorySelect
  ) {
    const groupValue =
      `group:${groupParam}`;


    if (
      Array.from(
        categorySelect.options
      )
        .some(
          (option) =>
            option.value
            ===
            groupValue
        )
    ) {
      categorySelect.value =
        groupValue;
    }
  }


  if (
    categoryParam
    &&
    categorySelect
  ) {
    const legacyCategoryMap = {
      "Paint Tools": "Brushes",
      "Sinks & Taps": "group:beyond",
      "Primer & Sealer": "Primers",
      "Wall Preparation": "Wall Fillers",
      "Wood Care": "Wood Finishes",
      "Wood Coating": "Wood Finishes",
      "Metal Protection": "Metal Finishes"
    };


    const mappedCategory =
      legacyCategoryMap[
        categoryParam
      ]
      ||
      categoryParam;


    if (
      Array.from(
        categorySelect.options
      )
        .some(
          (option) =>
            option.value
            ===
            mappedCategory
        )
    ) {
      categorySelect.value =
        mappedCategory;
    }
  }


  if (
    searchParam
    &&
    searchInput
  ) {
    searchInput.value =
      searchParam;
  }
}


document.addEventListener(
  "DOMContentLoaded",
  () => {
    if (
      typeof PRODUCTS
      ===
      "undefined"
    ) {
      console.error(
        "The Colour Alchemy: PRODUCTS data could not be loaded."
      );

      return;
    }


    if (
      typeof renderProductCard
      !==
      "function"
    ) {
      console.error(
        "The Colour Alchemy: renderProductCard() could not be found."
      );

      return;
    }


    populateFilterOptions();

    applyUrlFilters();

    renderCatalogue();


    const searchInput =
      document.getElementById(
        "filter-search"
      );

    let searchTimer = null;

    searchInput?.addEventListener(
      "input",
      () => {
        window.clearTimeout(searchTimer);
        searchTimer = window.setTimeout(
          renderCatalogue,
          140
        );
      }
    );


    document
      .getElementById(
        "filter-brand"
      )
      ?.addEventListener(
        "change",
        renderCatalogue
      );


    document
      .getElementById(
        "filter-category"
      )
      ?.addEventListener(
        "change",
        renderCatalogue
      );


    document
      .getElementById(
        "filter-clear"
      )
      ?.addEventListener(
        "click",
        clearFilters
      );
  }
);
