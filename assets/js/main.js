/* =========================================================
   THE COLOUR ALCHEMY — Shared site behaviour
   Loaded on every page (after products.js, before </body>).
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
 * href to a WhatsApp link carrying that message.
 */
function wireWhatsAppLinks(scope = document) {
  scope.querySelectorAll("[data-whatsapp-msg]").forEach((el) => {
    const msg = el.getAttribute("data-whatsapp-msg");

    el.setAttribute("href", buildWhatsAppLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}


/**
 * Highlights the current page's link in the navbar.
 */
function highlightActiveNavLink() {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document
    .querySelectorAll(".navbar-alchemy .nav-link[data-page]")
    .forEach((link) => {
      if (
        link.getAttribute("data-page") === currentPage
      ) {
        link.classList.add("active");

        link.setAttribute(
          "aria-current",
          "page"
        );
      }
    });
}


/**
 * Sets the footer's copyright year automatically.
 */
function setFooterYear() {
  const el =
    document.getElementById("footer-year");

  if (el) {
    el.textContent =
      new Date().getFullYear();
  }
}


/**
 * Renders product image.
 */
function renderProductImage(
  product,
  lazy = true
) {
  if (!product.image) {
    return `
      <div
        class="product-photo-placeholder"
        aria-label="Product image placeholder"
      >
        <i
          class="bi bi-image"
          aria-hidden="true"
        ></i>

        <span>
          ${product.name}
        </span>

        <small>
          Image coming soon
        </small>
      </div>
    `;
  }

  const fallback =
    product.fallbackImage || "";

  const fallbackHandler =
    fallback
      ? ` onerror="this.onerror=null;this.src='${fallback}'"`
      : "";

  const lazyAttr =
    lazy
      ? ' loading="lazy"'
      : "";

  return `
    <img
      src="${product.image}"
      alt="${product.brand} ${product.name}"
      ${lazyAttr}
      decoding="async"
      referrerpolicy="no-referrer"
      ${fallbackHandler}
    >
  `;
}


/**
 * Renders product card.
 */
function renderProductCard(product) {
  const imageContent =
    renderProductImage(
      product,
      true
    );

  const sizesText =
    product.sizes &&
    product.sizes.length
      ? product.sizes.join(" · ")
      : "";

  const whatsAppMsg =
    `Hi, I'd like to enquire about ${product.brand} ${product.name}.`;

  return `
    <div
      class="col-sm-6 col-lg-4 col-xl-3"
      id="product-${product.id}"
    >

      <div class="product-card">

        <div class="product-image">
          ${imageContent}
        </div>

        <div
          class="spectrum-bar"
          aria-hidden="true"
        ></div>

        <div class="product-body">

          <div class="product-badges">

            <span class="badge-pill">
              ${product.brand}
            </span>

            <span class="badge-pill">
              ${product.catalogueCategory || product.category}
            </span>

          </div>

          <h3 class="product-name">
            ${product.name}
          </h3>

          <p class="product-desc">
            ${product.description}
          </p>

          ${
            sizesText
              ? `
                <p
                  class="product-desc mb-2"
                >
                  <strong
                    class="text-gold"
                  >
                    Sizes:
                  </strong>

                  ${sizesText}
                </p>
              `
              : ""
          }

          <p class="product-avail">
            ${product.availability}
          </p>

          <div class="product-actions">

            <button
              type="button"
              class="btn-alchemy-outline"
              data-bs-toggle="modal"
              data-bs-target="#productDetailModal"
              data-product-id="${product.id}"
            >
              View Details
            </button>

            <a
              class="btn-whatsapp-solid"
              data-whatsapp-msg="${whatsAppMsg}"
              href="#"
            >

              <i
                class="bi bi-whatsapp"
                aria-hidden="true"
              ></i>

              Enquiry

            </a>

          </div>

        </div>

      </div>

    </div>
  `;
}


/**
 * Product detail modal.
 */
function setupProductDetailModal() {
  const modalEl =
    document.getElementById(
      "productDetailModal"
    );

  if (
    !modalEl ||
    typeof PRODUCTS === "undefined"
  ) {
    return;
  }

  modalEl.addEventListener(
    "show.bs.modal",
    (event) => {
      const trigger =
        event.relatedTarget;

      const productId =
        Number(
          trigger?.getAttribute(
            "data-product-id"
          )
        );

      const product =
        PRODUCTS.find(
          (p) =>
            p.id === productId
        );

      if (!product) {
        return;
      }

      const imageContent =
        renderProductImage(
          product,
          false
        );

      const sizesText =
        product.sizes &&
        product.sizes.length
          ? product.sizes.join(" · ")
          : "Contact us for available sizes.";

      const whatsAppMsg =
        `Hi, I'd like to enquire about ${product.brand} ${product.name}.`;

      const modalTitle =
        modalEl.querySelector(
          ".modal-title"
        );

      const modalImage =
        modalEl.querySelector(
          ".product-image"
        );

      const modalBadges =
        modalEl.querySelector(
          ".product-badges"
        );

      const modalDescription =
        modalEl.querySelector(
          ".product-desc"
        );

      const modalSizes =
        modalEl.querySelector(
          ".product-sizes"
        );

      const modalAvailability =
        modalEl.querySelector(
          ".product-avail"
        );

      const waBtn =
        modalEl.querySelector(
          ".btn-whatsapp-solid"
        );

      if (modalTitle) {
        modalTitle.textContent =
          `${product.brand} ${product.name}`;
      }

      if (modalImage) {
        modalImage.innerHTML =
          imageContent;
      }

      if (modalBadges) {
        modalBadges.innerHTML = `
          <span class="badge-pill">
            ${product.brand}
          </span>

          <span class="badge-pill">
            ${product.catalogueCategory || product.category}
          </span>
        `;
      }

      if (modalDescription) {
        modalDescription.textContent =
          product.description;
      }

      if (modalSizes) {
        modalSizes.textContent =
          sizesText;
      }

      if (modalAvailability) {
        modalAvailability.textContent =
          product.availability;
      }

      if (waBtn) {
        waBtn.setAttribute(
          "data-whatsapp-msg",
          whatsAppMsg
        );
      }

      wireWhatsAppLinks(
        modalEl
      );
    }
  );
}


/**
 * Adds a subtle scrolled state to the navigation.
 */
function setupNavbarScrollState() {
  const nav =
    document.querySelector(
      ".navbar-alchemy"
    );

  if (!nav) {
    return;
  }

  const update = () => {
    nav.classList.toggle(
      "is-scrolled",
      window.scrollY > 18
    );
  };

  update();

  window.addEventListener(
    "scroll",
    update,
    {
      passive: true
    }
  );
}


/**
 * Scroll reveal animation.
 */
let revealObserver = null;

function setupScrollReveals(
  scope = document
) {
  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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
    ".quote-sidebar"
  ].join(",");

  const elements =
    Array.from(
      scope.querySelectorAll(
        selector
      )
    ).filter((el) => {
      return (
        !el.matches(
          "#products-grid, #featured-products-grid"
        ) &&
        !el.closest(
          "#products-grid, #featured-products-grid"
        )
      );
    });

  if (!elements.length) {
    return;
  }

  if (
    reduceMotion ||
    !(
      "IntersectionObserver"
      in window
    )
  ) {
    elements.forEach(
      (el) =>
        el.classList.add(
          "is-visible"
        )
    );

    return;
  }

  if (!revealObserver) {
    revealObserver =
      new IntersectionObserver(
        (
          entries,
          observer
        ) => {
          entries.forEach(
            (entry) => {
              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -6% 0px"
        }
      );
  }

  elements.forEach(
    (
      el,
      index
    ) => {
      if (
        el.classList.contains(
          "reveal-on-scroll"
        ) ||
        el.classList.contains(
          "is-visible"
        )
      ) {
        return;
      }

      el.classList.add(
        "reveal-on-scroll"
      );

      el.style.setProperty(
        "--reveal-delay",
        `${
          Math.min(
            (index % 4) * 55,
            165
          )
        }ms`
      );

      revealObserver.observe(
        el
      );
    }
  );
}


/**
 * Smooth transition between internal HTML pages.
 */
function setupPageTransitions() {
  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (reduceMotion) {
    return;
  }

  document.addEventListener(
    "click",
    (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link =
        event.target.closest(
          "a[href]"
        );

      if (
        !link ||
        link.target === "_blank" ||
        link.hasAttribute(
          "download"
        ) ||
        link.hasAttribute(
          "data-bs-toggle"
        )
      ) {
        return;
      }

      const rawHref =
        link.getAttribute(
          "href"
        ) || "";

      if (
        !rawHref ||
        rawHref.startsWith(
          "#"
        ) ||
        /^(mailto:|tel:|javascript:)/i.test(
          rawHref
        )
      ) {
        return;
      }

      let destination;

      try {
        destination =
          new URL(
            link.href,
            window.location.href
          );
      } catch (_) {
        return;
      }

      if (
        destination.origin !==
        window.location.origin
      ) {
        return;
      }

      if (
        destination.pathname ===
          window.location.pathname &&
        destination.search ===
          window.location.search
      ) {
        return;
      }

      event.preventDefault();

      document.body.classList.add(
        "site-leaving"
      );

      window.setTimeout(
        () => {
          window.location.href =
            destination.href;
        },
        150
      );
    }
  );

  window.addEventListener(
    "pageshow",
    () => {
      document.body.classList.remove(
        "site-leaving"
      );
    }
  );
}


/**
 * Homepage hero slideshow.
 */
function setupHeroSlideshow() {
  const hero =
    document.querySelector(
      ".home-hero-slideshow"
    );

  if (!hero) {
    return;
  }

  const slides =
    Array.from(
      hero.querySelectorAll(
        ".home-hero-slide"
      )
    );

  if (
    slides.length <= 1
  ) {
    return;
  }

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  slides.forEach(
    (
      slide,
      index
    ) => {
      slide.classList.toggle(
        "is-active",
        index === 0
      );
    }
  );

  if (reduceMotion) {
    return;
  }

  let currentIndex = 0;

  window.setInterval(
    () => {
      slides[
        currentIndex
      ].classList.remove(
        "is-active"
      );

      currentIndex =
        (
          currentIndex + 1
        ) % slides.length;

      slides[
        currentIndex
      ].classList.add(
        "is-active"
      );
    },
    4600
  );
}


/**
 * Homepage featured products.
 */
function renderFeaturedProducts() {
  const grid =
    document.getElementById(
      "featured-products-grid"
    );

  if (
    !grid ||
    typeof PRODUCTS === "undefined"
  ) {
    return;
  }

  const featured =
    PRODUCTS.filter(
      (p) =>
        p.featured
    );

  grid.innerHTML =
    featured
      .map(
        renderProductCard
      )
      .join("");

  wireWhatsAppLinks(
    grid
  );
}



/**
 * Homepage gallery lightbox.
 * Uses the single Bootstrap modal in index.html and the real supplied images.
 */
function setupGalleryLightbox() {
  const modal =
    document.getElementById(
      "galleryLightbox"
    );

  if (!modal) {
    return;
  }


  const image =
    document.getElementById(
      "galleryLightboxImage"
    );

  const caption =
    document.getElementById(
      "galleryLightboxCaption"
    );


  modal.addEventListener(
    "show.bs.modal",
    (event) => {
      const trigger =
        event.relatedTarget;


      if (!trigger) {
        return;
      }


      const src =
        trigger.getAttribute(
          "data-gallery-src"
        )
        ||
        "";


      const alt =
        trigger.getAttribute(
          "data-gallery-alt"
        )
        ||
        "The Colour Alchemy gallery image";


      const copy =
        trigger.getAttribute(
          "data-gallery-caption"
        )
        ||
        alt;


      if (image) {
        image.src = src;
        image.alt = alt;
      }


      if (caption) {
        caption.textContent = copy;
      }
    }
  );


  modal.addEventListener(
    "hidden.bs.modal",
    () => {
      if (image) {
        image.src = "";
        image.alt = "";
      }

      if (caption) {
        caption.textContent = "";
      }
    }
  );


  document
    .querySelectorAll(
      ".gallery-slide"
    )
    .forEach(
      (slide) => {
        const slideImage =
          slide.querySelector(
            ".showroom-slide-image"
          );

        const trigger =
          slide.querySelector(
            ".gallery-lightbox-trigger"
          );


        if (
          !slideImage
          ||
          !trigger
        ) {
          return;
        }


        slideImage.addEventListener(
          "click",
          () => {
            trigger.click();
          }
        );
      }
    );
}


/**
 * Inspiration page palette filtering.
 * No external colour names or copied content are used.
 */
function setupInspirationFilters() {
  const buttons =
    Array.from(
      document.querySelectorAll(
        "[data-inspiration-filter]"
      )
    );

  const cards =
    Array.from(
      document.querySelectorAll(
        "[data-inspiration-card]"
      )
    );


  if (
    !buttons.length
    ||
    !cards.length
  ) {
    return;
  }


  const applyFilter =
    (filter) => {
      cards.forEach(
        (card) => {
          const spaces =
            (
              card.getAttribute(
                "data-inspiration-space"
              )
              ||
              ""
            )
              .split(/\s+/)
              .filter(Boolean);


          const show =
            filter === "all"
            ||
            spaces.includes(
              filter
            );


          card.hidden =
            !show;
        }
      );


      buttons.forEach(
        (button) => {
          const active =
            button.getAttribute(
              "data-inspiration-filter"
            )
            ===
            filter;


          button.classList.toggle(
            "is-active",
            active
          );


          button.setAttribute(
            "aria-pressed",
            String(active)
          );
        }
      );
    };


  buttons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          applyFilter(
            button.getAttribute(
              "data-inspiration-filter"
            )
            ||
            "all"
          );
        }
      );
    }
  );
}


