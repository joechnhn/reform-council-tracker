# Reform Council Tracker

A single-page site tracking decisions by Reform-run councils across three areas:
cuts to public services, council tax hikes, and scandals & resignations.

## Files

- `index.html` – the page (layout, styling, slider)
- `data.js` – the tracker entries. **Edit this file to add records.**

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

Link to a specific section by adding `#cuts`, `#tax` or `#scandal` to the URL.
