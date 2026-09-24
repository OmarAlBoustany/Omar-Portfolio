# Omar Al Boustany — Portfolio

A React and Vite portfolio with project galleries. This static site has no backend or environment variables.

**Live site:** https://omaralboustany.github.io/Omar-Portfolio/

## Run locally

Install Node.js 20 or newer, then run:

```bash
npm ci
npm run dev
```

For a production check:

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Publishing

GitHub Pages publishes this repository automatically. A push to `main` runs `.github/workflows/deploy.yml`, builds the site, and deploys `dist/`. Check the **Actions** tab for the result. The Vite base path in `vite.config.js` is `/Omar-Portfolio/`; keep it aligned with the repository name. Project pages use a query parameter, such as `/Omar-Portfolio/?project=argentum`.

## Edit content

- Project names, descriptions, tags, images, and gallery order: `src/projects.js`
- Work cards and scroll animation: `src/components/RecentWorks.jsx`
- Project gallery page: `src/components/ProjectDetail.jsx`
- Colors and responsive styles: `src/index.css`
- Images: `public/` and `public/projects/`

The contact link currently uses `omarboustany100@gmail.com`. Update it in `src/components/Footer.jsx` if needed.
