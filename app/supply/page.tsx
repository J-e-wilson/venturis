import type { Metadata } from "next";
import { Supply } from "@/components/supply";
import { CtaBand } from "@/components/cta-band";
import { OG_BASE, TWITTER_CARD } from "@/lib/site";

const description =
  "Venturis supplies two FMCG categories: beverages (spirits, wines, beers, soft drinks) and packaged food, sourced from vetted producers.";

export const metadata: Metadata = {
  title: "Supply",
  description,
  alternates: { canonical: "/supply/" },
  openGraph: {
    ...OG_BASE,
    url: "/supply/",
    title: "Supply | Venturis",
    description,
  },
  twitter: {
    card: TWITTER_CARD,
    title: "Supply | Venturis",
    description,
  },
};

export default function SupplyPage() {
  return (
    <>
      <Supply />
      <CtaBand
        heading="Need one of these categories?"
        body="Tell us the volumes and delivery timelines you are working to and we will map the route."
      />
    </>
  );
}
