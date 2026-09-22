# Venturis

Marketing site for Venturis, a Mauritius-based drinks and food FMCG sourcing and
supply company.

## Stack

- Next.js (App Router, React Server Components)
- Tailwind CSS v4
- No client animation library. Scroll reveals, hover effects, the mobile menu
  accordion and the enquiry dialog's entrance are all plain CSS (transitions,
  `@starting-style`), gated behind `prefers-reduced-motion`. Keeps the client
  JS bundle small and content visible in the server-rendered HTML immediately.
- Fonts self-hosted via `next/font`: Newsreader (logo wordmark only), Geist
  Sans (everything else), Geist Mono (figures)
- Icons: Phosphor

## Run

```bash
npm install
npm run dev        # Turbopack dev server
```

Then open http://localhost:3000.

```bash
npm run build       # static export -> ./out (see Deploying, below)
npm run preview     # build, then serve ./out locally to sanity-check it
npm run rebuild      # wipe .next and out, then rebuild, if the build cache ever gets stale
```

Every route in this site is static (no API routes, no dynamic segments, no
request-time data), so `next.config.ts` sets `output: "export"`: `npm run
build` produces a plain `out/` folder of HTML/CSS/JS/images, and that's the
entire deployable artifact. There's no Node.js server to run in production.

## Pages

| Route | Content |
|---|---|
| `/` | Home: hero, positioning + routing diagram, category teaser, contact CTA |
| `/about` | Who Venturis is, the routing model, and why the model holds |
| `/supply` | The two categories (each with real background photography), plus supplier vetting and logistics |
| `/process` | The four-step path from requirement to delivery |
| `/contact` | Contact details |

`app/layout.tsx` wraps every route with the header (route-aware active link),
the footer, and the single site-wide enquiry dialog. Each route file sets its
own `<title>`, meta description, canonical URL, and Open Graph / Twitter
card metadata.

## SEO

