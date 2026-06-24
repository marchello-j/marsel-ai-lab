"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={[
        "fixed bottom-4 right-4 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[#07100f]/92 px-4 text-sm font-bold text-white shadow-[0_18px_56px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-[opacity,transform,background,border-color] duration-200 ease-out hover:-translate-y-1 hover:bg-[var(--accent)] hover:text-[#031211] active:translate-y-0 sm:bottom-6 sm:right-6 sm:h-13 sm:px-5",
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      ].join(" ")}
    >
      <span aria-hidden="true" className="text-base leading-none">
        ↑
      </span>
      <span className="hidden sm:inline">Top</span>
    </button>
  );
}
