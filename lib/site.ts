/**
 * Single source of truth for the domain and core copy used across metadata,
 * robots.ts, sitemap.ts and the structured-data script. Update SITE_URL here
 * once the real production domain is confirmed; venturis.mu is used as the
 * placeholder since it is already the brand's email and website domain
 * referenced throughout the site's own copy.
 */
export const SITE_URL = "https://venturis.mu";
export const SITE_NAME = "Venturis";
export const SITE_TITLE =
  "Venturis | Drinks and food FMCG supply routed through Mauritius";
export const SITE_DESCRIPTION =
  "Venturis is a Mauritius-based supply company sourcing drinks and food FMCG for distributors and retailers, linking producers across Africa, Asia and Europe with vetted supply and dependable logistics.";

/**
 * Next.js does not deep-merge `openGraph` / `twitter` between a layout and
 * the page below it: whichever segment defines the object wins outright, so
 * a page-level `openGraph: { url, title, description }` silently drops the
 * layout's `type` / `siteName` / `locale`. Spread these into every page's
 * own object instead of repeating (and risking dropping) the fields by hand.
 */
export const OG_BASE = {
  type: "website" as const,
  siteName: SITE_NAME,
  locale: "en_US",
};
export const TWITTER_CARD = "summary_large_image" as const;
