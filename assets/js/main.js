/* =========================================================
   THE COLOUR ALCHEMY — Shared site behaviour
   Loaded on every page (after products.js, before /body>).
   ========================================================= */

const WHATSAPP_NUMBER = "94711222863"; // 071 1 222 863 in international format, no + or leading 0

/**
 * Builds a wa.me link with a pre-filled message.
 * @param {string} message - plain text message to pre-fill.
 */
function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Finds every element with [data-whatsapp-msg] and sets its
 * href to a WhatsApp link carrying that message. Lets us write
 * plain HTML like:
 *   <a data-whatsapp-msg="Hi, I'd like to ask about...">WhatsApp Us</a>
 * without hand-building the wa.me URL each time.
 */
function wireWhatsAppLinks(scope = document) {
  scope.querySelectorAll("[data-whatsapp-msg]").forEach((el) => {
    const msg = el.getAttribute("data-whatsapp-msg");
    el.setAttribute("href", buildWhatsAppLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

/** Highlights the current page's link in the navbar. */
function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-alchemy .nav-link[data-page]").forEach((link) => {
    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/** Sets the footer's copyright year automatically. */
function setFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/**
 * Renders a product card matching the approved reference UI:
 * dark card, thin spectrum-gradient bar under the image, pill
 * badges for brand/category, and a two-button action row.
 */
function renderProductImage(product, lazy = true) {
  if (!product.image) {
    return `
      <div class="product-photo-placeholder" aria-label="Product image placeholder">
        <i class="bi bi-image" aria-hidden="true"></i>
        <span>${product.name}</span>
        <small>Add your product photo</small>
      </div>`;
  }

  const fallback = product.fallbackImage || "";
  const fallbackHandler = fallback
    ? ` onerror="this.onerror=null;this.src='${fallback}'"`
    : "";
  const lazyAttr = lazy ? ' loading="lazy"' : "";

  return `<img src="${product.image}" alt="${product.brand} ${product.name}"${lazyAttr} decoding="async" referrerpolicy="no-referrer"${fallbackHandler}>`;
}

function renderProductCard(product) {
  const imageContent = renderProductImage(product, true);

  const sizesText = product.sizes && product.sizes.length ? product.sizes.join(" · ") : "";
  const whatsAppMsg = `Hi, I'd like to enquire about ${product.brand} ${product.name}.`;

  return `
    <div class="col-sm-6 col-lg-4 col-xl-3" id="product-${product.id}">
      <div class="product-card">
        <div class="product-image">${imageContent}</div>
        <div class="spectrum-bar" aria-hidden="true"></div>
        <div class="product-body">
          <div class="product-badges">
            <span class="badge-pill">${product.brand}</span>
            <span class="badge-pill">${product.category}</span>
          </div>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          ${sizesText ? `<p class="product-desc mb-2"><strong class="text-gold">Sizes:</strong> ${sizesText}</p>` : ""}
          <p class="product-avail">${product.availability}</p>
          <div class="product-actions">
            <button type="button" class="btn-alchemy-outline" data-bs-toggle="modal"
                    data-bs-target="#productDetailModal" data-product-id="${product.id}">
              View Details
            </button>
            <a class="btn-whatsapp-solid" data-whatsapp-msg="${whatsAppMsg}" href="#">
              <i class="bi bi-whatsapp" aria-hidden="true"></i>Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>`;
}

/**
 * Wires up the shared "View Details" modal (#productDetailModal).
 * Any "View Details" button just needs data-bs-toggle="modal",
 * data-bs-target="#productDetailModal" and data-product-id — this
 * listens for Bootstrap's show event and fills the modal in.
 */
function setupProductDetailModal() {
  const modalEl = document.getElementById("productDetailModal");
  if (!modalEl || typeof PRODUCTS === "undefined") return;

  modalEl.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    const productId = Number(trigger?.getAttribute("data-product-id"));
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const imageContent = renderProductImage(product, false);
    const sizesText =
      product.sizes && product.sizes.length ? product.sizes.join(" · ") : "Contact us for available sizes.";
    const whatsAppMsg = `Hi, I'd like to enquire about ${product.brand} ${product.name}.`;

    modalEl.querySelector(".modal-title").textContent = `${product.brand} ${product.name}`;
    modalEl.querySelector(".product-image").innerHTML = imageContent;
    modalEl.querySelector(".product-badges").innerHTML =
      `<span class="badge-pill">${product.brand}</span> <span class="badge-pill">${product.category}</span>`;
    modalEl.querySelector(".product-desc").textContent = product.description;
    modalEl.querySelector(".product-sizes").textContent = sizesText;
    modalEl.querySelector(".product-avail").textContent = product.availability;

    const waBtn = modalEl.querySelector(".btn-whatsapp-solid");
    waBtn.setAttribute("data-whatsapp-msg", whatsAppMsg);
    wireWhatsAppLinks(modalEl);
  });
}



/** Adds a subtle scrolled state to the sticky navigation. */
function setupNavbarScrollState() {
  const nav = document.querySelector(".navbar-alchemy");
  if (!nav) return;

  const update = () => nav.classList.toggle("is-scrolled", window.scrollY > 18);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/**
 * Restrained reveal-on-scroll motion. Elements stay fully visible when
 * reduced-motion is enabled, and the observer stops after each reveal.
 */
let revealObserver = null;

function setupScrollReveals(scope = document) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const selector = [
    ".hero-content",
    ".hero-media",
    ".page-header .container",
    ".section > .container > .section-kicker",
    ".section > .container > h2",
    ".section > .container > .spectrum-bar",
    ".section > .container > .row",
    ".cta-band",
    ".filter-bar",
    ".quote-card",
    ".quote-sidebar",
  ].join(",");

  const elements = Array.from(scope.querySelectorAll(selector)).filter((el) => {
    /* Dynamic product grids are rendered/re-rendered by JavaScript.
       Never hide those containers with the static page reveal effect. */
    return !el.matches("#products-grid, #featured-products-grid") &&
      !el.closest("#products-grid, #featured-products-grid");
  });
  if (!elements.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
  }

  elements.forEach((el, index) => {
    if (el.classList.contains("reveal-on-scroll") || el.classList.contains("is-visible")) return;
    el.classList.add("reveal-on-scroll");
    el.style.setProperty("--reveal-delay", `${Math.min((index % 4) * 55, 165)}ms`);
    revealObserver.observe(el);
  });
}

/** Smooth, short transition between internal HTML pages. */
function setupPageTransitions() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = event.target.closest("a[href]");
    if (!link || link.target === "_blank" || link.hasAttribute("download") || link.hasAttribute("data-bs-toggle")) return;

    const rawHref = link.getAttribute("href") || "";
    if (!rawHref || rawHref.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(rawHref)) return;

    let destination;
    try {
      destination = new URL(link.href, window.location.href);
    } catch (_) {
      return;
    }

    if (destination.origin !== window.location.origin) return;
    if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;

    event.preventDefault();
    document.body.classList.add("site-leaving");
    window.setTimeout(() => {
      window.location.href = destination.href;
    }, 150);
  });

  window.addEventListener("pageshow", () => document.body.classList.remove("site-leaving"));
}


