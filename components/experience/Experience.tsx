"use client";

import { AvatarResume } from "@/components/avatar/AvatarResume";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left Column — Header + Avatar */}
          <div className="space-y-6 fade-up">
            <p className="text-indigo-600 font-semibold uppercase tracking-wider text-xs">
              Career
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Experience
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Over two decades of building, leading, and teaching across the full stack.
            </p>

            <div
              className="
                hidden lg:flex
                w-48 h-48 rounded-2xl overflow-hidden bg-white border border-slate-200
                shadow-md items-center justify-center
              "
            >
              <AvatarResume size={150} />
            </div>
          </div>

          {/* Right Column — Timeline */}
          <div className="lg:col-span-2 fade-up">
            <div className="relative border-l border-slate-300 pl-8 space-y-10">

              <TimelineItem
                role="Lead Software Engineer"
                meta="Current Role · Enterprise Web & Cloud"
                text="Architecting scalable platforms, mentoring teams, driving AI adoption across the SDLC."
              />

              <TimelineItem
                role="Adjunct Faculty"
                meta="Ongoing · Computer Information Systems"
                text="Teaching web development, eLearning curriculum design, and hands-on workshops."
              />

              <TimelineItem
                role="Senior Developer"
                meta="Previous Roles · Full-Stack Development"
                text="Angular, C#, SQL, cloud migrations, CI/CD implementation, platform modernization."
              />

              <TimelineItem
                role="B.S. Computer Information Systems"
                meta="Arizona State University · 1997"
                text=""
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/* Timeline Item Component                         */
/* ─────────────────────────────────────────────── */

function TimelineItem({
  role,
  meta,
  text,
}: {
  role: string;
  meta: string;
  text: string;
}) {
  return (
    <div className="relative pl-6">
      {/* Dot */}
      <div
        className="
          absolute -left-[11px] top-1
          w-4 h-4 rounded-full border-2 border-white
          bg-indigo-600 shadow
        "
      />

      <p className="font-bold text-slate-900 text-lg">{role}</p>
      <p className="text-slate-500 text-sm mb-2">{meta}</p>

      {text && (
        <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
      )}
    </div>
  );
}