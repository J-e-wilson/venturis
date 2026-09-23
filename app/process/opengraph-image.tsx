import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";
export const alt =
  'Venturis branded social card: "A straightforward process, start to delivery"';

export default function Image() {
  return renderOgImage({
    title: "A straightforward process, start to delivery",
    description:
      "How Venturis maps a requirement, sources against vetted suppliers, and delivers on schedule.",
  });
}
