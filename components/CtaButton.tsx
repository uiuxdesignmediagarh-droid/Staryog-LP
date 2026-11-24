import { ArrowRight } from "lucide-react";
import { REG_URL, CTA_LABEL } from "@/lib/content";

export function ArrowDot({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
        light ? "bg-peach text-ink" : "bg-ink text-peach"
      }`}
    >
      <ArrowRight size={18} strokeWidth={2.5} />
    </span>
  );
}

export function CtaButton({
  label = CTA_LABEL,
  className = "",
  href = REG_URL,
}: {
  label?: string;
  className?: string;
  href?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn-primary ${className}`}>
      <span>{label}</span>
      <ArrowDot />
    </a>
  );
}
