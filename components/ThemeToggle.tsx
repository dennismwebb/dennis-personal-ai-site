"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative flex items-center w-16 h-8 rounded-full
        bg-slate-200 dark:bg-slate-700
        transition-colors duration-300
        shadow-inner
      "
    >
      {/* Sliding circle */}
      <div
        className={`
          absolute w-7 h-7 rounded-full bg-white dark:bg-slate-900 shadow
          transform transition-transform duration-300
          ${isDark ? "translate-x-8" : "translate-x-1"}
        `}
      />

      {/* Sun icon */}
      <SunIcon
        className={`
          absolute left-1 w-5 h-5 text-yellow-500 transition-opacity
          ${isDark ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* Moon icon */}
      <MoonIcon
        className={`
          absolute right-1 w-5 h-5 text-slate-300 transition-opacity
          ${isDark ? "opacity-100" : "opacity-0"}
        `}
      />
    </button>
  );
}