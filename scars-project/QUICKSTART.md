# SCARS Quick Start Guide

## 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Environment File
```bash
cp .env.example .env.local
```

### Step 3: Generate Secret
```bash
openssl rand -base64 32
```
Copy the output and paste it into `AUTH_SECRET` in `.env.local`

### Step 4: Set Up Database

**Option A: Local PostgreSQL**
```bash
createdb scars
```
Then set in `.env.local`:
```
DATABASE_URL=postgresql://localhost/scars
```

**Option B: Vercel Postgres (recommended)**
1. Go to Vercel project settings
2. Create a Postgres database
3. Copy the connection string to `DATABASE_URL`

### Step 5: Create Tables
```bash
npx prisma migrate dev --name init
```

### Step 6: Set Up OAuth (get these IDs/secrets)

**Google:**
1. https://console.cloud.google.com
2. Create OAuth 2.0 credentials
3. Add `http://localhost:3000/api/auth/callback/google`

**GitHub:**
1. https://github.com/settings/developers
2. Create OAuth App
3. Set callback: `http://localhost:3000/api/auth/callback/github`

**Discord:**
1. https://discord.com/developers/applications
2. Create Application
3. Add redirect: `http://localhost:3000/api/auth/callback/discord`

Add these to `.env.local`:
```
GOOGLE_ID=your_id
GOOGLE_SECRET=your_secret
GITHUB_ID=your_id
GITHUB_SECRET=your_secret
DISCORD_ID=your_id
DISCORD_SECRET=your_secret
```

### Step 7: Run!
```bash
npm run dev
```

Visit http://localhost:3000 ✨

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add all environment variables in Vercel settings
4. Update OAuth redirect URIs to your Vercel URL
5. Done!

## Verify It Works

1. Go to http://localhost:3000
2. Click "Sign In"
3. Sign in with Google, GitHub, or Discord
4. Go to dashboard
5. Edit your profile
6. Get your shareable link!

## Next Steps

- Customize colors in `app/page.tsx` (change `red-*` to other Tailwind colors)
- Add your own domain in Vercel settings
- Customize the design in components
- Add more fields to the profile (links, location, etc.)

## Common Issues

**"Provider not configured"** → Check .env.local has all variables
**"Database error"** → Check DATABASE_URL is correct
**"OAuth failed"** → Check redirect URIs match exactly

## Need Help?

- NextAuth docs: https://authjs.dev
- Prisma docs: https://www.prisma.io/docs
- Next.js docs: https://nextjs.org/docs

---

Happy building! 🚀
