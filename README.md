# Portfolio site

Astro + markdown content collections. Fully static, no backend, no database.

## 1. Run it locally

```
npm install
npm run dev
```

Open http://localhost:4321 — edit files, the page hot-reloads.

## 2. Fill in your real content

Everywhere you see `EDIT ME` is a placeholder:

- `src/layouts/Layout.astro` — your site name (used in the header and page titles)
- `src/pages/index.astro` — your name, role, one-line bio, stack, location, socials, and the
  Formspree form ID (sign up free at https://formspree.io, create a form, paste the ID in
  where it says `YOUR_FORM_ID` — until you do this the contact form goes nowhere)
- `src/content/projects/*.md` — delete the three `example-*.md` files (or edit them in place)
  and add one `.md` file per real project. Copy the frontmatter shape from an existing file;
  the schema in `src/content.config.ts` will error at build time if a required field is missing
  or the wrong type, so you can't accidentally ship a broken project page.

## 3. Push to GitHub

```
git init
git add .
git commit -m "Initial portfolio"
```

Create a new repo on GitHub, then follow its "push an existing repo" instructions.

## 4. Deploy on Cloudflare Pages

1. Go to the Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Pick this repo. Framework preset: **Astro**. Build command: `npm run build`. Output
   directory: `dist`.
3. Deploy. Every push to `main` rebuilds and redeploys automatically.
4. In the project's "Custom domains" tab, add the domain you bought and follow the DNS
   instructions (if the domain is already on Cloudflare, this is close to automatic).
5. Update `site` in `astro.config.mjs` to your real domain.

## Adding a project later

Add a new file in `src/content/projects/`, fill in the frontmatter, write the body in markdown.
That's it — no code changes, no rebuild step to remember, Cloudflare handles it on push.
