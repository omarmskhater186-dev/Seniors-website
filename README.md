# 60+ Seniors Clinic — bilingual website

A calm, trustworthy, **bilingual (English / Arabic)** single-page website for the
**60+ Seniors Clinic**, a geriatric medicine practice in **Nasr City, Cairo**,
led by **Professor Mohamed Shawky Khater**.

The whole site is **one self-contained file — `index.html`** (HTML, CSS and
JavaScript all inline). There is no build step: just open it in a browser.

## Preview it

Double-click `index.html`, or run a tiny local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Use the **العربية / English** button (top-right) to switch languages — the whole
layout mirrors to true right-to-left for Arabic.

## What's on the page (single page, sections)

1. **Hero** — Prof. Khater's photo, name and title, one reassuring line, and a
   clear primary action (book a visit / WhatsApp).
2. **About Prof. Khater** — brief, credible, human.
3. **Services** — in plain family language: home visits, complex/multiple-condition
   care, medication review, memory & dementia, falls, full geriatric assessment.
4. **Home visits** — its own prominent section (the key differentiator).
5. **Contact** — phone, WhatsApp, location and clinic hours, repeated clearly.

## Where to edit things (all inside `index.html`)

| You want to change…                         | Edit this part of `index.html`              |
|---------------------------------------------|---------------------------------------------|
| Phone / WhatsApp number / contact details   | the **`CONFIG`** object (top of the script) |
| Any text (English **and** Arabic)           | the **`I18N`** dictionary (in the script)   |
| Colours, fonts, spacing, layout             | the **`<style>`** block in the `<head>`     |
| The logo                                    | the **`.brand-logo`** placeholder in the header |
| Photos                                      | replace each **grey image placeholder**     |

Content is kept EN/AR side by side, e.g.:

```js
"svc.home.h": { en:"Home visits", ar:"الزيارات المنزلية" },
```

## Placeholders to fill in

Everything we still need from you is **clearly marked** in the page:

- **Contact** — phone, WhatsApp, address, clinic hours (in `CONFIG` and the
  hours rows). Look for `XX`, `…`, and `[ … ]`.
- **About** — specific credentials (university, years in practice, hospital
  affiliations) are marked **`[To confirm]`**.
- **Photos** — each grey box states the **exact size** and **what to show**
  (Prof. Khater portrait, a home-visit photo, the clinic location).
- **Logo** — the “60+” box in the header is a placeholder; drop in the real file.

## Brand

- **Colours:** Aegean `#144053` (primary), Baby `#6dcad6`, Oceana `#489399`,
  Metal Gray `#9c9da0`, Cloudy Gray `#dddddd`, White `#ffffff` (dominant).
  Used sparingly — mostly Aegean Blue on white.
- **Fonts:** Montserrat (English); DG Sahabah (Arabic) with **Cairo** as a
  graceful fallback. Drop a real `DGSahabah.woff2` into `assets/fonts/` to use
  the exact Arabic face.
- **Accessibility:** large default text, generous tap targets, WCAG-AA contrast,
  visible keyboard focus, skip link, true RTL, mobile-first responsive.

## Notes

- `seniors-umbrella.html` is the earlier multi-brand “Seniors” concept
  (Clinic + Connect), kept for reference. The live site is `index.html`.
- The code is heavily commented so it can later be moved to **WordPress**.