- **`lib/site.ts`** is the single source of truth for the domain, site name
  and the shared `openGraph`/`twitter` base fields. Every page spreads
  `OG_BASE` into its `openGraph` object and uses `TWITTER_CARD` for
  `twitter.card` — Next.js does **not** deep-merge `openGraph`/`twitter`
  between a layout and the page below it (a page-level object replaces the
  layout's outright), so this is what keeps `og:type`, `og:site_name` and
  `twitter:card` from silently disappearing on inner pages. If you add a new
  page, copy this pattern rather than hand-writing a bare `openGraph: {...}`.
- **Social preview images** are generated at build time per route
  (`app/**/opengraph-image.tsx`, rendered by `lib/og-image.tsx` via
  `next/og`'s `ImageResponse`) — a branded 1200×630 card with that page's own
  headline, no external image tool involved. Each `twitter-image.tsx` is a
  one-line re-export of the same file, so Twitter/X gets an identical
  `summary_large_image` card with no duplicated design.
- **Favicon** (`app/icon.png`) and **Apple touch icon** (`app/apple-icon.png`)
  are real exports of the brand mark, traced from `Site_info/Venturis -
  Logo.pdf` (a flat vector: ring, two-tone "V", no embedded raster) rather
  than hand-drawn. The favicon keeps the mark's true colors on a transparent
  background; the Apple touch icon composites the same mark, recolored for a
  dark card, onto a solid navy square (Apple expects an opaque icon). The
  OG/Twitter card's corner mark (`lib/og-image.tsx`) uses that same
  dark-card recolor, saved as `assets/logo-mark-dark.png`.
- **`app/robots.ts`**, **`app/sitemap.ts`** and **`app/manifest.ts`** are the
  Next.js file-convention generators for `/robots.txt`, `/sitemap.xml` and
  `/manifest.webmanifest`.
- An **Organization** JSON-LD script sits in `app/layout.tsx` (name, url,
  logo, email, address).
- **`metadataBase` is set to `https://venturisgroup.mu`** (`SITE_DOMAIN` in
  `lib/site.ts`), the confirmed production domain. It's the single place to
  change if that ever changes: `SITE_URL`, `SITE_EMAIL`, every canonical URL,
  the sitemap and the social image URLs all derive from it.

## Design notes

- **One accent** (brand gold) locked across the site. Navy is the ink colour;
  the footer is the single dark band.
- **Light and dark** both supported and follow the OS setting
  (`prefers-color-scheme`). Tokens live in `app/globals.css`.
- **Motion** is deliberately low: a brief on-load fade, a hover enlarge + glow
  on every card/panel (`.box-hover` in `globals.css`), and a CSS accordion for
  the mobile menu. Everything collapses to static under
  `prefers-reduced-motion`.
- **"Get in touch"** buttons (nav, hero, both CTA bands, the Contact page)
  don't navigate — they open a single native `<dialog>` enquiry form
  (`components/enquiry-dialog.tsx`), rendered once in the root layout and
  triggered from anywhere via `<Button enquiry>`. Submitting composes a
  `mailto:` draft to `SITE_EMAIL` (`lib/site.ts`); there's no backend, so
  nothing is actually sent until the visitor sends it from their own mail
  app.
- **Floating WhatsApp button** (`components/whatsapp-button.tsx`), rendered
  once in the root layout on every page. A plain `wa.me` link (no client JS)
  to `+44 7472 773107` with a pre-filled message; kept in WhatsApp's own green
  rather than the site's gold accent, the same way a real third-party logo
  keeps its own color.

## Deploying to Namecheap (shared hosting / cPanel)

No Node.js app, no database, nothing to keep running — this is a static
site, so "hosting on command" just means: build, then upload.

1. **The domain is already set.** `lib/site.ts`'s `SITE_DOMAIN` is
   `venturisgroup.mu` (the confirmed production domain) and is baked into
   every canonical URL, the sitemap, and the social preview images at build
   time. If that ever changes, update it there and rebuild before uploading.
2. **Build.**
   ```bash
   npm run build
   ```
   This produces `./out` — a self-contained folder of HTML, CSS, JS, fonts
   and images. That folder's *contents* are the entire site.
3. **Upload the contents of `out/` into `public_html`** (or into
   `public_html/<subfolder>` if the domain is an addon domain / subdomain
   pointed at a subfolder):
   - **cPanel File Manager** — zip the contents of `out/` locally (select
     everything *inside* `out`, not the `out` folder itself), upload the zip
     via File Manager into `public_html`, then use File Manager's "Extract."
   - **or FTP/SFTP** — credentials are in cPanel under "FTP Accounts" (or
     reuse the cPanel login over SFTP on port 21098). Point your FTP client
     at `public_html` and upload the contents of `out/`.
   - Either way, replace what's there on every redeploy: rerun `npm run
     build` and re-upload whenever the site changes. There's no build step
     that runs on the server.
4. **Enable HTTPS.** In cPanel, go to **SSL/TLS Status** and run **AutoSSL**
   (Namecheap shared hosting includes free Let's Encrypt certificates). The
   exported `.htaccess` (see below) force-redirects to HTTPS, so do this
   before or immediately after the first upload, or visitors will hit a
   redirect loop until the certificate exists.
5. **Point the domain at the hosting**, if it isn't already: in Namecheap,
   either set the domain's nameservers to the hosting account's nameservers
   (in the hosting welcome email / cPanel), or add an `A` record to the
   server's IP address if you're keeping Namecheap's own DNS. This step only
   applies once, not on every redeploy.

**`public/.htaccess`** ships inside `out/` on every build (Next.js copies
everything under `/public` into the export root) and handles the details a
plain static host needs: forcing HTTPS, a custom 404 page, long-lived cache
headers for the content-hashed `_next/static` assets, and — the one genuine
static-export gotcha here — forcing `Content-Type: image/png` on the
social-preview routes (`/opengraph-image`, `/about/opengraph-image`, etc.),
which Next.js generates as real PNGs at extensionless URLs. Apache's normal
extension-based MIME lookup can't tell that, and without the override,
Facebook/Twitter/LinkedIn link previews break silently because those
crawlers fetch the image URL directly and require an image `Content-Type`
header (they don't read the page's HTML to guess). The favicon and Apple
touch icon don't need this: they're plain `icon.png` / `apple-icon.png`
files, so Apache gets the type right on its own.

## Before launch

Settled already: the production domain (`venturisgroup.mu`), the favicon /
Apple touch icon / OG card mark (the real logo, not a placeholder), and the
X/Twitter handle (intentionally left out — no account yet; add one to
`lib/site.ts`'s `OG_BASE`/page metadata if Venturis gets one).

Still open, by design (real assets this project doesn't have):

1. **Hero image** — `assets/hero.jpg`, a stock port photo (grayscale,
   navy-tinted). Swap for real Mauritius port / operations photography at a
   portrait crop (roughly 4:5).
2. **Supply category photos** — `assets/supply-beverages.jpg` (a bottling
   line, photo by Waldemar Brandt) and `assets/supply-food.jpg` (a packaged
   staple foods warehouse, photo by Dennis Siqueira), both via Unsplash
   (Unsplash License: free for commercial use, no attribution required).
   Fine to keep, but swap for Venturis' own product/warehouse photography
   when available — same treatment (`mix-blend-luminosity` navy duotone) will
   carry over automatically in `components/supply.tsx`.
3. **Enquiry delivery** — currently mailto-only (see above). If you'd rather
   have a real one-click "sent" confirmation, wire `handleSubmit` in
   `components/enquiry-dialog.tsx` to an API route or a form endpoint
   (Resend, Formspree, etc.) instead of building the `mailto:` link.
