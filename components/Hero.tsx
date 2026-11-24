import Image from "next/image";
import LeadForm from "./LeadForm";
import { CtaButton } from "./CtaButton";
import { EVENT, HOST } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-night text-cream">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgb(22 12 46 / .94) 0%, rgb(28 18 56 / .84) 40%, rgb(28 18 56 / .4) 72%, rgb(28 18 56 / .22) 100%), linear-gradient(180deg, rgb(22 12 46 / .55) 0%, transparent 25%, transparent 70%, rgb(22 12 46 / .6) 100%)",
        }}
      />

      <div className="container-x flex min-h-[760px] flex-col py-8 lg:min-h-[899px] lg:py-20">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div className="rounded-2xl bg-cream px-3 py-2 shadow-lg">
            <Image src="/images/staryog-logo.png" alt="Star Yog Studio" width={180} height={86} priority className="h-[68px] w-auto sm:h-[84px]" />
          </div>
          <Image
            src="/images/ish-logo.png"
            alt="Institute of Sound Healing"
            width={104}
            height={104}
            priority
            className="h-20 w-20 rounded-full bg-white sm:h-[104px] sm:w-[104px]"
          />
        </header>

        <div className="mt-10 grid flex-1 items-center gap-12 lg:mt-6 lg:grid-cols-[minmax(0,620px)_440px] lg:justify-between">
          {/* Copy */}
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/80 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-amber">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Free live webinar
            </span>
            <h1 className="mt-6 font-serif text-[clamp(3rem,6vw,4.5rem)] font-normal leading-[1.05]">
              Sound Healing:
              <br />
              <em className="text-amber-soft">Myths and Facts</em>
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-ondark">
              Find out what sound healing really is, learn the science behind sound and vibration, enjoy a mini sound journey, and see how
              you can begin your own learning path.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-lg">
              {[
                ["Date", EVENT.date],
                ["Time", EVENT.time],
                ["Format", EVENT.format],
              ].map(([k, v], i) => (
                <div key={k} className={`${i > 0 ? "sm:border-l sm:border-white/25 sm:pl-8" : ""}`}>
                  <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">{k}</dt>
                  <dd className="mt-1 font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 hidden lg:block">
              <CtaButton label="Reserve my free spot" />
            </div>
            <p className="mt-6 text-base text-ondark">Hosted by {HOST}, ISH certified sound healing trainer</p>
          </div>

          {/* Lead form */}
          <div id="register" className="rise rounded-[28px] border border-white/60 bg-cream p-6 text-ink shadow-[0_24px_56px_rgb(13_5_38/0.45)] sm:p-8 [animation-delay:150ms]">
            <span className="inline-flex items-center gap-2 rounded-full bg-saffron/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#8a3b0e]">
              <span className="live-dot h-2 w-2 rounded-full bg-[#e5483a]" />
              Live · 26 Nov 2026 · 11 AM IST
            </span>
            <h2 className="mt-4 font-serif text-[32px] leading-tight">Reserve your free seat</h2>
            <p className="mt-2 mb-5 text-base text-body">Register once and get the joining link by email and WhatsApp.</p>
            <LeadForm source="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
