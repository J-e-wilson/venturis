import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Positioning } from "@/components/positioning";
import { SupplyTeaser } from "@/components/supply-teaser";
import { CtaBand } from "@/components/cta-band";
import { OG_BASE, SITE_DESCRIPTION, SITE_TITLE, TWITTER_CARD } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_BASE,
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: TWITTER_CARD,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Positioning />
      <SupplyTeaser />
      <CtaBand />
    </>
  );
}
