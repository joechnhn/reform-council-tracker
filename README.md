# Reform Council Tracker

A single-page site tracking decisions by Reform-run councils across three areas:
cuts to public services, council tax hikes, and scandals & resignations.

## Files

- `index.html` – the page (layout, styling, slider)
- `data.js` – the tracker entries. **Edit this file to add records.**
- `story.html` – the page for a single story, filled in from `data.js`
- `common.js` – shared code used by both pages (no need to edit)
- `privacy.html` – privacy policy page (placeholder wording for now)
- `map.js` – UK council boundaries for the map (generated from ONS data; no need to edit)

## Publishing on GitHub Pages

1. On github.com, click **+ → New repository**. Name it (e.g. `reform-council-tracker`)
   and set it to **Public** (Pages on a free account needs a public repo).
2. In the new repo, click **uploading an existing file**, drag in all the files
   from this folder, and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to
   **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then **Save**.
4. After a minute or two the site is live at
   `https://<your-username>.github.io/<repo-name>/`

## Updating

Open `data.js` on GitHub, click the pencil icon, edit, and commit.
The live site updates within a minute or two.

`data.js` also holds the list of Reform-run councils (`COUNCILS`), which drives the
map shading and the postcode lookup. Seat numbers change with by-elections and
defections, so check them now and then. Tracker entries are matched to councils by
name, so "Kent" and "Kent County Council" both work.

The "Missing something?" form at the bottom is a demo: it checks the fields and
shows a thank-you message, but nothing is sent or stored yet. The place to
connect it to a database is marked `DEMO ONLY` in `index.html`.

Every entry has its own page at `story.html?id=...`, with share buttons. See the
notes at the top of `data.js` for the optional `body` (full story text) and `id`
(to keep a link fixed if you later edit the headline) fields.

Link to a specific section by adding `#cuts`, `#tax` or `#scandal` to the URL.
