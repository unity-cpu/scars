# SCARS - Share Your Bio

A modern bio/profile platform where users can create and share their unique profiles with OAuth authentication from Google, GitHub, and Discord.

## Features

✨ **OAuth Authentication** - Sign in with Google, GitHub, or Discord  
🎨 **Custom Profiles** - Create a beautiful profile with your name, username, and bio  
🔗 **Shareable Links** - Get a unique profile URL (e.g., scars.vercel.app/@username)  
📱 **Responsive Design** - Works great on desktop and mobile  
🚀 **Vercel Ready** - Deploy in seconds with environment variables

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Auth**: NextAuth.js 5
- **Database**: PostgreSQL (via Prisma)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd scars
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

#### Generate AUTH_SECRET

```bash
openssl rand -base64 32
```

Paste the output into `AUTH_SECRET` in `.env.local`.

### 3. Database Setup

#### Using PostgreSQL locally:

```bash
# Create database
createdb scars

# Update DATABASE_URL in .env.local
DATABASE_URL=postgresql://localhost/scars
```

#### Or use a cloud provider:

- **Vercel Postgres** (recommended for Vercel)
- **Supabase** (free PostgreSQL)
- **Railway** (cheap PostgreSQL)
- **PlanetScale** (MySQL alternative)

### 4. OAuth Setup

#### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (local)
   - `https://yourdomain.vercel.app/api/auth/callback/google` (production)
6. Copy Client ID and Client Secret

#### GitHub OAuth

1. Go to [GitHub Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL:
   - `http://localhost:3000/api/auth/callback/github` (local)
   - `https://yourdomain.vercel.app/api/auth/callback/github` (production)
4. Copy Client ID and Client Secret

#### Discord OAuth

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to OAuth2 → General
4. Add redirect URIs:
   - `http://localhost:3000/api/auth/callback/discord` (local)
   - `https://yourdomain.vercel.app/api/auth/callback/discord` (production)
5. Copy Client ID and Client Secret

### 5. Initialize Database

```bash
npx prisma migrate dev --name init
```

This creates all database tables.

### 6. Run Locally

```bash
npm run dev
```

Visit http://localhost:3000

## Deploying to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/scars.git
git push -u origin main
```

### 2. Create Vercel Project

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click Import

### 3. Add Environment Variables

In Vercel project settings:

1. Go to **Settings → Environment Variables**
2. Add all variables from `.env.example`:
   - `AUTH_SECRET`
   - `DATABASE_URL`
   - `GOOGLE_ID`, `GOOGLE_SECRET`
   - `GITHUB_ID`, `GITHUB_SECRET`
   - `DISCORD_ID`, `DISCORD_SECRET`

### 4. Update OAuth Redirect URIs

Update all OAuth apps with your new Vercel URL:
- `https://yourdomain.vercel.app/api/auth/callback/google`
- `https://yourdomain.vercel.app/api/auth/callback/github`
- `https://yourdomain.vercel.app/api/auth/callback/discord`

### 5. Run Database Migration on Vercel

After first deploy, run in Vercel terminal:

```bash
npx prisma migrate deploy
```

Or use Vercel's deployment logs to see if migrations ran automatically.

## Project Structure

```
scars/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/    # NextAuth handlers
│   │   ├── user/                   # User API routes
│   │   └── profile/[username]/     # Public profile API
│   ├── auth/signin/                # Sign-in page
│   ├── dashboard/                  # User dashboard
│   ├── [username]/                 # Public profile page
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Global styles
├── components/
│   └── ProfileForm.tsx             # Profile edit form
├── lib/
│   ├── auth.ts                     # NextAuth config
│   └── prisma.ts                   # Prisma client
├── prisma/
│   └── schema.prisma               # Database schema
├── .env.example                    # Environment template
├── next.config.js                  # Next.js config
├── tailwind.config.ts              # Tailwind config
└── tsconfig.json                   # TypeScript config
```

## Database Schema

### User

- `id`: Unique identifier
- `name`: Full name
- `email`: Email address (unique)
- `username`: Profile URL slug (unique)
- `bio`: User biography
- `image`: Avatar URL from OAuth provider
- `emailVerified`: Email verification timestamp
- `createdAt`: Account creation date
- `updatedAt`: Last update date

### Account

- NextAuth account linking data
- Stores OAuth credentials

### Session

- NextAuth session data
- Stores active sessions

## API Endpoints

### Public

- `GET /` - Home page
- `GET /[username]` - Public profile page
- `GET /api/profile/[username]` - Get profile data (JSON)

### Protected (Requires Auth)

- `GET /api/user` - Get current user
- `PUT /api/user` - Update current user
- `GET /dashboard` - User dashboard
- `POST /api/auth/signin` - Sign in page

## Customization

### Change App Colors

Edit `app/page.tsx` and `app/layout.tsx` to change Tailwind color classes from `red-*` to your preferred color.

### Custom Domain

1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Update OAuth redirect URIs in all provider apps

### Database Provider

Change `datasource` in `prisma/schema.prisma` if using MySQL or other databases.

## Troubleshooting

### "Provider credentials not found"

Make sure all environment variables are set in `.env.local` or Vercel settings.

### "PrismaClientInitializationError"

Database connection failed. Check `DATABASE_URL` is correct and database is accessible.

### OAuth callback fails

Make sure redirect URIs in OAuth apps match exactly:
- Include `http://` or `https://`
- Include full path `/api/auth/callback/provider`
- No trailing slashes

### Prisma migration errors

If using Vercel Postgres:

```bash
npx prisma migrate deploy
```

If using local database:

```bash
npx prisma migrate dev
```

## License

MIT

## Support

For issues or questions, create an issue on GitHub or check NextAuth.js documentation.

---

**Built with ❤️ for creators everywhere**
