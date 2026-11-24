"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { EVENT, FAQS } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-20">
      <div className="container-x grid gap-12 lg:grid-cols-[440px_1fr] lg:gap-24">
        {/* Left */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <div>
            <p className="eyebrow text-rust">Good to know</p>
            <h2 className="h2-section mt-3 text-ink">Frequently asked questions</h2>
          </div>
          <div className="relative aspect-[440/300] overflow-hidden rounded-2xl">
            <Image src="/images/gal-b.jpg" alt="Singing bowl circle at Star Yog Studio" fill sizes="440px" className="object-cover" />
          </div>
          <div className="rounded-[28px] bg-[linear-gradient(135deg,#2e1a5c,#1c1238)] p-8 text-cream shadow-[0_16px_36px_rgb(28_18_56/0.25)]">
            <p className="eyebrow text-amber">Free live webinar</p>
            <h3 className="mt-4 font-serif text-[32px] leading-tight">Ready to start your journey?</h3>
            <p className="mt-4 text-base text-ondark">Reserve your free spot and get the joining link by email and WhatsApp.</p>
            <dl className="mt-5 text-base">
              {[
                ["Date", EVENT.date],
                ["Time", EVENT.time],
                ["Format", EVENT.format],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-t border-white/15 py-3 last:border-b">
                  <dt className="text-ondark">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <CtaButton className="mt-6 w-full" />
          </div>
        </div>

        {/* Accordion */}
        <div className="border-t border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left font-serif text-[26px] leading-snug text-ink transition hover:text-rust"
                  >
                    {f.q}
                    <span className="shrink-0 text-rust">{isOpen ? <Minus size={22} /> : <Plus size={22} />}</span>
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 pb-7 text-lg leading-relaxed text-body">
                      {f.a.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                      {f.bullets && (
                        <ul className="list-disc space-y-1.5 pl-6 marker:text-saffron">
                          {f.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                      {f.after && <p>{f.after}</p>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
