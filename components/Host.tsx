import Image from "next/image";
import { HOST } from "@/lib/content";

export default function Host() {
  return (
    <section id="host" className="bg-ink py-20 text-cream">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[minmax(0,620px)_1fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-[560px] pb-12 pl-8 pt-0 lg:max-w-none">
          <div aria-hidden className="absolute bottom-0 left-0 right-12 top-12 rounded-3xl border border-saffron/70" />
          <div className="relative ml-8 aspect-[520/700] max-w-[520px] overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/images/host.jpg" alt={HOST} fill priority sizes="520px" className="object-cover" style={{ objectPosition: "50% 20%" }} />
          </div>
          <div className="absolute bottom-0 right-4 aspect-[230/290] w-[40%] max-w-[230px] overflow-hidden rounded-2xl border-4 border-ink shadow-xl lg:right-12">
            <Image src="/images/host2.jpg" alt="" fill sizes="230px" className="object-cover" style={{ objectPosition: "50% 30%" }} />
          </div>
        </div>

        <div>
          <p className="eyebrow text-amber">Meet your host</p>
          <h2 className="h2-section mt-3">{HOST}</h2>
          <p className="mt-4 text-xl font-medium text-amber-soft">ISH certified sound healing trainer</p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {[
              ["15 yrs+", "Healing journey"],
              ["ISH", "Certified trainer"],
              ["Founder", "Star Yog Studio"],
            ].map(([a, b], i) => (
              <div key={a} className={i > 0 ? "border-l border-white/25 pl-8" : ""}>
                <dt className="font-serif text-[34px] leading-none text-saffron">{a}</dt>
                <dd className="mt-2 text-sm font-medium text-ondark">{b}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ondark">
            <p>
              Keertie is an ISH certified sound healing practitioner, a yoga practitioner and the founder of Star Yog Studio. Her journey in
              healing began 15 years ago. The day she discovered sound healing, something in her shifted deeply.
            </p>
            <p>
              She went on to work as a sound therapist and soon saw that the world needs more healers. Her vision is to reach people who feel
              stuck in a loop and are ready to grow through inner work, and that needs more sensitive, well-trained healers.
            </p>
          </div>
          <blockquote className="mt-8 border-l-[3px] border-saffron pl-5 font-serif text-[26px] italic leading-snug text-cream">
            Some people calm your nervous system just by being near you. Keertie trains these natural healers through her structured sound
            healing program.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
