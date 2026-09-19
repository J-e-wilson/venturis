"use client";

import { openLegalDialog } from "@/lib/legal-dialog";

/**
 * The only interactive piece of the footer. Isolated into its own tiny
 * client component so the rest of the footer stays a server component.
 */
export function LegalLinks() {
  return (
    <>
      <button
        type="button"
        onClick={() => openLegalDialog("privacy")}
        className="text-left text-sm text-on-ink/80 transition-colors hover:text-on-ink"
      >
        Privacy Policy
      </button>
      <button
        type="button"
        onClick={() => openLegalDialog("terms")}
        className="text-left text-sm text-on-ink/80 transition-colors hover:text-on-ink"
      >
        Terms of Use
      </button>
    </>
  );
}
