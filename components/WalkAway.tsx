import Image from "next/image";
import { Check } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { TAKEAWAYS } from "@/lib/content";

export default function WalkAway() {
  return (
    <section id="takeaways" className="bg-lavender py-20">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[minmax(0,640px)_1fr] lg:gap-20">
        <div className="relative pb-10 pr-10">
          <div aria-hidden className="absolute bottom-0 right-0 left-12 top-12 rounded-3xl border border-saffron/70" />
          <div className="relative aspect-[600/740] overflow-hidden rounded-2xl shadow-xl">
            <Image src="/images/walk.jpg" alt="Sound healing session at Star Yog Studio" fill sizes="(min-width:1024px) 600px, 90vw" className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 aspect-[230/300] w-[38%] overflow-hidden rounded-2xl border-4 border-lavender shadow-xl">
            <Image src="/images/walk2.jpg" alt="" fill sizes="240px" className="object-cover" />
          </div>
        </div>

        <div>
          <p className="eyebrow text-rust">Takeaways</p>
          <h2 className="h2-section mt-3 text-ink">What you will walk away with</h2>
          <ul className="mt-8">
            {TAKEAWAYS.map((t) => (
              <li key={t} className="flex items-center gap-4 border-b border-line py-4 font-serif text-2xl text-[#2a1e47]">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-saffron text-ink">
                  <Check size={16} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton label="Reserve your free spot" />
          </div>
        </div>
      </div>
    </section>
  );
}
