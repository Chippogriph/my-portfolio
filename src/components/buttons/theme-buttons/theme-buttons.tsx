"use client";

import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Byt till ljust tema" : "Byt till mörkt tema"}
      className="relative flex h-8 w-16 items-center rounded-full bg-gray-200 p-1 transition-colors dark:bg-gray-700"
    >
      {/* Måne */}
      <span className="absolute left-2 text-sm">🌙</span>

      {/* Sol */}
      <span className="absolute right-2 text-sm">☀️</span>

      {/* Slider */}
      <span
        className={`relative z-10 flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
      </span>
    </button>
  );
}