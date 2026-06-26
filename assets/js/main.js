/* =============================================================================
   Seniors — UI BEHAVIOUR
   -----------------------------------------------------------------------------
   Handles:
     1. EN / AR language switching (text + right-to-left mirroring)
     2. Tab switching between the three parts (Seniors / Clinic / Connect)
     3. Wiring every "Book / Contact" button to one WhatsApp link
     4. The mobile navigation menu
   You rarely need to touch this file — copy lives in content.js, the phone
   number lives in config.js.
   ========================================================================== */

(function () {
  "use strict";

  var CONTENT = window.SENIORS_CONTENT || {};
  var CONFIG  = window.SENIORS_CONFIG || {};
  var STORAGE_KEY = "seniors.lang";

  /* ---- Language ------------------------------------------------------- */

  function getInitialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return saved === "ar" || saved === "en" ? saved : (CONFIG.defaultLang || "en");
  }

  function applyLang(lang) {
    var html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.body.setAttribute("data-lang", lang);

    /* Fill every element that has a data-i18n key. */
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var entry = CONTENT[key];
      if (entry && entry[lang] != null) node.textContent = entry[lang];
    });

    /* Update the language toggle label (shows the OTHER language). */
    var toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) {
      var otherKey = lang === "en" ? "lang.toggleToAr" : "lang.toggleToEn";
      toggle.textContent = CONTENT[otherKey] ? CONTENT[otherKey][lang] : (lang === "en" ? "العربية" : "English");
      toggle.setAttribute("aria-label",
        lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية");
    }

    /* Refresh WhatsApp links so the pre-filled message matches the language. */
    var waLink = window.buildWhatsAppLink ? window.buildWhatsAppLink(lang) : "#";
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      a.setAttribute("href", waLink);
    });

    /* Fill contact details from config (phone / email / address). These are
       not in content.js because they're the same in both languages — except
       the address, which can differ. */
    fillContact(lang);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function toggleLang() {
    var current = document.body.getAttribute("data-lang") || "en";
    applyLang(current === "en" ? "ar" : "en");
  }

  /* Fill phone / email / address from config.js into the contact section
     and footer, and make the phone/email rows tappable links. */
  function fillContact(lang) {
    var phone = CONFIG.phoneDisplay || "";
    var email = CONFIG.email || "";
    var addr  = (CONFIG.addressLine && CONFIG.addressLine[lang]) || "";

    document.querySelectorAll("[data-contact-phone-text]").forEach(function (n) { n.textContent = phone; });
    document.querySelectorAll("[data-contact-email-text]").forEach(function (n) { n.textContent = email; });
    document.querySelectorAll("[data-contact-address]").forEach(function (n) { n.textContent = addr; });

    document.querySelectorAll("[data-contact-phone]").forEach(function (a) {
      a.setAttribute("href", "tel:" + phone.replace(/\s+/g, ""));
    });
    document.querySelectorAll("[data-contact-email]").forEach(function (a) {
      a.setAttribute("href", "mailto:" + email);
    });
  }

  /* ---- Tabs (the three parts) ---------------------------------------- */

  function showTab(name) {
    var panels = document.querySelectorAll(".tab-panel");
    panels.forEach(function (p) {
      var match = p.getAttribute("id") === name;
      p.classList.toggle("is-active", match);
      p.toggleAttribute("hidden", !match);
    });

    document.querySelectorAll("[data-tab]").forEach(function (btn) {
      var active = btn.getAttribute("data-tab") === name;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    if (history.replaceState) {
      history.replaceState(null, "", "#" + name);
    }
    /* Move focus to the panel heading for screen-reader users. */
    var heading = document.querySelector("#" + name + " [data-panel-heading]");
    if (heading) heading.setAttribute("tabindex", "-1");
  }

  function initTabs() {
    document.querySelectorAll("[data-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        showTab(btn.getAttribute("data-tab"));
        closeMobileMenu();
      });
    });

    var fromHash = (location.hash || "").replace("#", "");
    var valid = fromHash && document.getElementById(fromHash) &&
                document.getElementById(fromHash).classList.contains("tab-panel");
    showTab(valid ? fromHash : "seniors");
  }

  /* ---- Mobile menu --------------------------------------------------- */

  function closeMobileMenu() {
    var nav = document.querySelector("[data-nav]");
    var burger = document.querySelector("[data-menu-toggle]");
    if (nav) nav.classList.remove("is-open");
    if (burger) burger.setAttribute("aria-expanded", "false");
  }

  function initMobileMenu() {
    var burger = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- Boot ---------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) toggle.addEventListener("click", toggleLang);

    initMobileMenu();
    initTabs();
    applyLang(getInitialLang());
  });
})();
