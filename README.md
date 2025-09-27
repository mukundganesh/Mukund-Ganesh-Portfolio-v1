# Mukund Sai Ganesh - Portfolio

Production-ready personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. All content is sourced from JSON files to keep presentation and data cleanly separated.

## Tech Highlights
- Next.js App Router with streaming-friendly layout primitives
- Tailwind CSS with custom palette tokens and dark-first design
- Framer Motion reveal system with prefers-reduced-motion support
- TypeScript-first content models backed by structured JSON under `/content`
- Lucide icons, custom button component, and scroll-spy navigation
- Ready-to-deploy configuration for Vercel and Netlify

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [`http://localhost:3000`](http://localhost:3000) to explore the site. The page auto-refreshes as you edit files.

## Project Structure
- `app/` - App Router entry point, layout, and global styles
- `components/` - Reusable UI, motion primitives, and section modules
- `content/` - Resume-derived JSON powering each section
- `public/` - Static assets such as the illustrated portrait
- `types/` - TypeScript definitions for content data

## Deployment
- **Vercel**: configuration captured in `vercel.json` (`npm run build` + `npm run dev` commands)
- **Netlify**: `netlify.toml` uses the official Next.js plugin for edge-ready builds

## License & Usage
- Code is licensed under MIT (see `LICENSE`).
- Personal resume content, images, and text are © Mukund Sai Ganesh Konkepudi and not licensed for reuse.

## Accessibility & Performance
- Semantic HTML, focus-visible rings, and high-contrast palette
- Motion system respects reduced-motion preferences with graceful fallbacks
- `next/image` optimizations for media assets

## Scripts
- `npm run dev` - Start local development with Turbopack
- `npm run build` - Create an optimized production build
- `npm run start` - Serve the production build
- `npm run lint` - Run ESLint
- `npm run format` - Apply Prettier formatting




