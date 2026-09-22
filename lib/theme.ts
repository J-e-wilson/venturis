export const THEME_STORAGE_KEY = "venturis-theme";

export type Theme = "light" | "dark";

/**
 * Runs before hydration (see the `beforeInteractive` Script in
 * app/layout.tsx) so an explicit stored choice applies before first paint,
 * with no flash of the system-default theme. Only sets the attribute when
 * there IS a stored choice; otherwise `data-theme` stays unset and the
 * `prefers-color-scheme` media query in globals.css keeps deciding, exactly
 * as it did before this toggle existed.
 */
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;
