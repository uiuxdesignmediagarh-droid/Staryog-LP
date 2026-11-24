"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Loader2 } from "lucide-react";
import { REG_URL, ROLE_OPTIONS } from "@/lib/content";

type Variant = "card" | "inline";
type Errors = Partial<Record<"name" | "email" | "phone", string>>;

function validate(v: { name: string; email: string; phone: string }): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email";
  if (v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit WhatsApp number";
  return e;
}

export default function LeadForm({ variant = "card", source }: { variant?: Variant; source: string }) {
  const [values, setValues] = useState({ name: "", email: "", phone: "", role: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const inline = variant === "inline";

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k as keyof Errors]) setErrors((s) => ({ ...s, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setTimeout(() => window.open(REG_URL, "_blank", "noopener,noreferrer"), 900);
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 text-center ${
          inline ? "rounded-full bg-cream px-8 py-6" : "min-h-[380px]"
        }`}
        role="status"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-saffron/20 text-rust">
          <Check size={28} strokeWidth={2.5} />
        </span>
        <p className="font-serif text-2xl text-ink">You are in, {values.name.split(" ")[0]}!</p>
        <p className="text-base text-body">
          Opening the registration page to confirm your free spot.{" "}
          <a className="font-semibold text-rust underline" href={REG_URL} target="_blank" rel="noopener noreferrer">
            Click here if it does not open
          </a>
          .
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full text-base text-ink placeholder:text-[#8a819e] outline-none transition focus:ring-4 focus:ring-saffron/30";
  const cardInput = `${inputBase} h-[52px] rounded-[14px] border-[1.5px] bg-white px-4 ${""}`;
  const pillInput = `${inputBase} h-14 rounded-full bg-lavender px-6`;
  const cls = (err?: string) =>
    (inline ? pillInput : cardInput) + (err ? " border-red-500 " : !inline ? " border-line focus:border-saffron" : "");

  const Err = ({ m }: { m?: string }) =>
    m ? (
      <span className={`block text-sm font-medium text-red-600 ${inline ? "pl-6 pt-1" : "pt-1"}`}>{m}</span>
    ) : null;

  const Role = (
    <div className="relative">
      <select
        aria-label="I am a"
        value={values.role}
        onChange={set("role")}
        className={`${inline ? pillInput : cardInput} appearance-none pr-12 ${values.role ? "" : "text-[#8a819e]"} ${
          !inline ? "border-line focus:border-saffron" : ""
        }`}
      >
        <option value="">I am a…</option>
        {ROLE_OPTIONS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <ChevronDown size={18} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-body" />
    </div>
  );

  const Submit = (
    <button type="submit" disabled={status === "loading"} className={`btn-primary shrink-0 disabled:opacity-70 ${inline ? "" : "w-full"}`}>
      <span>Reserve my free spot</span>
      <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-peach">
        {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} strokeWidth={2.5} />}
      </span>
    </button>
  );

  if (inline) {
    return (
      <form onSubmit={onSubmit} noValidate className="w-full">
        <div className="flex flex-col gap-3 rounded-[32px] bg-cream p-4 shadow-[0_20px_48px_rgb(0_0_0/0.4)] lg:flex-row lg:items-start lg:rounded-full">
          <div className="flex-1">
            <input aria-label="Full name" placeholder="Full name" autoComplete="name" value={values.name} onChange={set("name")} className={cls(errors.name)} />
            <Err m={errors.name} />
          </div>
          <div className="flex-1">
            <input aria-label="Email address" type="email" placeholder="Email address" autoComplete="email" value={values.email} onChange={set("email")} className={cls(errors.email)} />
            <Err m={errors.email} />
          </div>
          <div className="flex-1">
            <input aria-label="WhatsApp number" type="tel" placeholder="WhatsApp number" autoComplete="tel" value={values.phone} onChange={set("phone")} className={cls(errors.phone)} />
            <Err m={errors.phone} />
          </div>
          <div className="flex-1">{Role}</div>
          {Submit}
        </div>
        {status === "error" && <p className="mt-3 text-center text-sm text-amber-soft">Something went wrong. Please try again.</p>}
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      {[
        { k: "name" as const, label: "Full name", ph: "Your name", type: "text", ac: "name" },
        { k: "email" as const, label: "Email address", ph: "you@example.com", type: "email", ac: "email" },
        { k: "phone" as const, label: "WhatsApp number", ph: "+91 00000 00000", type: "tel", ac: "tel" },
      ].map((f) => (
        <label key={f.k} className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">{f.label}</span>
          <input type={f.type} autoComplete={f.ac} placeholder={f.ph} value={values[f.k]} onChange={set(f.k)} className={cls(errors[f.k])} />
          <Err m={errors[f.k]} />
        </label>
      ))}
      {Submit}
      {status === "error" && <p className="text-center text-sm font-medium text-red-600">Something went wrong. Please try again.</p>}
      <p className="text-center text-sm text-body">Free to attend. No spam, no payment needed.</p>
    </form>
  );
}
