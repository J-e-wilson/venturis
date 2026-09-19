export function Logo({
  className = "",
  onInk = false,
}: {
  className?: string;
  onInk?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke={onInk ? "rgba(255,255,255,0.35)" : "var(--border)"}
          strokeWidth="1.5"
        />
        <path
          d="M13.5 12 L23 34.5"
          stroke={onInk ? "var(--on-ink)" : "var(--ink)"}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M23 34.5 L34 12"
          stroke="var(--accent-bright)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-serif text-lg tracking-[0.22em] ${
          onInk ? "text-on-ink" : "text-text"
        }`}
      >
        VENTURIS
      </span>
    </span>
  );
}
