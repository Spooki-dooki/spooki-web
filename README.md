# Spooki Web

One-page marketing site for Spooki Web (Astro + Tailwind CSS, static output).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
```

## Before launch

- Set your real email and phone in `src/config.ts`.
- Add a screenshot of the MCA Vending site at `src/assets/mca-vending.png` (it is picked up automatically).
- Once you have a custom domain, set the `SITE_URL` env var in Cloudflare Pages and update the `Sitemap:` line in `public/robots.txt`.

## Deploy to Cloudflare Pages

Connect this repo in Cloudflare Pages with:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION=22`
