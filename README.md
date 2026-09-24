# Omar Al Boustany — Portfolio

A React and Vite portfolio with project galleries. It is a static website: no backend, account, or environment variables are required.

## Run locally

Install Node.js 20 or newer, then run:

```bash
npm ci
npm run dev
```

Open the local address printed by Vite. For a production check:

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Put the source on GitHub

Create an empty GitHub repository, extract this ZIP, and upload **the contents of this folder** to the repository root. Do not upload `node_modules/` or `dist/`; the host builds those from `package.json` and `package-lock.json`. You can also initialize Git locally and push the folder to your repository.

## Deploy from GitHub

Connect the repository to Cloudflare Pages or Netlify. Use:

- Build command: `npm run build`
- Output/publish directory: `dist`
- Root directory: repository root

Project pages use the root URL with a query parameter (for example, `/?project=argentum`), so normal static hosting works without server-side routing. Keep the repository private if you do not want the source images publicly browsable in GitHub; the deployed website itself will still display the selected project images publicly.

## Edit content

- Project names, descriptions, tags, images, and gallery order: `src/projects.js`
- Work cards and scroll animation: `src/components/RecentWorks.jsx`
- Project gallery page: `src/components/ProjectDetail.jsx`
- Colors and responsive styles: `src/index.css`
- Images: `public/` and `public/projects/`

The contact link currently uses `omarboustany100@gmail.com`. Update it in `src/components/Footer.jsx` if needed.
