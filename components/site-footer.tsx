import Image from "next/image";
import Link from "next/link";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./logo";
import { Container } from "./container";
import { LegalLinks } from "./legal-links";
import officeImg from "@/assets/office.jpg";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/supply", label: "Supply" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

const groupLabel = "text-xs font-medium uppercase tracking-wide text-on-ink/45";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden rounded-t-[28px] bg-ink text-on-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
      />

      <Container className="relative py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <Logo onInk />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-ink/75">
              Mauritius-based sourcing and supply for drinks and food FMCG,
              connecting producers across Africa, Asia and Europe.
            </p>
          </div>

          <div>
            <p className={groupLabel}>Navigate</p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-on-ink/80 transition-colors hover:text-on-ink"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className={groupLabel}>Reach us</p>
            <div className="group photo-elegant relative mt-4 aspect-[3/2] w-full max-w-[220px] overflow-hidden rounded-card border border-white/10 bg-ink shadow-card">
              <Image
                src={officeImg}
                alt="The Venturis office building in Ebène, Mauritius"
                fill
                placeholder="blur"
                sizes="220px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-3 text-sm font-medium text-on-ink opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100">
                <MapPin size={15} weight="regular" className="text-accent-bright" />
                Ebène, Mauritius
              </span>
            </div>
          </div>

          <div>
            <p className={groupLabel}>Legal</p>
            <nav className="mt-4 flex flex-col gap-2.5">
              <LegalLinks />
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-on-ink/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Venturis Ltd, Ebène, Mauritius</p>
          <p className="text-on-ink/50">
            No cookies, no tracking. See our Privacy Policy for details.
          </p>
        </div>
      </Container>
    </footer>
  );
}
