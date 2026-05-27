# Naman Bhalani — Premium Portfolio (v2)

Next.js 15 portfolio with scroll-driven frame animation, multi-page routing, premium UI, and a dedicated Work showcase.

## Stack

- **Next.js 15** (App Router) + TypeScript + static export
- **Tailwind CSS v4** + Framer Motion + GSAP ScrollTrigger
- **Lenis** smooth scroll · **next-themes** · **EmailJS** (optional)
- Deploy: **Vercel** (recommended) or GitHub Pages (`out/` folder)

## Performance

This build is optimized for speed (closer to your old HTML site):

- Native browser scroll (no smooth-scroll library)
- No custom cursor, film grain, or animated background JS
- Most pages are **server components** (less JavaScript)
- Removed Framer Motion, GSAP, and Lenis from dependencies
- Static CSS-only background on `body`

## Quick start

```bash
cd portfolio-v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build    # outputs static site to out/
```

### Vercel

1. Push `portfolio-v2` to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Framework preset: Next.js (static export is automatic via `next.config.ts`)

### GitHub Pages

Use the `out/` directory from `npm run build` or set basePath in `next.config.ts` if deploying to a subpath.

## Add scroll frame sequences

1. Export your animation as numbered images (PNG/JPG)
2. Optimize to WebP:

```bash
npm install -D sharp
node scripts/optimize-frames.mjs ./my-raw-frames ./public/frames/hero 120
node scripts/optimize-frames.mjs ./my-ambient-frames ./public/frames/ambient 60
```

3. Files must be named `0001.webp`, `0002.webp`, … in each folder

Without frames, the hero uses a **gradient scroll animation** + Ken Burns profile fallback.

## Update content

| What | File |
|------|------|
| Projects | `src/content/projects.ts` |
| Experience | `src/content/experience.ts` |
| Certificates | `src/content/certificates.ts` |
| About copy | `src/content/about.ts` |
| Site links | `src/lib/site.ts` |

## Profile photo

Replace `public/images/profile/profile.jpg` with your professional headshot.

## Contact form (EmailJS)

Copy `.env.example` → `.env.local` and add your EmailJS keys. Without keys, submit opens the user's email client.

## Project structure

```
src/app/          → pages (/, /about, /work, …)
src/components/   → UI, frames, work, home
src/content/      → typed data
public/frames/    → hero & ambient sequences
public/images/    → profile, projects, certificates
```

## License

Personal portfolio — © Naman Bhalani
