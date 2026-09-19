import type { ReactNode } from "react";

/**
 * Layout passthrough. Kept so call sites don't have to change; it renders a
 * plain <div> with no client JS and no entrance animation, so content is
 * present and visible in the SSR HTML immediately. Add the `reveal-load` class
 * via `className` for a one-off on-load fade on a first-viewport block.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return <div className={className || undefined}>{children}</div>;
}
