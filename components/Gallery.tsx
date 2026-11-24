import Image from "next/image";

const tile = "relative overflow-hidden rounded-2xl";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow text-rust">Inside the studio</p>
          <h2 className="h2-section mx-auto mt-3 max-w-[1060px] text-ink">Moments from our sound healing sessions</h2>
        </div>
        <div className="mt-12 grid gap-4 md:h-[640px] md:grid-cols-[1fr_1fr_1.07fr]">
          <div className="grid gap-4 md:grid-rows-2">
            <div className={`${tile} aspect-[3/2] md:aspect-auto`}>
              <Image src="/images/gal-a.jpg" alt="Our community after a session" fill sizes="(min-width:768px) 420px, 100vw" className="object-cover" />
            </div>
            <div className={`${tile} aspect-[3/2] md:aspect-auto`}>
              <Image src="/images/gal-b.jpg" alt="Singing bowl circle" fill sizes="(min-width:768px) 420px, 100vw" className="object-cover" />
            </div>
          </div>
          <div className={`${tile} aspect-[3/4] md:aspect-auto`}>
            <Image src="/images/gal-c.jpg" alt="Participants with singing bowls" fill sizes="(min-width:768px) 420px, 100vw" className="object-cover" style={{ objectPosition: "50% 30%" }} />
          </div>
          <div className={`${tile} aspect-[3/4] md:aspect-auto`}>
            <Image src="/images/gal-d.jpg" alt="Playing a hanging chime" fill sizes="(min-width:768px) 450px, 100vw" className="object-cover" style={{ objectPosition: "50% 30%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
