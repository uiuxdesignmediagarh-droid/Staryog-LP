import { Activity, Heart, Home, Hash, Moon, PersonStanding, Sparkles, UserPlus, type LucideIcon } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { AUDIENCE } from "@/lib/content";

const ICONS: LucideIcon[] = [PersonStanding, Activity, Moon, Home, Hash, Heart, Sparkles, UserPlus];

export default function WhoCanJoin() {
  return (
    <section id="who" className="bg-[linear-gradient(135deg,#2e1a5c_0%,#1c1238_60%,#140b2a_100%)] py-20 text-cream">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[430px_1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-amber">Who can join</p>
          <h2 className="h2-section mt-4">
            This program is for you if you are.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ondark">
            Sound healing is open to every sincere seeker. Whatever your profession or background, if you feel the call to heal and to help
            others heal, you belong here.
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {AUDIENCE.map((a, i) => {
            const Icon = ICONS[i];
            const last = i === AUDIENCE.length - 1;
            return (
              <li
                key={a}
                className={`group flex min-h-[112px] items-center gap-5 rounded-3xl p-6 transition duration-300 hover:-translate-y-1 ${
                  last
                    ? "bg-gradient-to-br from-peach to-orange text-ink shadow-[0_12px_28px_rgb(245_138_46/0.35)] hover:shadow-[0_18px_44px_rgb(245_138_46/0.6)]"
                    : "border border-white/20 bg-white/[0.07] hover:border-amber/80 hover:bg-amber/15 hover:shadow-[0_12px_32px_rgb(245_184_77/0.25)]"
                }`}
              >
                <span
                  className={`grid h-16 w-16 shrink-0 place-items-center rounded-full transition ${
                    last
                      ? "bg-ink text-peach"
                      : "border border-amber/45 bg-amber/15 text-amber group-hover:bg-amber group-hover:text-ink"
                  }`}
                >
                  <Icon size={28} strokeWidth={1.6} />
                </span>
                <span className={`font-serif leading-snug ${last ? "text-2xl" : "text-[28px]"}`}>{a}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
