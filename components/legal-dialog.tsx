"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import { LEGAL_DIALOG_ID, LEGAL_OPEN_EVENT, type LegalDoc } from "@/lib/legal-dialog";
import { SITE_DOMAIN, SITE_EMAIL } from "@/lib/site";

const LAST_UPDATED = "14 September 2026";

const PRIVACY: { title: string; body: string }[] = [
  {
    title: "What this covers",
    body: `This policy explains what happens to information you share on ${SITE_DOMAIN}, the marketing website for Venturis Ltd. It does not cover information exchanged once a supply arrangement is agreed separately, in writing.`,
  },
  {
    title: "No cookies, no tracking",
    body: "This site does not use cookies, analytics or third-party tracking scripts. Fonts, icons and images are all self-hosted, so nothing loads from a third-party server while you browse.",
  },
  {
    title: "The enquiry form",
    body: `Filling in “Get in touch” does not submit anything to our servers. It opens a pre-filled email in your own mail app, addressed to ${SITE_EMAIL}. Whether that email actually gets sent is entirely your choice.`,
  },
  {
    title: "If you email us",
    body: "If you do send us an email, through the form or directly, we use the details you share, such as your name, company and what you are enquiring about, only to respond to you. We do not sell it or pass it to third parties for marketing.",
  },
  {
    title: "Server logs",
    body: "Our hosting provider may automatically record basic technical information, such as IP address and browser type, for security and reliability. That is standard practice for any website and is not linked back to you personally.",
  },
  {
    title: "How long we keep it",
    body: "Correspondence is kept only as long as it is useful for the enquiry or relationship it relates to, then deleted.",
  },
  {
    title: "Your rights",
    body: `You can ask what we hold about you, ask us to correct it, or ask us to delete it, at any time. Email ${SITE_EMAIL}.`,
  },
  {
    title: "Changes to this policy",
    body: "We may update this policy occasionally. The date below shows when it was last revised.",
  },
];

const TERMS: { title: string; body: string }[] = [
  {
    title: "Agreement to these terms",
    body: `By using ${SITE_DOMAIN} you agree to these terms. If you do not agree, please do not use the site.`,
  },
  {
    title: "What this site is",
    body: "This site describes Venturis Ltd’s drinks and food FMCG sourcing and supply services. It is informational: nothing on it is an offer capable of acceptance, and browsing it or sending an enquiry does not create a contract between you and Venturis.",
  },
  {
    title: "Enquiries",
    body: "The “Get in touch” form composes an email draft in your own mail app; it is not a submission to us. We aim to respond to genuine enquiries promptly, but we do not guarantee a response time and are not obliged to accept any enquiry.",
  },
  {
    title: "Intellectual property",
    body: "The Venturis name, logo and the content of this site belong to Venturis Ltd unless stated otherwise. You may view and share pages for your own reference; you may not reproduce, redistribute or use the branding without our written permission.",
  },
  {
    title: "No warranty",
    body: "This site is provided as is. We try to keep it accurate and available, but we do not guarantee it will be uninterrupted, error-free, or that its content is complete or current at all times.",
  },
  {
    title: "Limitation of liability",
    body: "To the extent permitted by law, Venturis Ltd is not liable for losses arising from your use of, or inability to use, this site.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of Mauritius, where Venturis Ltd is established.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms occasionally. The date below shows when they were last revised.",
  },
];

const DOC_META: Record<LegalDoc, { label: string; sections: typeof PRIVACY }> = {
  privacy: { label: "Privacy Policy", sections: PRIVACY },
  terms: { label: "Terms of Use", sections: TERMS },
};

export function LegalDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<LegalDoc>("privacy");

  // A footer link fires this with the document it wants; we just switch tab
  // state, the effect below (or the caller) handles actually opening.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function onOpenRequest(e: Event) {
      setActive((e as CustomEvent<LegalDoc>).detail);
      bodyRef.current?.scrollTo(0, 0);
    }
    dialog.addEventListener(LEGAL_OPEN_EVENT, onOpenRequest);
    return () => dialog.removeEventListener(LEGAL_OPEN_EVENT, onOpenRequest);
  }, []);

  // Light-dismiss: click landing outside the dialog's own box (the
  // ::backdrop) closes it, same bounding-box trick as the enquiry dialog.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function onClick(e: MouseEvent) {
      const rect = dialog!.getBoundingClientRect();
      const inside =
        e.clientY >= rect.top &&
        e.clientY <= rect.top + rect.height &&
        e.clientX >= rect.left &&
        e.clientX <= rect.left + rect.width;
      if (!inside) dialog!.close();
    }
    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function onClose() {
      document.documentElement.style.overflow = "";
    }
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  return (
    <dialog
      id={LEGAL_DIALOG_ID}
      ref={dialogRef}
      className="dialog-surface w-[min(640px,calc(100vw-2.5rem))]"
      aria-labelledby="legal-dialog-title"
    >
      <div className="flex max-h-[calc(100vh-3rem)] flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-hairline p-6 pb-4 md:p-8 md:pb-5">
          <div
            role="tablist"
            aria-label="Legal documents"
            className="inline-flex gap-1 rounded-full bg-bg p-1"
          >
            {(Object.keys(DOC_META) as LegalDoc[]).map((doc) => (
              <button
                key={doc}
                type="button"
                role="tab"
                aria-selected={active === doc}
                onClick={() => setActive(doc)}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === doc
                    ? "bg-raised text-text shadow-card"
                    : "text-muted hover:text-text"
                }`}
              >
                {DOC_META[doc].label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="-m-1.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-hairline hover:text-text"
          >
            <X size={18} weight="regular" />
          </button>
        </div>

        <div
          ref={bodyRef}
          className="min-h-0 flex-1 overflow-y-auto p-6 pt-5 md:p-8 md:pt-6"
        >
          <h2 id="legal-dialog-title" className="text-h3 text-text">
            {DOC_META[active].label}
          </h2>
          <p className="mt-1.5 text-xs text-muted">
            Last updated {LAST_UPDATED}
          </p>

          <div className="mt-6 space-y-5">
            {DOC_META[active].sections.map((s) => (
              <div key={s.title}>
                <h3 className="text-sm font-semibold text-text">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
}
