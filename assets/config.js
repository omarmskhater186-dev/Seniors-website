/* =============================================================================
   Seniors — SITE CONFIG
   -----------------------------------------------------------------------------
   This is the ONE place to change contact details for the whole site.
   Swap the placeholder values below for the real ones when ready.
   ========================================================================== */

window.SENIORS_CONFIG = {
  /* WhatsApp number in INTERNATIONAL format, digits only (no +, no spaces).
     Example for Cairo, Egypt: "201234567890"  ( = +20 123 456 7890 )
     >>> PLACEHOLDER — replace with the real clinic number. <<<            */
  whatsappNumber: "20XXXXXXXXXX",

  /* Pre-filled message that opens in WhatsApp when someone taps "Book". */
  whatsappMessage: {
    en: "Hello Seniors, I would like to book an appointment.",
    ar: "مرحباً سينيورز، أود حجز موعد.",
  },

  /* Optional: shown in the footer / contact area. Placeholders for now. */
  phoneDisplay: "+20 XX XXX XXXX",
  email: "hello@seniors.example",
  addressLine: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },

  /* Default language the site loads in: "en" or "ar". */
  defaultLang: "en",
};

/* Builds a ready-to-use WhatsApp chat link from the config above.
   Used by every "Book / Contact" button so the number lives in one place. */
window.buildWhatsAppLink = function (lang) {
  var cfg = window.SENIORS_CONFIG;
  var msg = (cfg.whatsappMessage && cfg.whatsappMessage[lang]) || "";
  return "https://wa.me/" + cfg.whatsappNumber + "?text=" + encodeURIComponent(msg);
};
