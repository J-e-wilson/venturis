import type { Metadata } from "next";
import { Process } from "@/components/process";
import { CtaBand } from "@/components/cta-band";
import { OG_BASE, TWITTER_CARD } from "@/lib/site";

const description =
  "From requirement to delivery: how Venturis maps a requirement, sources against vetted suppliers, and delivers on schedule through Mauritius.";

export const metadata: Metadata = {
  title: "Process",
  description,
  alternates: { canonical: "/process/" },
  openGraph: {
    ...OG_BASE,
    url: "/process/",
    title: "Process | Venturis",
    description,
  },
  twitter: {
    card: TWITTER_CARD,
    title: "Process | Venturis",
    description,
  },
};

export default function ProcessPage() {
  return (
    <>
      <Process />
      <CtaBand
        heading="Ready to start?"
        body="Send us the categories and volumes you need and we will take it from the requirement step."
      />
    </>
  );
}
