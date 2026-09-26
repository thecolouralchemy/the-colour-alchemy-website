/* =========================================================
   THE COLOUR ALCHEMY — Quotation form
   Static-site form delivery via FormSubmit + WhatsApp fallback.
   No API keys or private credentials are stored in the frontend.
   ========================================================= */

(function () {
  "use strict";

  const form = document.getElementById("quotation-form");
  if (!form) return;

  const submitButton = document.getElementById("quote-submit");
  const whatsappButton = document.getElementById("quote-whatsapp");
  const status = document.getElementById("quote-status");
  const buttonLabel = submitButton?.querySelector(".button-label");
  const buttonLoading = submitButton?.querySelector(".button-loading");

  function value(id) {
    return document.getElementById(id)?.value.trim() || "";
  }

  function setLoading(isLoading) {
    if (!submitButton) return;
    submitButton.disabled = isLoading;
    buttonLabel?.classList.toggle("d-none", isLoading);
    buttonLoading?.classList.toggle("d-none", !isLoading);
  }

  function setStatus(type, message) {
    if (!status) return;
    status.className = `quote-status ${type ? `is-${type}` : ""}`.trim();
    status.innerHTML = message;
  }

  function validateForm() {
    form.classList.add("was-validated");
    return form.checkValidity();
  }

  function buildQuoteWhatsAppMessage() {
    const details = [
      "Hi, I'd like to request a quotation from The Colour Alchemy.",
      "",
      `Name: ${value("quote-name") || "Not provided"}`,
      `Phone: ${value("quote-phone") || "Not provided"}`,
      value("quote-email") ? `Email: ${value("quote-email")}` : "",
      value("quote-location") ? `Project location: ${value("quote-location")}` : "",
      `Enquiry: ${value("quote-enquiry") || "Not specified"}`,
      `Preferred brand: ${value("quote-brand") || "No preference"}`,
      value("quote-quantity") ? `Quantity / sizes: ${value("quote-quantity")}` : "",
      value("quote-project") ? `Project type: ${value("quote-project")}` : "",
      "",
      `Requirements: ${value("quote-requirements") || "Not provided"}`,
    ].filter(Boolean);

    return details.join("\n");
  }

  whatsappButton?.addEventListener("click", () => {
    if (!validateForm()) {
      setStatus("error", "Please complete the required fields before sending the quotation details on WhatsApp.");
      form.querySelector(":invalid")?.focus();
      return;
    }
    window.open(buildWhatsAppLink(buildQuoteWhatsAppMessage()), "_blank", "noopener");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus("error", "Please check the highlighted fields and complete the required information.");
      form.querySelector(":invalid")?.focus();
      return;
    }

    setLoading(true);
    setStatus("", "");

    try {
      const formData = new FormData(form);

      // Keep the delivery target in quotation.html as the single source of truth.
      // FormSubmit's AJAX endpoint keeps the customer on this page after sending.
      const ajaxEndpoint = form.action.replace(
        "https://formsubmit.co/",
        "https://formsubmit.co/ajax/"
      );

      const response = await fetch(ajaxEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) throw new Error("Quotation service returned an error.");

      const result = await response.json().catch(() => ({}));
      if (result.success === false) throw new Error(result.message || "Quotation service returned an error.");

      form.reset();
      form.classList.remove("was-validated");
      setStatus(
        "success",
        '<i class="bi bi-check-circle" aria-hidden="true"></i><span>Thank you. Your quotation request has been submitted. We’ll contact you using the details provided.</span>'
      );
      status?.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (error) {
      setStatus(
        "error",
        '<i class="bi bi-exclamation-circle" aria-hidden="true"></i><span>We could not send the form right now. Please use the WhatsApp button or email <a href="mailto:saheedsons53@gmail.com">saheedsons53@gmail.com</a>.</span>'
      );
    } finally {
      setLoading(false);
    }
  });
})();
