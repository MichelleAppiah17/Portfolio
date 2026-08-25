# Michelle Appiah — Portfolio

A single-page portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS** — a colorful, girlie-in-tech theme (plum + hot pink + gold on a warm cream background), with real photos, project links, and social links included.

## Before you deploy

Open `components/siteConfig.ts` and update the `linkedin` field — your resume and photos didn't include a LinkedIn URL, so it's currently a placeholder. Everything else (GitHub, email, phone, project links) is already filled in from your resume.

## Run it locally

You need [Node.js](https://nodejs.org) 18.18 or newer installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

```
app/
  layout.tsx        # fonts + global metadata
  page.tsx           # assembles all sections
  globals.css        # color theme + base styles
components/
  siteConfig.ts      # all contact info + external links in one place
  Nav.tsx            # fixed navigation with GitHub/LinkedIn/email
  Hero.tsx           # intro, profile photo, signature sparkle canvas
  SparkleField.tsx   # animated sparkle particles (respects reduced-motion)
  Summary.tsx        # about paragraph + secondary photo
  Experience.tsx     # professional experience, with IEEE event photos
  Projects.tsx       # selected projects, linked to live demos
  Expertise.tsx      # core expertise + skills grid
  Organizations.tsx  # community/volunteering roles + workshop photo
  Education.tsx      # education + training
  Awards.tsx         # awards
  Interests.tsx      # interests strip
  Footer.tsx         # contact section
public/images/       # your photos, already compressed for the web
```

Edit the arrays at the top of each component in `components/` to update content — no other code needs to change. Contact details and external links live in `components/siteConfig.ts`.

## Push it to GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

(Create the empty repository on GitHub first — github.com → New repository — then copy its URL into the `git remote add` command above.)

## Deploy it (free, ~2 minutes, via Vercel)

Vercel is built by the makers of Next.js and is the simplest way to host this site.

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New → Project**.
3. Select the GitHub repository you just pushed.
4. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**.
5. After a minute you'll get a live URL like `https://your-repo-name.vercel.app`.

Every time you push to the `main` branch afterward, Vercel automatically redeploys the live site.

### Alternative: Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
2. Connect GitHub and pick the repo.
3. Build command: `npm run build`, Publish directory: `.next` (Netlify's Next.js runtime handles the rest automatically).
4. Deploy.

## Using a custom domain

Once deployed, both Vercel and Netlify let you attach a custom domain (e.g. `michelleappiah.com`) for free under **Project Settings → Domains** — you'll just need to own the domain and update its DNS records as instructed.

## Customizing the palette

All colors live in `tailwind.config.ts` under `theme.extend.colors.ash` and `theme.extend.colors.ember`. Adjust the hex values there to shift the theme.
