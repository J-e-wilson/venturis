import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const WHATSAPP_NUMBER = "447472773107";
const WHATSAPP_MESSAGE =
  "Hello Venturis, I would like to enquire about your supply services.";

/**
 * Site-wide floating action button. A plain anchor to a wa.me deep link, no
 * client JS: on mobile it opens the WhatsApp app with the number and message
 * pre-filled, on desktop it opens WhatsApp Web. Keeps WhatsApp's own green,
 * the same way a real third-party logo keeps its own color on an otherwise
 * one-accent page, so the affordance stays instantly recognisable.
 */
export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Venturis on WhatsApp"
      className="box-hover fixed right-6 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-raised"
      style={{ bottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 0.75rem))" }}
    >
      <WhatsappLogo size={30} weight="fill" />
    </a>
  );
}
