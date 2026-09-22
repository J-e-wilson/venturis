import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Venturis",
    short_name: "Venturis",
    description: "Drinks and food FMCG supply, routed through Mauritius.",
    start_url: "/",
    display: "browser",
    background_color: "#f6f5f1",
    theme_color: "#14232e",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
