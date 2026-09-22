import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_DOMAIN } from "./site";

/**
 * Shared renderer for every route's Open Graph / Twitter card image. Each
 * route's opengraph-image.tsx calls this with its own title/description;
 * twitter-image.tsx just re-exports that same file (identical card on both
 * networks, one implementation).
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#14232e";
const ON_INK = "#eceef0";
const MUTED = "#9fb0ba";
const GOLD = "#cf9a4a";

const FONT_DIR = join(
  process.cwd(),
  "node_modules/geist/dist/fonts/geist-sans",
);
// The real brand mark (circle + "V"), recolored for a dark card the same
// way components/logo.tsx recolors it for the footer: off-white and gold
// instead of the on-white-background navy, so the stroke stays visible
// against INK. Traced from Site_info/Venturis - Logo.pdf, not hand-drawn.
const MARK_PATH = join(process.cwd(), "assets/logo-mark-dark.png");

let fonts: { name: string; data: Buffer; weight: 400 | 600 }[] | null = null;
let markDataUri: string | null = null;

async function loadFonts() {
  if (fonts) return fonts;
  const [regular, semibold] = await Promise.all([
    readFile(join(FONT_DIR, "Geist-Regular.ttf")),
    readFile(join(FONT_DIR, "Geist-SemiBold.ttf")),
  ]);
  fonts = [
    { name: "Geist", data: regular, weight: 400 },
    { name: "Geist", data: semibold, weight: 600 },
  ];
  return fonts;
}

async function loadMark() {
  if (markDataUri) return markDataUri;
  const buf = await readFile(MARK_PATH);
  markDataUri = `data:image/png;base64,${buf.toString("base64")}`;
  return markDataUri;
}

export async function renderOgImage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [loadedFonts, mark] = await Promise.all([loadFonts(), loadMark()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: INK,
          backgroundImage: `radial-gradient(circle at 84% 6%, ${GOLD}29, transparent 60%)`,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mark} width={40} height={40} alt="" />
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              color: ON_INK,
            }}
          >
            VENTURIS
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 940,
          }}
        >
          <span
            style={{
              fontSize: 58,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              color: ON_INK,
            }}
          >
            {title}
          </span>
          <span
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 25,
              lineHeight: 1.45,
              fontWeight: 400,
              color: MUTED,
            }}
          >
            {description}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 28, height: 2, backgroundColor: GOLD }} />
          <span style={{ fontSize: 16, letterSpacing: 0.5, color: MUTED }}>
            {SITE_DOMAIN} · Mauritius-based drinks and food FMCG supply
          </span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: loadedFonts,
    },
  );
}
