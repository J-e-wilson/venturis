import { Container } from "./container";
import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Requirement",
    body: "We map the volumes, categories and delivery timelines you need.",
  },
  {
    n: "02",
    title: "Sourcing",
    body: "We match the requirement to vetted suppliers and negotiate terms.",
  },
  {
    n: "03",
    title: "Logistics",
    body: "Shipping, customs and documentation are coordinated through Mauritius.",
  },
  {
    n: "04",
    title: "Delivery",
    body: "Goods arrive on schedule, with full paperwork and continuity of supply.",
  },
];

export function Process() {
  return (
    <section className="pt-14 pb-20 md:pt-20 md:pb-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h1 className="text-h1 text-text">
            A straightforward process, start to delivery
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Every engagement runs the same four steps, so you always know what
            happens next and who is doing it.
          </p>
        </Reveal>

        <div className="relative mt-14 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute left-0 top-[5px] hidden h-px w-full bg-hairline md:block"
          />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {STEPS.map((s) => (
              <li key={s.n} className="relative md:pr-6">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 hidden h-2.5 w-2.5 rounded-full bg-accent-bright ring-4 ring-bg md:block"
                />
                <div className="flex items-baseline gap-3 md:mt-8">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <h2 className="text-h3 text-text">{s.title}</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
