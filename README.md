# Mammals of New Jersey

A scrollytelling website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion to showcase five mammals commonly found in New Jersey.

## Live Site

https://mmm286masud.github.io/njmammal/

## Features

- Story-driven homepage with immersive chapter-based scrolling
- Five statically generated mammal detail pages
- Centralized content and image metadata
- GitHub Pages-ready static export configuration
- Unit tests and browser smoke tests

## Routes

- `/`
- `/about`
- `/mammals/white-tailed-deer`
- `/mammals/red-fox`
- `/mammals/eastern-gray-squirrel`
- `/mammals/raccoon`
- `/mammals/black-bear`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run test:unit
npm run test:browser
npm run build
```

## Static Preview

```bash
npm run build
npm start
```

This serves the exported `out/` directory.

## GitHub Pages

The project is configured for static export with an environment-driven base path.

- Local development: no base path
- GitHub Pages build: `NEXT_PUBLIC_BASE_PATH=/<repository-name>`

The included workflow in `.github/workflows/deploy.yml` builds and deploys the exported site from `main`.

## Image Sourcing

All imagery is sourced from Unsplash and tracked in `data/imageSources.ts` with attribution metadata.
