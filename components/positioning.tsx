import { Container } from "./container";
import { Reveal } from "./reveal";
import { Button } from "./button";
import { RouteDiagram } from "./route-diagram";

export function Positioning() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="max-w-xl self-center">
            <h2 className="text-h2 text-text">Built on one clear route</h2>
            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted">
              Venturis sits in a stable, well-regulated jurisdiction between
              African demand and Asian and European supply, consolidating drinks
              and food FMCG through a single dependable route in both directions.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                More about Venturis
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative self-center">
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
