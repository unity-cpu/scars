# scarz.lol

A modern bio-link / profile platform (inspired by halo.rip & larplol.com).

**Domain:** scarz.lol

---

## What's included in this starter

- Beautiful dark neon landing page with "claim username"
- Public profile page (`/username`)
- Dashboard structure with all the sections ready
- Framer Motion animations
- Tailwind CSS + custom glow effects
- Ready for Supabase (auth + database) next

---

## Quick start (for beginners)

### 1. Install Node.js
Download and install from: https://nodejs.org  
(Choose the LTS version)

### 2. Open a terminal in this folder

```bash
cd scarz-lol
```

### 3. Install dependencies

```bash
npm install
```

(or if you prefer pnpm: `pnpm install`)

### 4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## What you can try right now

- Go to the homepage → type a name → click **Claim**
- You will be taken to a demo public profile
- Visit `/dashboard` to see the editor layout
- Visit `/demo` for a sample profile

---

## Next steps (we will do these together)

1. **Connect Supabase** (free account) → real usernames + login
2. Build the Profile editor
3. Build the Links editor
4. Add music player + video backgrounds
5. Add cursor effects & name animations
6. Add Discord / Last.fm widgets
7. Deploy to Vercel + connect scarz.lol domain

---

## Project structure

```
scarz-lol/
├── app/
│   ├── page.tsx              ← Landing page
│   ├── [username]/page.tsx   ← Public profile
│   ├── dashboard/page.tsx    ← Dashboard
│   ├── layout.tsx
│   └── globals.css
├── components/               ← We will add more here
├── lib/
│   └── utils.ts
├── public/
├── package.json
└── README.md
```

---

## Need help?

Just tell me which part you want to build next and I will give you the exact files + instructions.
