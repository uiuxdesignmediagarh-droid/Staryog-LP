import Image from "next/image";
import LeadForm from "./LeadForm";

export default function FinalCta() {
  return (
    <section id="join" className="relative isolate overflow-hidden bg-ink py-20 text-center text-cream">
      <Image src="/images/cta.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: "50% 30%" }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(28_18_56/.82),rgb(28_18_56/.9))]" />
      <div className="container-x">
        <p className="eyebrow text-amber">Free live webinar</p>
        <h2 className="h2-section mx-auto mt-4 max-w-[1000px]">Your journey into the world of sound healing starts here</h2>
        <p className="mt-5 text-xl font-medium text-amber-soft">Join the free live webinar on 26 November 2026, 11 AM – 12 PM IST.</p>
        <div className="mx-auto mt-10 max-w-[1320px] text-left">
          <LeadForm variant="inline" source="final-cta" />
        </div>
        <p className="mt-6 text-sm text-ondark">Free to attend · Joining link sent by email and WhatsApp · No spam</p>
      </div>
    </section>
  );
}