/* =========================================================
   MAIN SITE INITIALISATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    highlightActiveNavLink();

    setFooterYear();

    wireWhatsAppLinks();

    setupHeroSlideshow();

    renderFeaturedProducts();

    setupProductDetailModal();

    setupGalleryLightbox();

    setupInspirationFilters();

    setupNavbarScrollState();

    setupScrollReveals();

    setupPageTransitions();
  }
);


/* =========================================================
   ALCHY — THE COLOUR ALCHEMY WHATSAPP GUIDE
   Injected on every page that loads main.js.
   ========================================================= */

function setupAlchemyAssistant() {

  /*
   * Remove older floating WhatsApp widgets
   * so only Alchy appears.
   */

  document
    .querySelectorAll(
      ".whatsapp-float, .tca-whatsapp-widget, .tca-wa-widget, #tcaWhatsappWidget"
    )
    .forEach(
      (node) => {
        node.remove();
      }
    );


  /*
   * Prevent duplicate assistant.
   */

  if (
    document.getElementById(
      "tcaAssistWidget"
    )
  ) {
    return;
  }


  const mascotSrc =
    "assets/img/whatsapp/tca-cartoon-boy-widget.png";


  const whatsappUrl =
    "https://wa.me/94711222863?text=" +
    encodeURIComponent(
      "Hi Alchy 👋 I'd like help choosing the right paint or colour for my project."
    );


  const markup = `

    <div
      class="tca-assist-widget"
      id="tcaAssistWidget"
    >


      <!-- Small greeting bubble -->

      <div
        class="tca-assist-teaser"
        id="tcaAssistTeaser"
        aria-hidden="true"
      >

        <button
          type="button"
          class="tca-assist-teaser-card"
          id="tcaAssistTeaserOpen"
          aria-label="Ask Alchy for paint and colour help"
        >

          <span
            class="tca-assist-teaser-line"
          >

            <span
              class="tca-assist-online-dot"
              aria-hidden="true"
            ></span>

            <span
              class="tca-assist-teaser-copy"
            >

              Hi, I'm
              <strong>
                Alchy.
              </strong>

              Let's find the perfect paint for your project.

            </span>

          </span>

        </button>


        <button
          type="button"
          class="tca-assist-teaser-close"
          id="tcaAssistTeaserClose"
          aria-label="Close Alchy greeting"
        >

          <i
            class="bi bi-x-lg"
            aria-hidden="true"
          ></i>

        </button>

      </div>



      <!-- Full chat panel -->

      <div
        class="tca-assist-panel"
        id="tcaAssistPanel"
        aria-hidden="true"
        role="dialog"
        aria-label="Alchy paint and colour assistant"
      >

        <div
          class="tca-assist-header"
        >

          <div
            class="tca-assist-header-avatar"
            aria-hidden="true"
          >

            <img
              src="${mascotSrc}"
              alt=""
            >

          </div>


          <div
            class="tca-assist-header-copy"
          >

            <strong>
              Alchy
            </strong>

            <span>
              The Colour Alchemy · Colour Guide
            </span>

          </div>


          <button
            type="button"
            class="tca-assist-panel-close"
            id="tcaAssistPanelClose"
            aria-label="Close Alchy assistant"
          >

            <i
              class="bi bi-x-lg"
              aria-hidden="true"
            ></i>

          </button>

        </div>



        <div
          class="tca-assist-body"
        >

          <div
            class="tca-assist-message"
          >

            <span
              class="tca-assist-message-name"
            >
              Alchy
            </span>

            <p>
              Hi there! 👋
            </p>

            <p>
              Need help choosing paint, colours or preparation products?
            </p>

          </div>

        </div>



        <div
          class="tca-assist-footer"
        >

          <a
            class="tca-assist-whatsapp"
            href="${whatsappUrl}"
            target="_blank"
            rel="noopener noreferrer"
          >

            <i
              class="bi bi-whatsapp"
              aria-hidden="true"
            ></i>

            <span>
              Continue on WhatsApp
            </span>

          </a>

          <small>
            Opens a chat with The Colour Alchemy team
          </small>

        </div>

      </div>



      <!-- Floating cartoon launcher -->

      <button
        type="button"
        class="tca-assist-launcher"
        id="tcaAssistLauncher"
        aria-label="Open Alchy paint and colour assistant"
        aria-expanded="false"
      >

        <span
          class="tca-assist-launcher-avatar"
        >

          <img
            src="${mascotSrc}"
            alt="Alchy, The Colour Alchemy guide"
          >

        </span>


        <span
          class="tca-assist-wa-badge"
          aria-hidden="true"
        >

          <i
            class="bi bi-whatsapp"
          ></i>

        </span>

      </button>


    </div>
  `;


  document.body.insertAdjacentHTML(
    "beforeend",
    markup
  );


  const widget =
    document.getElementById(
      "tcaAssistWidget"
    );

  const launcher =
    document.getElementById(
      "tcaAssistLauncher"
    );

  const panel =
    document.getElementById(
      "tcaAssistPanel"
    );

  const panelClose =
    document.getElementById(
      "tcaAssistPanelClose"
    );

  const teaser =
    document.getElementById(
      "tcaAssistTeaser"
    );

  const teaserOpen =
    document.getElementById(
      "tcaAssistTeaserOpen"
    );

  const teaserClose =
    document.getElementById(
      "tcaAssistTeaserClose"
    );


  if (
    !widget ||
    !launcher ||
    !panel
  ) {
    return;
  }


  let teaserDismissed =
    false;


  function hideTeaser() {
    if (!teaser) {
      return;
    }

    teaser.classList.remove(
      "is-visible"
    );

    teaser.setAttribute(
      "aria-hidden",
      "true"
    );
  }


  function showTeaser() {
    if (
      !teaser ||
      teaserDismissed ||
      panel.classList.contains(
        "is-open"
      )
    ) {
      return;
    }

    teaser.classList.add(
      "is-visible"
    );

    teaser.setAttribute(
      "aria-hidden",
      "false"
    );
  }


  function openPanel() {
    hideTeaser();

    panel.classList.add(
      "is-open"
    );

    panel.setAttribute(
      "aria-hidden",
      "false"
    );

    launcher.setAttribute(
      "aria-expanded",
      "true"
    );
  }


  function closePanel() {
    panel.classList.remove(
      "is-open"
    );

    panel.setAttribute(
      "aria-hidden",
      "true"
    );

    launcher.setAttribute(
      "aria-expanded",
      "false"
    );
  }


  launcher.addEventListener(
    "click",
    () => {
      if (
        panel.classList.contains(
          "is-open"
        )
      ) {
        closePanel();
      } else {
        openPanel();
      }
    }
  );


  if (panelClose) {
    panelClose.addEventListener(
      "click",
      closePanel
    );
  }


  if (teaserOpen) {
    teaserOpen.addEventListener(
      "click",
      openPanel
    );
  }


  if (teaserClose) {
    teaserClose.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();

        teaserDismissed =
          true;

        hideTeaser();
      }
    );
  }


  document
    .querySelectorAll(
      "[data-alchy-open]"
    )
    .forEach(
      (button) => {
        button.addEventListener(
          "click",
          openPanel
        );
      }
    );


  document.addEventListener(
    "click",
    (event) => {
      if (
        !panel.classList.contains(
          "is-open"
        )
      ) {
        return;
      }

      if (
        widget.contains(
          event.target
        )
      ) {
        return;
      }

      if (
        event.target.closest(
          "[data-alchy-open]"
        )
      ) {
        return;
      }

      closePanel();
    }
  );


  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key ===
        "Escape"
      ) {
        closePanel();
      }
    }
  );


  /*
   * Show greeting after 1.6 seconds.
   */

  window.setTimeout(
    showTeaser,
    1600
  );


  /*
   * Hide greeting after about 12.6 seconds
   * if the chat panel was not opened.
   */

  window.setTimeout(
    () => {
      if (
        !panel.classList.contains(
          "is-open"
        )
      ) {
        hideTeaser();
      }
    },
    12600
  );

}


document.addEventListener(
  "DOMContentLoaded",
  setupAlchemyAssistant
);