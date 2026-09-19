/**
 * Client-only helpers for the single, site-wide enquiry dialog rendered once
 * in the root layout. Plain DOM calls, no React context, so any "Get in
 * touch" trigger anywhere in the tree can open it without prop drilling.
 */
export const ENQUIRY_DIALOG_ID = "enquiry-dialog";

function getDialog() {
  if (typeof document === "undefined") return null;
  return document.getElementById(ENQUIRY_DIALOG_ID) as HTMLDialogElement | null;
}

export function openEnquiryDialog() {
  const dialog = getDialog();
  if (!dialog || dialog.open) return;
  document.documentElement.style.overflow = "hidden";
  dialog.showModal();
}

export function closeEnquiryDialog() {
  getDialog()?.close();
}
