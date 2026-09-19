import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { OG_BASE, TWITTER_CARD } from "@/lib/site";

const description =
  "Contact Venturis about drinks and food FMCG supply. Based in Ebène, Mauritius. Email info@venturis.mu.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    ...OG_BASE,
    url: "/contact/",
    title: "Contact | Venturis",
    description,
  },
  twitter: {
    card: TWITTER_CARD,
    title: "Contact | Venturis",
    description,
  },
};

export default function ContactPage() {
  return <Contact />;
}
