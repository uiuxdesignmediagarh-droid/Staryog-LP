import { INFO_BAND } from "@/lib/content";

export default function InfoBand() {
  return (
    <div className="bg-saffron">
      <ul className="container-x flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-6 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
        {INFO_BAND.map((t, i) => (
          <li key={t} className="flex items-center gap-6">
            {i > 0 && <span aria-hidden className="hidden h-1.5 w-1.5 rounded-full bg-ink sm:block" />}
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
