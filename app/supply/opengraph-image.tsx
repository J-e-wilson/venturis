import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";
export const alt =
  'Venturis branded social card: "Two categories, sourced properly"';

export default function Image() {
  return renderOgImage({
    title: "Two categories, sourced properly",
    description:
      "Beverages and food FMCG, sourced from vetted producers with full trade documentation.",
  });
}
