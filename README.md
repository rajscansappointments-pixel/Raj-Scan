# Raj Scans — Premium Diagnostic Imaging Center

This project is a high-performance, SEO-optimized, production-ready website for Raj Scans, a premium diagnostic imaging center. It is designed to act as an informational and lead-generation platform.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** Vanilla CSS Modules + CSS Custom Properties (Design Tokens)
- **Icons:** `lucide-react` (or customized SVGs)
- **Forms:** React Server Actions with strict typings
- **Performance:** 100% Statically Generated (SSG), highly optimized Next.js `<Image>` components
- **SEO:** Complete meta tags, OpenGraph, JSON-LD Schema (MedicalClinic), robots.txt, sitemap.xml

---

## 🎨 Design System

The visual language follows a "Premium Healthcare" aesthetic:
- **Primary Color:** Navy Blue (`var(--color-brand-navy)`)
- **Accent Color:** Warm Amber / Gold (`var(--color-brand-accent)`)
- **Typography:** `var(--font-sans)` (Inter/System) & `var(--font-serif)` (Merriweather/Georgia) for premium headings.
- **Layouts:** Shared structural components (`Container`, `Section`, `PageHero`) to ensure absolute consistency across pages.

The CSS Architecture relies on a single source of truth: `src/app/globals.css`.

---

## 📸 Asset Replacement Guide (Handoff)

The website is currently populated with high-quality placeholder images generated to reflect the brand style. Before the final launch, you should replace these with your actual client assets.

### How to Replace Images

1. Prepare your final images. Ensure they are optimized (e.g., compressed JPEGs or WebP) to maintain the 100/100 Lighthouse performance score.
2. Navigate to the `public/images/` directory in the codebase.
3. Replace the existing files with your new images, **keeping the exact same filenames and extensions**, or update the paths in the respective React components.

**Image Inventory:**
- `public/images/hero/hero-main.jpg` (Homepage Hero Section)
- `public/images/about/about-facility.jpg` (Homepage About Section)
- `public/images/equipment/mri-machine.jpg` (Homepage Technology Section)
- `public/images/services/*.jpg` (All Service Pages & Cards)
- `public/images/blog/*.jpg` (Blog Thumbnails)
- `public/images/packages/wellness.jpg` (Health Packages Background)

### Updating the Logo

1. Place your final logo file (preferably SVG or high-res PNG) in the `public/` directory (e.g., `public/logo.svg`).
2. Update the `<Header>` component (`src/components/layout/Header.tsx`) and `<Footer>` component (`src/components/layout/Footer.tsx`) to reference this new path instead of the text-based logo.

### Updating Contact Details

Contact details (Phone, Email, Address, Google Maps embed) are currently using placeholders based on the proposal. 
You can find and update these details in:
1. `src/components/layout/Header.tsx` (Top bar)
2. `src/components/layout/Footer.tsx` (Footer links)
3. `src/app/contact/page.tsx` (Contact page grid and Map iframe)

---

## 🌐 Deployment to Vercel (or GoDaddy via Vercel)

The recommended deployment platform for Next.js is [Vercel](https://vercel.com). The project is completely ready to be deployed.

### Step-by-Step Vercel Deployment

1. **Push to GitHub/GitLab/Bitbucket:** Ensure your codebase is pushed to a remote Git repository.
2. **Log into Vercel:** Go to Vercel and click **Add New Project**.
3. **Import Repository:** Select your Git repository.
4. **Configure Project:**
   - Framework Preset: Next.js (Auto-detected)
   - Root Directory: `./` (Auto-detected)
   - Build Command: `npm run build`
   - Install Command: `npm install`
5. **Environment Variables:**
   - Add `NEXT_PUBLIC_SITE_URL` (e.g., `https://rajscans.com`).
6. **Deploy:** Click the Deploy button.

### Connecting Vercel to GoDaddy Domain

To connect your Vercel project to a custom domain purchased on GoDaddy:
1. In your Vercel project dashboard, go to **Settings > Domains**.
2. Enter your custom domain (e.g., `rajscans.com`) and click Add.
3. Vercel will provide you with DNS records (typically an `A` record for the root domain pointing to `76.76.21.21` and a `CNAME` for `www` pointing to `cname.vercel-dns.com`).
4. Log into your **GoDaddy** account, go to **DNS Management** for your domain.
5. Add/Update the `A` and `CNAME` records as instructed by Vercel.
6. Wait for propagation (usually a few minutes to a few hours). Vercel will automatically provision a free SSL certificate.

---

## 🛠️ Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```bash
# To run a production build locally
npm run build
npm start
```
