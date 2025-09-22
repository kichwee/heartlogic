# HeartLogic

> Your personal AI relationship advisor. Chat, discover playlists, pick movies, and find date spots — all from one neat web app.

**Live demo:** https://heartlogic.vercel.app

---

## Overview

HeartLogic is a frontend web app that offers:
- An AI-powered relationship chatbot.
- Curated romantic playlists for different moments.
- Movie recommendations for date nights.
- Suggestions for dating spots and contact/about pages.

(Deployed at `heartlogic.vercel.app`.) :contentReference[oaicite:3]{index=3}

---

## Features

- 24/7 AI Relationship Advisor (chat interface).
- Perfect Playlist generator / curated lists.
- Movie recommendation engine.
- Dating spots / local suggestions.
- About & Contact page.

---

## Tech stack (suggested / typical)

> The site is deployed on Vercel; common stacks for this deployment are Next.js + React. If your repository uses a different stack, adjust commands accordingly.

- Frontend: React / Next.js (or equivalent)
- Hosting: Vercel
- Chat AI: OpenAI (or another LLM provider)
- Music: Spotify API (or fallback curated lists)
- Movies: TMDB API (The Movie Database) or similar
- Maps / Places: Google Maps / Foursquare / Here APIs
- Styling: CSS / Tailwind / component library of choice

---

## Quick setup (local dev)

> Assumes Node.js >= 16 and npm or yarn.

```bash
# 1. Clone repo
git clone https://github.com/<your-org>/heartlogic.git
cd heartlogic

# 2. Install
npm install
# or
yarn install

# 3. Create .env (see below)
cp .env.example .env

# 4. Run locally
npm run dev
# or
yarn dev
