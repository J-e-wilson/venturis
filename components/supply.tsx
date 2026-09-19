import Image, { type StaticImageData } from "next/image";
import { Container } from "./container";
import { Reveal } from "./reveal";
import beveragesImg from "@/assets/supply-beverages.jpg";
import foodImg from "@/assets/supply-food.jpg";

// Photo credits (Unsplash License, no attribution required, given anyway):
// beverages, Waldemar Brandt. food, Dennis Siqueira.

function CategoryCard({
  title,
  body,
  note,
  image,
  imageAlt,
  delayMs,
}: {
  title: string;
  body: string;
  note: string;
  image: StaticImageData;
  imageAlt: string;
  delayMs: number;
}) {
  return (
    <div
      className="photo-elegant reveal-load overflow-hidden rounded-card border border-hairline bg-raised shadow-card"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div
        className="relative overflow-hidden bg-ink"
        style={{ aspectRatio: "16 / 10" }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-90 mix-blend-luminosity"
        />
      </div>

      <div className="p-6 md:p-7">
        <span className="block h-px w-10 bg-accent-bright" />
        <h2 className="text-h2 mt-4 text-text">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
        <p className="mt-5 border-l border-accent-bright/40 pl-4 text-sm leading-relaxed text-muted">
          {note}
        </p>
      </div>
    </div>
  );
}

export function Supply() {
  return (
    <section className="pt-14 pb-20 md:pt-20 md:pb-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h1 className="text-h1 text-text">Two categories, sourced properly</h1>
          <p className="mt-6 text-base leading-relaxed text-muted">
            A narrow focus is what keeps quality, supplier relationships and
            logistics under control.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-7">
          <CategoryCard
            title="Beverages"
            body="Spirits, wines, beers and soft drinks from established producers, backed by consistent supply agreements and steady volumes."
            note="Orders across multiple producers are consolidated into one shipment with a single set of documents."
            image={beveragesImg}
            imageAlt="Glass bottles on a bottling line, viewed from above"
            delayMs={0}
          />
          <CategoryCard
            title="Food FMCG"
            body="Packaged and staple foods, sourced and consolidated for reliable, recurring supply to distributors and retailers."
            note="Recurring volumes are planned ahead with suppliers so lead times stay predictable."
            image={foodImg}
            imageAlt="Shelves and pallets of packaged staple foods in a distribution warehouse"
            delayMs={90}
          />
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          <div className="box-hover rounded-cell border border-hairline bg-raised p-6 shadow-card md:p-7">
            <span className="block h-px w-10 bg-accent-bright" />
            <h2 className="text-h3 mt-4 text-text">Supplier vetting</h2>
            <p className="mt-2 text-base leading-relaxed text-muted">
              Every supplier is assessed for product quality, documentation and
              delivery reliability before onboarding.
            </p>
          </div>
          <div className="box-hover rounded-cell border border-hairline bg-raised p-6 shadow-card md:p-7">
            <span className="block h-px w-10 bg-accent-bright" />
            <h2 className="text-h3 mt-4 text-text">
              Logistics and documentation
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted">
              Shipping, customs paperwork and delivery scheduling handled from
              origin to arrival.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
