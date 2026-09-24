# Omar Al Boustany — Portfolio

A React and Vite portfolio with project galleries. It is a static website with no backend or environment variables.

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

## Deploy from GitHub

Connect this repository to a static hosting service such as Cloudflare Pages or Netlify. Use:

- Build command: `npm run build`
- Output/publish directory: `dist`
- Root directory: repository root

Project pages use the root URL with a query parameter (for example, `/?project=argentum`), so static hosting works without server-side routing.

## Edit content

- Project names, descriptions, tags, images, and gallery order: `src/projects.js`
- Work cards and scroll animation: `src/components/RecentWorks.jsx`
- Project gallery page: `src/components/ProjectDetail.jsx`
- Colors and responsive styles: `src/index.css`
- Images: `public/` and `public/projects/`

The contact link currently uses `omarboustany100@gmail.com`. Update it in `src/components/Footer.jsx` if needed.
