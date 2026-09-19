"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { openEnquiryDialog } from "@/lib/enquiry-dialog";

type Variant = "primary" | "secondary" | "ghost" | "on-ink";

const base =
  "group/btn inline-flex items-center gap-2 font-medium transition duration-100 ease-out active:scale-[0.97]";

const styles: Record<Variant, string> = {
  primary:
    "rounded-full bg-ink px-5 py-3 text-sm text-on-ink shadow-card hover:-translate-y-px hover:shadow-raised",
  "on-ink":
    "rounded-full bg-on-ink px-5 py-3 text-sm font-semibold text-ink shadow-card hover:-translate-y-px hover:bg-white",
  secondary:
    "rounded-full border border-border bg-surface/70 px-5 py-3 text-sm text-text hover:border-accent hover:text-accent",
  ghost: "text-sm font-medium text-text hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  withArrow = variant !== "secondary",
  className = "",
  onClick,
  enquiry = false,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  /** Opens the site-wide enquiry dialog instead of navigating. */
  enquiry?: boolean;
}) {
  const classes = `${base} ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          size={16}
          weight="regular"
          className="transition-transform duration-150 ease-out group-hover/btn:translate-x-0.5"
        />
      )}
    </>
  );

  if (enquiry) {
    return (
      <button
        type="button"
        onClick={() => {
          onClick?.();
          openEnquiryDialog();
        }}
        className={classes}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={href ?? "#"} onClick={onClick} className={classes}>
      {content}
    </Link>
  );
}