/** Crossfades the homepage hero's generated paint/design images. */
function setupHeroSlideshow() {
  const hero = document.querySelector(".home-hero-slideshow");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll(".home-hero-slide"));
  if (slides.length <= 1) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  slides.forEach((slide, index) => slide.classList.toggle("is-active", index === 0));
  if (reduceMotion) return;

  let currentIndex = 0;
  window.setInterval(() => {
    slides[currentIndex].classList.remove("is-active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("is-active");
  }, 4600);
}

/** Renders the homepage's featured-products grid from PRODUCTS. */
function renderFeaturedProducts() {
  const grid = document.getElementById("featured-products-grid");
  if (!grid || typeof PRODUCTS === "undefined") return;

  const featured = PRODUCTS.filter((p) => p.featured);
  grid.innerHTML = featured.map(renderProductCard).join("");
  wireWhatsAppLinks(grid);
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNavLink();
  setFooterYear();
  wireWhatsAppLinks();
  setupHeroSlideshow();
  renderFeaturedProducts();
  setupProductDetailModal();
  setupNavbarScrollState();
  setupScrollReveals();
  setupPageTransitions();
});

/* =========================================================
   ALCHY — THE COLOUR ALCHEMY WHATSAPP GUIDE
   Injected on every page that loads main.js.
   ========================================================= */

