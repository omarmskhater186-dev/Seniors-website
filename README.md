# Seniors — bilingual marketing website

A calm, senior-friendly, **bilingual (English / Arabic)** marketing site for
**Seniors**, an integrated geriatric care organisation in Cairo. One umbrella
brand with three parts, shown as tabs:

1. **Seniors** — the umbrella brand & overview (landing)
2. **Seniors Clinic** — the geriatric medical practice
3. **Seniors Connect** — the community / life-enrichment programme

Built as a plain static site (HTML + CSS + a little JavaScript) — **no build
step**, easy to edit, easy to host anywhere.

## Preview it

Either just open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Use the **العربية / English** button (top-right) to switch languages — the
whole layout mirrors to right-to-left for Arabic.

## Where to edit things

| You want to change…                    | Edit this file              |
|----------------------------------------|-----------------------------|
| Any text (English **and** Arabic)      | `assets/js/content.js`      |
| The WhatsApp number / contact details  | `assets/config.js`          |
| Colours, fonts, spacing, layout        | `assets/css/styles.css`     |
| The logo                               | `assets/img/logo.svg`       |
| Page structure                         | `index.html`                |

**Content is kept EN/AR side by side** in `content.js`, e.g.:

```js
"clinic.lead": { en: "Specialist geriatric medical care.",
                 ar: "رعاية طبية متخصصة لكبار السن." },
```

Change the words between the quotes — nothing else.

## Brand

- **Fonts:** Montserrat (English), DG Sahabah (Arabic). Montserrat and a Cairo
  fallback load from Google Fonts; drop the real `DGSahabah.woff2` into
  `assets/fonts/` to use the exact Arabic face.
- **Colours:** Aegean `#144053`, Baby `#6dcad6`, Oceana `#489399`,
  Metal Gray `#9c9da0`, Cloudy Gray `#dddddd`, White `#ffffff`.
- **Accessibility:** large default text, generous tap targets, WCAG-AA contrast,
  visible keyboard focus, skip link, responsive for phone / iPad / desktop.

## WhatsApp booking

Every **Book / Contact us** button opens a WhatsApp chat. The number is a
clearly-marked placeholder (`20XXXXXXXXXX`) in **one place** — `assets/config.js`.
Swap it for the real number and you're done.

## Build status (stages)

- [x] **Stage 1 — Structure & shell** (nav, EN/AR toggle, branding, responsive, footer)
- [x] **Stage 2 — Seniors (umbrella) landing** (hero, "what is Seniors", the three
      parts as cards with a path into each, values strip, closing CTA)
- [x] **Stage 3 — Seniors Clinic** (services: clinic/home visits, telemedicine,
      WhatsApp consultations; who it's for; WhatsApp booking CTA)
- [x] **Stage 4 — Seniors Connect** (activities: Memory Café, book club, walks,
      cultural trips, technology sessions, Memories Studio; join/volunteer; contact)
- [x] **Stage 5 — Polish** (imagery placeholders, shared contact section,
      consistent spacing, final EN/AR pass in both directions — no RTL overflow)

## Live preview

The site auto-deploys to **GitHub Pages** on every push to the development branch:
**https://omarmskhater186-dev.github.io/Seniors-website/**

(Workflow: `.github/workflows/pages.yml`.)
