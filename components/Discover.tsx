import Image from "next/image";
import { DISCOVER } from "@/lib/content";

export default function Discover() {
  return (
    <section id="discover" className="bg-cream py-20">
      <div className="container-x">
        <p className="eyebrow text-rust">The webinar</p>
        <h2 className="h2-section mt-3 max-w-[1000px] text-ink">What you will discover in this webinar</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {DISCOVER.map((c) => (
            <article key={c.n} className="group">
              <div className="relative aspect-[413/350] overflow-hidden rounded-2xl">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(min-width:768px) 413px, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: c.pos }}
                />
              </div>
              <p className="mt-6 font-serif text-[22px] text-rust">{c.n}</p>
              <h3 className="mt-2 font-serif text-[30px] leading-tight text-ink">{c.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
