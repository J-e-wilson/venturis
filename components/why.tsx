import { Container } from "./container";

const POINTS = [
  {
    title: "Strategic base",
    body: "A stable, well-regulated jurisdiction with established trade and shipping links across Africa, Asia and Europe.",
  },
  {
    title: "Focused expertise",
    body: "We work exclusively in drinks and food FMCG, so sourcing decisions are informed by real category knowledge, not a spread-thin catalogue.",
  },
  {
    title: "Direct relationships",
    body: "We deal directly with producers and distributors, cutting intermediaries, cost and points of failure in the chain.",
  },
  {
    title: "Full documentation",
    body: "Every shipment is backed by complete trade documentation: invoices, certificates of origin, and compliance records.",
  },
];

export function Why() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-h2 text-text">
            Built to be a dependable partner, not just a supplier
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Credibility in FMCG supply comes down to consistency; here's how
            we protect it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {POINTS.map((p) => (
            <div
              key={p.title}
              className="box-hover rounded-cell border border-hairline bg-raised p-6 shadow-card md:p-7"
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-accent-bright" />
              <h3 className="text-h3 mt-4 text-text">{p.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
