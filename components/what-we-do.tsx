import { Container } from "./container";
import { Reveal } from "./reveal";
import { RouteDiagram } from "./route-diagram";

export function WhatWeDo() {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h1 className="text-h1 text-text">
            A supply company built on one clear route
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-14 md:mt-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="max-w-[58ch] self-center">
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Venturis is a Mauritius-based supply company focused on drinks
                and food FMCG. Rather than spreading across categories, we
                focus on sourcing and supply in the sectors that matter to
                our clients: packaged food and beverages.
              </p>
              <p>
                Our base gives us a natural advantage - a stable,
                well-regulated jurisdiction between African demand and Asian
                and European supply, with the trade infrastructure to move
                goods efficiently in both directions.
              </p>
              <p>
                We work directly with producers and distributors to secure
                consistent supply, competitive terms and dependable delivery
                timelines.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_46%,color-mix(in_srgb,var(--accent-bright)_11%,transparent),transparent_60%)]"
            />
            <div className="mx-auto w-full max-w-[34rem]">
              <RouteDiagram />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
