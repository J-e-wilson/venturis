import type { NextConfig } from "next";

/*
 * Every route in this site is static (no API routes, no dynamic segments, no
 * request-time data), so it ships as plain HTML/CSS/JS via `output: "export"`
 * for Namecheap-style shared hosting: `npm run build` produces an `out/`
 * folder you upload as-is, no Node.js process required on the server.
 * `images.unoptimized` is required by static export since there is no server
 * to run the on-demand image resizer. `trailingSlash` matches the `/route/`
 * directory + `index.html` shape static export writes to disk, so internal
 * links resolve without relying on the host redirecting `/about` to `/about/`.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
