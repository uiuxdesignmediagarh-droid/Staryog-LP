"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "./CtaButton";

export default function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-peach to-orange shadow-[0_8px_24px_rgb(28_18_56/0.25)] transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4 py-3">
        <div className="min-w-0">
          <p className="truncate font-serif text-xl text-ink sm:text-[28px]">Ready to experience sound healing for yourself?</p>
          <p className="hidden text-base font-medium text-[#3a2352] sm:block">Free live webinar · 26 November 2026 · 11 AM – 12 PM IST</p>
        </div>
        <CtaButton className="shrink-0 !bg-none !bg-ink !text-cream !shadow-none [&>span:last-child]:bg-amber [&>span:last-child]:!text-ink" label="Reserve my free spot" />
      </div>
    </div>
  );
}
