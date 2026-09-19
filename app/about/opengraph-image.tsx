import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";

export default function Image() {
  return renderOgImage({
    title: "A supply company built on one clear route",
    description:
      "Mauritius-based, focused on drinks and food FMCG, working directly with producers and distributors across Africa, Asia and Europe.",
  });
}
