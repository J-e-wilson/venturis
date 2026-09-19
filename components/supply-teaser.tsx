import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "./container";
import { LiftCard } from "./lift-card";

const CATEGORIES = [
  {
    title: "Beverages",
    body: "Spirits, wines, beers and soft drinks from established producers, backed by consistent supply agreements.",
  },
  {
    title: "Food FMCG",
    body: "Packaged and staple foods, sourced and consolidated for reliable, recurring supply to distributors and retailers.",
  },
];

export function SupplyTeaser() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="text-h2 max-w-xl text-text">
          Two categories, sourced properly
        </h2>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {CATEGORIES.map((c) => (
            <LiftCard key={c.title} href="/supply">
              <div className="flex h-full flex-col">
                <h3 className="text-h3 text-text">{c.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                  {c.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  What we supply
                  <ArrowRight
                    size={16}
                    weight="regular"
                    className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </LiftCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
