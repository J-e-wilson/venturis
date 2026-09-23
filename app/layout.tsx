import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { LegalDialog } from "@/components/legal-dialog";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  OG_BASE,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  TWITTER_CARD,
} from "@/lib/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Venturis",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "FMCG sourcing",
    "drinks supply Mauritius",
    "food FMCG supply",
    "beverage sourcing Africa Asia Europe",
    "Mauritius trade logistics",
    "FMCG distributor supply",
  ],
  authors: [{ name: "Venturis Ltd", url: SITE_URL }],
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0e161c" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Venturis Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: SITE_EMAIL,
  telephone: "+44 7472 773107",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ebène",
    addressCountry: "MU",
  },
  areaServed: ["MU", "Africa", "Asia", "Europe"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}
      // The theme-init script (first thing in <body>) sets `data-theme` on
      // this element directly, before hydration, to avoid a flash of the
      // wrong theme. Server-rendered HTML never has that attribute (the
      // server doesn't know the visitor's stored choice), so it will always
      // differ from the client's actual DOM by design here, not by bug;
      // this is the standard, documented way to tell React that's expected.
      suppressHydrationWarning
    >
      {/*
        suppressHydrationWarning here too: some browser extensions (Grammarly
        is the common one, via data-gr-ext-installed /
        data-new-gr-c-s-check-loaded) inject attributes onto <body> before
        React hydrates. That's an extension modifying the DOM on the visitor's
        machine, not a real markup mismatch, so it's expected to differ from
        the server-rendered HTML and safe to ignore here.
      */}
      <body suppressHydrationWarning>
        {/*
          A plain, literal <script>: the browser parses and executes this
          synchronously, in document order, before painting anything below
          it. That guarantee is the whole point (it's what keeps an explicit
          theme choice from flashing the system-default theme first) and
          next/script's `beforeInteractive` strategy doesn't reliably give
          it under static export, since it hands the code to Next's own
          runtime to inject rather than running it inline.
        */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <EnquiryDialog />
        <LegalDialog />
        <WhatsAppButton />
      </body>
    </html>
  );
}
