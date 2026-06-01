# Piña Local Sites

Marketing site for [pinalocalsites.com](https://pinalocalsites.com), built with React and Vite.

## Local development

Requires [Node.js](https://nodejs.org/) 22+ and [pnpm](https://pnpm.io/) 9.

```bash
pnpm install
pnpm dev
```

The dev server runs at http://localhost:5173 by default.

## Deploy to Cloudflare Pages (Git)

This repo is set up for a **static** Cloudflare Pages deploy of the site in `artifacts/pina-local-sites`.

1. Push this repository to GitHub (or GitLab).
2. In the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repository and use these build settings:

| Setting | Value |
|--------|--------|
| **Framework preset** | None |
| **Build command** | `pnpm run build:pages` |
| **Build output directory** | `artifacts/pina-local-sites/dist/public` |

Cloudflare will also read `pages_build_output_dir` from [`wrangler.toml`](wrangler.toml) if the output directory field is left empty.

4. Under **Environment variables**, you usually do not need any for a static build. Optional overrides:

| Variable | Purpose |
|----------|---------|
| `BASE_PATH` | Asset and router base path (default `/`) |
| `NODE_VERSION` | Set to `22` if the dashboard does not pick up [`.node-version`](.node-version) |

5. Deploy. Client-side routes (`/privacy-policy`, `/terms-of-service`, `/your-offer`, etc.) are handled by [`public/_redirects`](artifacts/pina-local-sites/public/_redirects) (SPA fallback to `index.html`).

### Custom domain

After the first deploy, add your domain under **Custom domains** in the Pages project (e.g. `pinalocalsites.com`).

## Monorepo layout

| Path | Purpose |
|------|---------|
| `artifacts/pina-local-sites` | **Production static site** (deploy this) |
| `artifacts/api-server` | Replit API server (not used for static Pages hosting) |
| `artifacts/mockup-sandbox` | Internal mockup tooling |
| `lib/*` | Shared packages (workspace dependencies) |
