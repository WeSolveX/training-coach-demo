# Monika Powers — Stærk & Struktureret

Hjemmeside for Monika Powers. Styrketræning og struktur for kvinder 30+.
Bygget med Next.js 15 App Router, Tailwind v4 og deployet til Railway.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` icons
- Inter + Fraunces (display) via `next/font/google`

## Sider
- `/` — Forside (hero, problem-recognition, realitetstjek, produkt-feature, om-preview, CTA)
- `/programmet` — Stærk & Struktureret produktside (12 ugers system, moduler, FAQ)
- `/filosofi` — Min tilgang til træning og ernæring
- `/om` — Om Monika
- `/kontakt` — Kontaktformular og direkte kanaler

## Lokal udvikling
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
Railway picker projektet op via Nixpacks. Node-version er pinned til 20.x via `engines` i `package.json`.

## Brand
- Bone (`#f4efe8`) baggrund
- Ink (`#14110f`) tekst
- Rust (`#c44a2c`) accent / CTA
- Display: Fraunces (700 + italic) — bruges til store overskrifter
- Body: Inter
