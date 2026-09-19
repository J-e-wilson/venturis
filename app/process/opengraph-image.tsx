import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const dynamic = "force-static";

export default function Image() {
  return renderOgImage({
    title: "From requirement to delivery",
    description:
      "How Venturis maps a requirement, sources against vetted suppliers, and delivers on schedule.",
  });
}
