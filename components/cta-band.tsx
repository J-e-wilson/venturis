import { Container } from "./container";
import { Reveal } from "./reveal";
import { Button } from "./button";

export function CtaBand({
  heading = "Talk to us about your supply needs",
  body = "Whether it is a single category or an ongoing arrangement, we will walk through what Venturis can source for you.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <div className="box-hover relative overflow-hidden rounded-card bg-ink px-8 py-12 text-center shadow-hero md:px-14 md:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"
            />
            <h2 className="text-h2 text-on-ink">{heading}</h2>
            <p className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-on-ink/70">
              {body}
            </p>
            <div className="mt-8 flex justify-center">
              <Button enquiry variant="on-ink">
                Get in touch
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
