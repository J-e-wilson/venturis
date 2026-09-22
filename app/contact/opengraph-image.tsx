import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";
import { SITE_EMAIL } from "@/lib/site";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";
export const alt =
  'Venturis branded social card: "Talk to us about your supply needs"';

export default function Image() {
  return renderOgImage({
    title: "Talk to us about your supply needs",
    description: `Based in Ebène, Mauritius. Email ${SITE_EMAIL}.`,
  });
}
