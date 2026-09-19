"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, EnvelopeSimple, X } from "@phosphor-icons/react";
import { ENQUIRY_DIALOG_ID } from "@/lib/enquiry-dialog";

const CATEGORIES = [
  "General enquiry",
  "Beverages",
  "Food FMCG",
  "Both categories",
];

const inputClass =
  "mt-1.5 w-full rounded-cell border border-border bg-surface px-3.5 py-2.5 text-sm text-text placeholder:text-muted/60";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoFocus,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  const id = `enquiry-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-xs text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={inputClass}
      />
    </div>
  );
}

export function EnquiryDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  // Light-dismiss: a click that lands outside the dialog's own box (i.e. on
  // its ::backdrop) closes it. Clicks on the backdrop are reported as
  // targeting the dialog element itself, so a bounding-box check tells the
  // two apart.
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

  // Covers every close path at once: Escape, the light-dismiss above, and
  // the explicit close button.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function onClose() {
      document.documentElement.style.overflow = "";
      setMailtoHref(null);
      formRef.current?.reset();
    }
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const category = String(data.get("category") || CATEGORIES[0]);
    const message = String(data.get("message") || "").trim();

    const subject = `Supply enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Email: ${email}`,
      `Category: ${category}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:info@venturis.mu?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setMailtoHref(mailto);
    window.location.href = mailto;
  }

  return (
    <dialog
      id={ENQUIRY_DIALOG_ID}
      ref={dialogRef}
      className="dialog-surface w-[min(560px,calc(100vw-2.5rem))]"
      aria-labelledby="enquiry-dialog-title"
    >
      <div className="flex max-h-[calc(100vh-3rem)] flex-col">
        <div className="flex items-start justify-between gap-4 p-6 pb-0 md:p-8 md:pb-0">
          <div>
            <h2
              id="enquiry-dialog-title"
              className="text-h3 text-text"
            >
              Tell us what you need
            </h2>
            <p className="mt-1.5 max-w-[38ch] text-sm leading-relaxed text-muted">
              Share a few details and we will follow up with what Venturis
              can source for you.
            </p>
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

        <div className="min-h-0 flex-1 overflow-y-auto p-6 pt-5 md:p-8 md:pt-5">
          {mailtoHref ? (
            <div className="flex flex-col items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-bright/12 text-accent">
                <EnvelopeSimple size={20} weight="regular" />
              </span>
              <div>
                <h3 className="text-h3 text-text">Almost there</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Your email app should now have a message ready, addressed
                  to info@venturis.mu. Send it from there to reach us.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Nothing open?{" "}
                  <a href={mailtoHref} className="text-accent hover:underline">
                    Open the email again
                  </a>
                  , or write to us directly at{" "}
                  <a
                    href="mailto:info@venturis.mu"
                    className="text-accent hover:underline"
                  >
                    info@venturis.mu
                  </a>
                  .
                </p>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-on-ink shadow-card transition duration-100 ease-out hover:-translate-y-px hover:shadow-raised active:scale-[0.97]"
              >
                Close
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  required
                  autoFocus
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Company" name="company" placeholder="Optional" />
                <div>
                  <label
                    htmlFor="enquiry-category"
                    className="text-xs text-muted"
                  >
                    Category
                  </label>
                  <select
                    id="enquiry-category"
                    name="category"
                    defaultValue={CATEGORIES[0]}
                    className={inputClass}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="enquiry-message" className="text-xs text-muted">
                  What do you need?
                  <span className="text-accent"> *</span>
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Categories, volumes, delivery timelines..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-on-ink shadow-card transition duration-100 ease-out hover:-translate-y-px hover:shadow-raised active:scale-[0.97]"
                >
                  Continue to email
                  <ArrowRight size={16} weight="regular" />
                </button>
                <p className="text-xs text-muted">
                  Opens a pre-filled email to info@venturis.mu. Nothing sends
                  until you do, from your own mail app.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
