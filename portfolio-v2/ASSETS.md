# Assets checklist

Provide these when ready to finalize the premium experience:

## Required for full frame animation

- [ ] **Hero frames** — 120–240 images → `public/frames/hero/0001.webp` …
- [ ] **Ambient frames** (optional) — 60–120 images → `public/frames/ambient/`
- Run: `node scripts/optimize-frames.mjs <raw-folder> public/frames/hero 120`

## Profile & branding

- [ ] **Professional headshot** → replace `public/images/profile/profile.jpg`
- [ ] **Logo/monogram** (optional) — currently using “NB” mark in navbar

## Work page

- [ ] **Project screenshots** per project in `public/images/projects/`
- [ ] Update `src/content/projects.ts` with real `image`, `gallery`, `github`, `live` URLs

## Contact

- [ ] **EmailJS keys** in `.env.local` (see `.env.example`)

## Already migrated from v1

- Certificate images in `public/images/certificates/`
- Resume at `public/resume.pdf`
