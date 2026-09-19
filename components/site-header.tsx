"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./logo";
import { Container } from "./container";
import { Button } from "./button";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/supply", label: "Supply" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="glass sticky top-0 z-40">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center rounded-full focus-visible:outline-none"
          aria-label="Venturis, home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active
                    ? "bg-accent-bright/12 text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Button enquiry withArrow={false} className="ml-2">
            Get in touch
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-100 ease-out active:scale-90 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <List
            size={22}
            weight="regular"
            className={`absolute transition-all duration-200 ease-out ${
              open ? "rotate-90 scale-50 opacity-0" : "opacity-100"
            }`}
          />
          <X
            size={22}
            weight="regular"
            className={`absolute transition-all duration-200 ease-out ${
              open ? "opacity-100" : "-rotate-90 scale-50 opacity-0"
            }`}
          />
        </button>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-full h-5 bg-gradient-to-b from-[var(--bg)]/65 to-transparent"
      />

      <div
        id="mobile-menu"
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="glass border-b border-border shadow-raised">
            <Container className="flex flex-col py-3">
              {LINKS.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-3 text-sm transition-colors ${
                      active
                        ? "bg-accent-bright/12 text-text"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <div className="px-3 pt-3">
                <Button enquiry withArrow={false} onClick={close}>
                  Get in touch
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </header>
  );
}
