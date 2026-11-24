import { CtaButton } from "./CtaButton";

export default function CtaBand({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="bg-gradient-to-r from-peach to-orange">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-ink">{title}</h2>
          <p className="mt-2 text-lg font-semibold text-[#3a2352]">{sub}</p>
        </div>
        <CtaButton className="shrink-0 !bg-none !bg-ink !text-cream !shadow-none [&>span:last-child]:bg-amber [&>span:last-child]:!text-ink" />
      </div>
    </div>
  );
}
