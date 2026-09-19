import type { Metadata } from "next";
import { WhatWeDo } from "@/components/what-we-do";
import { Why } from "@/components/why";
import { OG_BASE, TWITTER_CARD } from "@/lib/site";

const description =
  "Venturis is a Mauritius-based supply company focused on drinks and food FMCG, working directly with producers and distributors across Africa, Asia and Europe.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about/" },
  openGraph: {
    ...OG_BASE,
    url: "/about/",
    title: "About | Venturis",
    description,
  },
  twitter: {
    card: TWITTER_CARD,
    title: "About | Venturis",
    description,
  },
};

export default function AboutPage() {
  return (
    <>
      <WhatWeDo />
      <Why />
    </>
  );
}
