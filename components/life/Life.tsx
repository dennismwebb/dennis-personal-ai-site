"use client";

import { AvatarCycling } from "@/components/avatar/AvatarCycling";
import { AvatarCoffee } from "@/components/avatar/AvatarCoffee";
import { AvatarEnergetic } from "@/components/avatar/AvatarEnergetic";
import { AvatarArmsCrossed } from "@/components/avatar/AvatarArmsCrossed";

export default function Life() {
  return (
    <section
      id="life"
      className="py-24 bg-white border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <p className="text-indigo-600 font-semibold uppercase tracking-wider text-xs">
            Beyond the Code
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            When I'm Not at the Keyboard
          </h2>

          <p className="text-slate-600 mt-2">
            Life is more than pull requests and deployments.
          </p>
        </div>

        {/* Life Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <LifeCard
            avatar={<AvatarCycling size={130} />}
            title="Mountain Biking"
            text="Group rides with the Arizona Single Speeders through desert trails."
            delay="stagger-1"
          />

          <LifeCard
            avatar={<AvatarCoffee size={130} />}
            title="Coffee Culture"
            text="Fueling great code one cup at a time — always up for a coffee chat."
            delay="stagger-2"
          />

          <LifeCard
            avatar={<AvatarEnergetic size={130} />}
            title="Team Energy"
            text="Bringing positivity and momentum to every team and project I join."
            delay="stagger-3"
          />

          <LifeCard
            avatar={<AvatarArmsCrossed size={130} />}
            title="Linux Tinkering"
            text="Customizing desktops, automating workflows, and breaking things for fun."
            delay="stagger-4"
          />

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/* Life Card Component                             */
/* ─────────────────────────────────────────────── */

function LifeCard({
  avatar,
  title,
  text,
  delay,
}: {
  avatar: React.ReactNode;
  title: string;
  text: string;
  delay?: string;
}) {
  return (
    <div
      className={`
        fade-up ${delay ?? ""}
        bg-white border border-slate-200 rounded-2xl p-6 shadow-sm
        hover:shadow-lg hover:-translate-y-1 transition
        text-center flex flex-col items-center
      `}
    >
      <div
        className="
          w-32 h-32 rounded-2xl overflow-hidden bg-white border border-slate-200
          shadow flex items-center justify-center mb-4
        "
      >
        {avatar}
      </div>

      <h6 className="font-bold text-slate-900 mb-1">{title}</h6>

      <p className="text-slate-600 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}