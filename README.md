# Heavy & Kind — Training Coach Demo

A demo marketing site for **Heavy & Kind**, a fictional women's strength
coaching brand. Built with Next.js 15 App Router, Tailwind v4, and deployed
to Railway.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` icons
- Inter + Fraunces 700 via `next/font/google`
- Plain `<img>` tags with Unsplash URLs

## Local development
```
npm install
npm run dev
```

## Build
```
npm run build
npm run start
```

## Deploy
Railway picks this up via Nixpacks. Node version is pinned to 20.x via
`engines` in `package.json`.

## Pages
- `/` — Home
- `/plans` — Beginner Power, Intermediate Strength, Advanced Power
- `/coach` — What a structure coach is
- `/about` — Coach Maria + philosophy
- `/contact` — Demo contact form
