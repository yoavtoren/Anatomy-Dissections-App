# Interactive Anatomy Atlas

A single-page, dissection-oriented anatomy study site. Built as a **single
`index.html`** file with no build step — works on Chrome, Safari, Firefox, and
on GitHub Pages out of the box.

## What's inside

- **Welcome page** — three big tiles: Term Library, CNS / PNS, Topography
- **Term Library** — searchable, filterable terms with their *borders* and
  definitions, exactly as written in the source materials. Includes:
  - Topographies (scalp, fossae, neck triangles, axilla, mediastinum, …)
  - Surface projection points: McBurney, Lanz, Murphy, Desjardin, Labbé
  - Pouches: Douglas, vesicouterine, rectovesical
  - Inguinal: Hesselbach's triangle, inguinal canal
  - Pelvis & perineum landmarks
- **CNS / PNS** — interactive map with brain, spinal cord, all 12 cranial
  nerves, peripheral plexuses, and the autonomic divisions
- **Topography** — interactive body silhouette with **+ markers** on every
  region. Click a region → see all subregions → drill into the details.
  Abdomen splits into the 4 quadrants (RUQ, LUQ, RLQ, LLQ).

## How to publish on GitHub Pages

1. Create a new GitHub repository (e.g. `anatomy-atlas`).
2. Upload **all files in this folder** — `index.html`, `images/`, `README.md`.
3. In the repo: **Settings → Pages**.
4. Under "Build and deployment" set **Source = Deploy from a branch**, **Branch
   = `main` / `(root)`**, then save.
5. Wait ~1 minute. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

That's it — the site is completely static and self-contained.

## Adding images later (with Claude Code)

Image placeholders are scattered across the site. Each placeholder names the
exact file the site expects, e.g. `images/external-carotid-artery.jpg`.

When you run Claude Code in this folder, it can prompt you for one image at a
time:

> *"Now upload an image of the external carotid artery and save it as
> `images/external-carotid-artery.jpg`."*

Just drop the file into `images/` with the requested filename. The site picks
it up automatically — no code changes needed. Missing images are silently
hidden so the site always renders cleanly.

See [`images/README.md`](images/README.md) for the full list of filenames the
site is currently looking for.

## File layout

```
.
├── index.html              # The whole site — content, styling, routing
├── README.md               # This file
└── images/
    ├── README.md           # List of expected image filenames
    └── (your images here)
```

## Editing content

All anatomical content is defined inside `index.html` as JavaScript data
objects, near the top of the `<script>` block:

- `TERMS` — array of terms in the library
- `REGIONS` — top-level regions on the body map
- `DETAILS` — per-subregion detail pages (head, neck, chest, abdomen, etc.)
- `CNS_PNS` — CNS / PNS sections shown on the map
- `CNS_DETAILS` — per CN / plexus detail pages

Each entry has a clear, self-explanatory shape — duplicate one and edit it to
add a new term or subregion.

## Source attribution

Content was adapted directly from the provided study resources:

- *13. Regional Anatomy.docx*
- *Summer Anatomy Dissection Booklet*
- *SS Dissections Workshop '24*

Terminology and nomenclature follow the source material wherever possible.
