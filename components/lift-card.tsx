import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Hover-lift card. CSS-only transitions (no client JS); the global
 * prefers-reduced-motion rule neutralises the movement.
 */
export function LiftCard({
  href,
  children,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const card = (
    <div
      className={`box-hover h-full rounded-card border border-hairline bg-raised p-6 shadow-card md:p-8 ${className}`}
    >
      {children}
    </div>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      className="group block h-full focus-visible:outline-none"
    >
      {card}
    </Link>
  );
}