function setupAlchemyAssistant() {
  /* Remove older floating WhatsApp variants so only Alchy appears. */
  document.querySelectorAll(
    ".whatsapp-float, .tca-whatsapp-widget, .tca-wa-widget, #tcaWhatsappWidget"
  ).forEach((node) => node.remove());

  if (document.getElementById("tcaAssistWidget")) return;

  const mascotSrc = "assets/img/whatsapp/tca-cartoon-boy.jpeg";
  const whatsappUrl =
    "https://wa.me/94711222863?text=" +
    encodeURIComponent(
      "Hi Alchy 👋 I'd like help choosing the right paint or colour for my project."
    );

  const markup = `
    <div class="tca-assist-widget" id="tcaAssistWidget">

      <div class="tca-assist-teaser" id="tcaAssistTeaser" aria-hidden="true">
        <button
          type="button"
          class="tca-assist-teaser-card"
          id="tcaAssistTeaserOpen"
          aria-label="Ask Alchy for paint and colour help"
        >
          <span class="tca-assist-teaser-line">
            <span class="tca-assist-online-dot" aria-hidden="true"></span>
            <span class="tca-assist-teaser-copy">
              Hi, I'm <strong>Alchy.</strong> Let's find the perfect paint for your project.
            </span>
          </span>
        </button>

        <button
          type="button"
          class="tca-assist-teaser-close"
          id="tcaAssistTeaserClose"
          aria-label="Close Alchy greeting"
        >
          <i class="bi bi-x-lg" aria-hidden="true"></i>
        </button>
      </div>

      <div
        class="tca-assist-panel"
        id="tcaAssistPanel"
        aria-hidden="true"
        role="dialog"
        aria-label="Alchy paint and colour assistant"
      >
        <div class="tca-assist-header">
          <div class="tca-assist-header-avatar" aria-hidden="true">
            <img src="${mascotSrc}" alt="">
          </div>

          <div class="tca-assist-header-copy">
            <strong>Alchy</strong>
            <span>The Colour Alchemy · Colour Guide</span>
          </div>

          <button
            type="button"
            class="tca-assist-panel-close"
            id="tcaAssistPanelClose"
            aria-label="Close Alchy assistant"
          >
            <i class="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>

        <div class="tca-assist-body">
          <div class="tca-assist-message">
            <span class="tca-assist-message-name">Alchy</span>
            <p>Hi there! 👋</p>
            <p>Need help choosing paint, colours or preparation products?</p>
          </div>
        </div>

        <div class="tca-assist-footer">
          <a
            class="tca-assist-whatsapp"
            href="${whatsappUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-whatsapp" aria-hidden="true"></i>
            <span>Continue on WhatsApp</span>
          </a>
          <small>Opens a chat with The Colour Alchemy team</small>
        </div>
      </div>

      <button
        type="button"
        class="tca-assist-launcher"
        id="tcaAssistLauncher"
        aria-label="Open Alchy paint and colour assistant"
        aria-expanded="false"
      >
        <span class="tca-assist-launcher-avatar">
          <img src="${mascotSrc}" alt="Alchy, The Colour Alchemy guide">
        </span>
        <span class="tca-assist-wa-badge" aria-hidden="true">
          <i class="bi bi-whatsapp"></i>
        </span>
      </button>

    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", markup);

  const widget = document.getElementById("tcaAssistWidget");
  const launcher = document.getElementById("tcaAssistLauncher");
  const panel = document.getElementById("tcaAssistPanel");
  const panelClose = document.getElementById("tcaAssistPanelClose");
  const teaser = document.getElementById("tcaAssistTeaser");
  const teaserOpen = document.getElementById("tcaAssistTeaserOpen");
  const teaserClose = document.getElementById("tcaAssistTeaserClose");

  if (!widget || !launcher || !panel) return;

  let teaserDismissed = false;

  function hideTeaser() {
    if (!teaser) return;
    teaser.classList.remove("is-visible");
    teaser.setAttribute("aria-hidden", "true");
  }

  function showTeaser() {
    if (!teaser || teaserDismissed || panel.classList.contains("is-open")) return;
    teaser.classList.add("is-visible");
    teaser.setAttribute("aria-hidden", "false");
  }

  function openPanel() {
    hideTeaser();
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    launcher.setAttribute("aria-expanded", "true");
  }

  function closePanel() {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    launcher.setAttribute("aria-expanded", "false");
  }

  launcher.addEventListener("click", () => {
    panel.classList.contains("is-open") ? closePanel() : openPanel();
  });

  panelClose?.addEventListener("click", closePanel);
  teaserOpen?.addEventListener("click", openPanel);

  teaserClose?.addEventListener("click", (event) => {
    event.stopPropagation();
    teaserDismissed = true;
    hideTeaser();
  });

  document.querySelectorAll("[data-alchy-open]").forEach((button) => {
    button.addEventListener("click", openPanel);
  });

  document.addEventListener("click", (event) => {
    if (!panel.classList.contains("is-open")) return;
    if (widget.contains(event.target)) return;
    if (event.target.closest("[data-alchy-open]")) return;
    closePanel();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePanel();
  });

  window.setTimeout(showTeaser, 1600);
  window.setTimeout(() => {
    if (!panel.classList.contains("is-open")) hideTeaser();
  }, 12600);
}

document.addEventListener("DOMContentLoaded", setupAlchemyAssistant);
