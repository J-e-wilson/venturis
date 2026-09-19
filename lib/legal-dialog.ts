/**
 * Client-only helpers for the single, site-wide legal dialog (Privacy Policy
 * and Terms of Use share one <dialog>, switched by an internal tab). Same
 * plain-DOM pattern as lib/enquiry-dialog.ts: no React context, so any link
 * anywhere in the tree can open a specific document without prop drilling.
 */
export type LegalDoc = "privacy" | "terms";

export const LEGAL_DIALOG_ID = "legal-dialog";
export const LEGAL_OPEN_EVENT = "legal-dialog:open";

function getDialog() {
  if (typeof document === "undefined") return null;
  return document.getElementById(LEGAL_DIALOG_ID) as HTMLDialogElement | null;
}

export function openLegalDialog(doc: LegalDoc) {
  const dialog = getDialog();
  if (!dialog) return;
  dialog.dispatchEvent(new CustomEvent<LegalDoc>(LEGAL_OPEN_EVENT, { detail: doc }));
  if (!dialog.open) {
    document.documentElement.style.overflow = "hidden";
    dialog.showModal();
  }
}
