import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";
export const alt =
  'Venturis branded social card: "Reliable FMCG sourcing, routed through Mauritius."';

export default function Image() {
  return renderOgImage({
    title: "Reliable FMCG sourcing, routed through Mauritius.",
    description:
      "Drinks and food FMCG for distributors and retailers, linking producers across Africa, Asia and Europe.",
  });
}
