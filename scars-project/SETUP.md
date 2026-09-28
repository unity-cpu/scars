# SCARS - Complete Setup Overview

## What's Been Created

Your complete **SCARS** bio/profile app is ready! Here's what you have:

### 📁 Project Structure

```
scars/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   ├── auth/[...nextauth]/  # Authentication
│   │   ├── user/                # User endpoints
│   │   └── profile/[username]/  # Public profiles
│   ├── auth/signin/              # Sign-in page
│   ├── dashboard/                # Dashboard (edit profile)
│   ├── [username]/               # Public profile viewer
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── not-found.tsx             # 404 page
│   └── globals.css               # Tailwind setup
├── components/
│   └── ProfileForm.tsx           # Profile editor component
├── lib/
│   ├── auth.ts                   # NextAuth configuration
│   └── prisma.ts                 # Database client
├── prisma/
│   └── schema.prisma             # Database schema
├── package.json                  # Dependencies
├── next.config.js                # Next.js config
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
├── postcss.config.js             # PostCSS config
├── .env.example                  # Environment template
├── .gitignore                    # Git ignore
├── README.md                     # Full documentation
├── QUICKSTART.md                 # Quick start guide
└── SETUP.md                      # This file
```

## Features Included

✅ **OAuth Authentication**
- Google login
- GitHub login
- Discord login
- Automatic account creation on first sign-in

✅ **User Profiles**
- Custom name, username, and bio
- Profile picture from OAuth provider
- Unique shareable URLs (username-based)
- Profile edit dashboard

✅ **Public Profiles**
- View any user's profile by their username
- SEO optimized with metadata
- Beautiful responsive design

✅ **Database**
- PostgreSQL via Prisma ORM
- User accounts, sessions, and OAuth accounts
- Character limits and validation

✅ **Security**
- NextAuth.js session management
- CSRF protection
- Secure OAuth flows
- Protected API routes

✅ **UI/UX**
- Tailwind CSS styling
- Dark theme with red accents
- Mobile responsive
- Loading states and error handling

## Quick Start

### 1. Install
```bash
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
openssl rand -base64 32  # Generate AUTH_SECRET
```

### 3. Database
```bash
# Set DATABASE_URL in .env.local
# Then run:
npx prisma migrate dev --name init
```

### 4. OAuth Setup
Get credentials from:
- Google: https://console.cloud.google.com
- GitHub: https://github.com/settings/developers
- Discord: https://discord.com/developers/applications

Add to `.env.local`:
```
GOOGLE_ID=xxx
GOOGLE_SECRET=xxx
GITHUB_ID=xxx
GITHUB_SECRET=xxx
DISCORD_ID=xxx
DISCORD_SECRET=xxx
```

### 5. Run Locally
```bash
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel

### Step 1: Create GitHub Repo
```bash
git init
git add .
git commit -m "Initial SCARS commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scars.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Select your repository
4. Click "Import"

### Step 3: Add Environment Variables
In Vercel dashboard:
1. Go to Settings → Environment Variables
2. Add all variables from .env.example:
   - AUTH_SECRET (generate new one)
   - DATABASE_URL (from PostgreSQL provider)
   - GOOGLE_ID, GOOGLE_SECRET
   - GITHUB_ID, GITHUB_SECRET
   - DISCORD_ID, DISCORD_SECRET

### Step 4: Update OAuth Providers
Update redirect URIs in each OAuth provider to:
- Google: `https://yourdomain.vercel.app/api/auth/callback/google`
- GitHub: `https://yourdomain.vercel.app/api/auth/callback/github`
- Discord: `https://yourdomain.vercel.app/api/auth/callback/discord`

### Step 5: Deploy
- Vercel auto-deploys on push to main
- First deploy will run database migrations
- Your app is live! 🎉

## Database Options

### Local PostgreSQL
```
DATABASE_URL=postgresql://localhost/scars
```

### Vercel Postgres (Recommended)
- Create in Vercel project settings
- Copy connection string

### Supabase (Free)
- https://supabase.com
- Create project, copy connection string

### Railway (Cheap)
- https://railway.app
- Create PostgreSQL, copy connection string

## Customization

### Change Colors
Search for `red-` in these files and replace:
- `app/page.tsx`
- `app/layout.tsx`
- `app/auth/signin/page.tsx`
- `app/dashboard/page.tsx`
- `app/[username]/page.tsx`

Use any Tailwind color: `blue-`, `green-`, `purple-`, etc.

### Add More Profile Fields
1. Add fields to `prisma/schema.prisma`
2. Run: `npx prisma migrate dev --name add_fields`
3. Update `components/ProfileForm.tsx`
4. Update `app/api/user/route.ts`

### Custom Domain
1. In Vercel: Settings → Domains
2. Add your domain
3. Update DNS records per Vercel instructions
4. Update OAuth redirect URIs

## API Routes

### Public
- `GET /` - Home page
- `GET /[username]` - Public profile
- `GET /api/profile/[username]` - Profile JSON

### Protected
- `GET /dashboard` - Edit profile
- `GET /api/user` - Get current user
- `PUT /api/user` - Update profile
- `GET /api/auth/signin` - Sign in page

## Pages

### `/` - Home/Landing
Beautiful landing page with sign-in CTA

### `/auth/signin` - Sign In
OAuth buttons for Google, GitHub, Discord

### `/dashboard` - User Dashboard
Edit name, username, bio
View profile preview
Get shareable link

### `/[username]` - Public Profile
View any user's profile
Shows avatar, name, bio
Beautiful card layout

## Troubleshooting

**"Provider not found"**
→ Check all OAuth IDs/secrets in .env.local

**"Database connection error"**
→ Verify DATABASE_URL is correct and database is running

**"OAuth callback failed"**
→ Check redirect URIs match exactly (including http/https)

**"Username taken"**
→ API returns error, user sees message and can choose another

**"Profile not updating"**
→ Check Prisma client is connecting to database

## What's Next?

- [ ] Add profile links (Twitter, GitHub, portfolio, etc.)
- [ ] Add profile themes/customization
- [ ] Add follower/follow system
- [ ] Add profile views counter
- [ ] Add search functionality
- [ ] Add profile badges/achievements
- [ ] Add social sharing
- [ ] Add profile analytics

## Important Notes

1. **Environment Variables**: Never commit `.env.local` to GitHub
2. **AUTH_SECRET**: Generate a new one for production
3. **Database URL**: Keep it secret, use Vercel's env vars
4. **OAuth Credentials**: Keep secrets safe, don't share
5. **Images**: OAuth providers host user images, we only store URLs

## Support & Resources

- NextAuth Docs: https://authjs.dev
- Prisma Docs: https://www.prisma.io/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs

---

## You're All Set! 🎉

Your SCARS app is ready to go. Follow QUICKSTART.md for local development or README.md for production deployment.

**Happy coding!** 🚀
