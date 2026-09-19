import Image from "next/image";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { Button } from "./button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-52 h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-bright)_10%,transparent),transparent_62%)]"
      />

      <Container className="relative grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-20 lg:min-h-[calc(92vh-4rem)] lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-24">
        <Reveal className="max-w-2xl">
          <h1 className="text-display text-text">
            Reliable FMCG sourcing, routed through Mauritius.
          </h1>

          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            Drinks and food FMCG for distributors and retailers, linking
            producers across Africa, Asia and Europe with vetted supply and
            dependable logistics.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button enquiry>Get in touch</Button>
            <Button href="/supply" variant="secondary">
              What we supply
            </Button>
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="box-hover relative aspect-[4/5] w-full overflow-hidden rounded-card bg-ink shadow-hero">
            <Image
              src={heroImg}
              alt="Container terminal at a trade port"
              placeholder="blur"
              priority
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover opacity-90 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/15 to-transparent" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
