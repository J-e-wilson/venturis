import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/supply", priority: 0.8 },
  { path: "/process", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    // Matches the `/route/index.html` shape of the static export (see
    // `trailingSlash` in next.config.ts), so crawlers land directly instead
    // of via the host's directory-slash redirect.
    url: path ? `${SITE_URL}${path}/` : SITE_URL,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
