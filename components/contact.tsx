import {
  EnvelopeSimple,
  Phone,
  MapPin,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "./container";
import { Reveal } from "./reveal";
import { Button } from "./button";

const DETAILS = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: "info@venturis.mu",
    href: "mailto:info@venturis.mu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7472 773107",
    href: "tel:+447472773107",
  },
  { icon: MapPin, label: "Office", value: "Ebène, Mauritius", href: null },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday to Friday, 9:00 to 17:00 (GMT+4)",
    href: null,
  },
];

export function Contact() {
  return (
    <section className="pt-14 pb-20 md:pt-20 md:pb-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="max-w-md">
            <h1 className="text-h1 text-text">
              Talk to us about your supply needs
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Whether it is a single category or an ongoing arrangement, we will
              walk through what Venturis can source for you.
            </p>
            <div className="mt-8">
              <Button enquiry>Get in touch</Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="box-hover rounded-card border border-hairline bg-raised p-6 shadow-card md:p-8">
              {DETAILS.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.label}
                    className={`flex items-start gap-4 py-5 ${
                      i > 0 ? "border-t border-hairline" : "pt-0"
                    }`}
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-bright/12 text-accent">
                      <Icon size={18} weight="regular" />
                    </span>
                    <div>
                      <dt className="text-xs text-muted">{d.label}</dt>
                      <dd className="mt-1 text-sm text-text">
                        {d.href ? (
                          <a className="hover:text-accent" href={d.href}>
                            {d.value}
                          </a>
                        ) : (
                          d.value
                        )}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
