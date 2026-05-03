"use client";

import { AvatarThinking } from "@/components/avatar/AvatarThinking";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Avatar */}
          <div className="flex justify-center md:justify-start fade-up">
            <div
              className="
                w-56 h-56 sm:w-64 sm:h-64
                rounded-2xl overflow-hidden bg-white border border-slate-200
                shadow-lg flex items-center justify-center
              "
            >
              <AvatarThinking size={200} />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 fade-up">
            <p className="text-indigo-600 font-semibold uppercase tracking-wider text-xs">
              About Me
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Engineer. Educator. Explorer.
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              I'm a Lead Software Engineer with deep roots in Angular, C#, SQL, and cloud
              platforms. By day I architect scalable web applications and mentor teams.
              By night I'm building AI agents, customizing my Linux desktop, and planning
              the next group mountain bike ride with the Arizona Single Speeders.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              I also teach as adjunct faculty — because sharing knowledge is how we all
              level up.
            </p>

            {/* Hobby Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Badge icon="🚵‍♂️" label="Mountain Biking" />
              <Badge icon="🤖" label="AI Agents" />
              <Badge icon="🐧" label="Linux" />
              <Badge icon="🎓" label="Teaching" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/* Hobby Badge Component                           */
/* ─────────────────────────────────────────────── */

function Badge({ icon, label }: { icon: string; label: string }) {
  return (
    <span
      className="
        inline-flex items-center gap-2
        bg-white border border-slate-200
        px-4 py-2 rounded-xl text-sm font-medium
        text-slate-700 shadow-sm
      "
    >
      <span className="text-lg">{icon}</span>
      {label}
    </span>
  );
}