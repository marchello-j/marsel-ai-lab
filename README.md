# Marsel AI Lab Portfolio

A modern portfolio website for Marsel AI Lab, focused on AI automation, Telegram AI bots, landing pages, YouTube niche research tools, and business automation workflows.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- SEO metadata
- EN / RU language switcher
- Light / Dark / System theme switcher
- Vercel-ready deployment

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Project Structure

```text
app/
  back-to-top.tsx
  globals.css
  home-client.tsx
  icon.svg
  layout.tsx
  page.tsx
public/
  og-image.svg
package.json
next.config.ts
tsconfig.json
postcss.config.mjs
eslint.config.mjs
```

## SEO

Production metadata uses `NEXT_PUBLIC_SITE_URL` when available. Set it in Vercel to the final public domain.

## Deployment

This project is ready for Vercel:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Use the default Next.js build settings.
4. Deploy.

Default production build command:

```bash
npm run build
```
