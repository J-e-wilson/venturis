"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Reads the `data-theme` the blocking init script already set on <html>
 * before hydration (see app/layout.tsx), so this matches what's already
 * on screen instead of guessing and flipping a frame later.
 */
function currentTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" || attr === "dark" ? attr : systemTheme();
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  // Server-rendered as light; the effect corrects it on mount, matching
  // whatever the init script already applied to <html>. A one-frame icon
  // correction on first paint is the accepted tradeoff for a flash-free
  // page background (the part visitors actually notice) in any statically
  // exported dark-mode toggle.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(currentTheme());

    const stored = (() => {
      try {
        return localStorage.getItem(THEME_STORAGE_KEY);
      } catch {
        return null;
      }
    })();
    if (stored === "light" || stored === "dark") return;

    // No explicit choice yet: keep following the OS setting live.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(systemTheme());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  }

  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-transform duration-100 ease-out hover:text-text active:scale-90 ${className}`}
    >
      <Sun
        size={19}
        weight="regular"
        className={`absolute transition-all duration-200 ease-out ${
          dark ? "rotate-90 scale-50 opacity-0" : "opacity-100"
        }`}
      />
      <Moon
        size={19}
        weight="regular"
        className={`absolute transition-all duration-200 ease-out ${
          dark ? "opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
      />
    </button>
  );
}
