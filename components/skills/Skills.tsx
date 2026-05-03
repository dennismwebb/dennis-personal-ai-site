"use client";

import { AvatarLaptop } from "@/components/avatar/AvatarLaptop";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Row */}
        <div className="flex items-center justify-between mb-12">
          <div className="fade-up">
            <p className="text-indigo-600 font-semibold uppercase tracking-wider text-xs">
              Technical Toolkit
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              What I Work With
            </h2>
          </div>

          {/* Avatar (hidden on small screens) */}
          <div className="hidden md:flex fade-up">
            <div
              className="
                w-32 h-32 rounded-2xl overflow-hidden bg-white border border-slate-200
                shadow-md flex items-center justify-center
              "
            >
              <AvatarLaptop size={120} />
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <SkillCard
            icon="bi bi-code-slash"
            title="Frontend"
            text="Angular · TypeScript · Bootstrap · HTML/CSS · RxJS"
            delay="stagger-1"
          />

          <SkillCard
            icon="bi bi-server"
            title="Backend"
            text="C# · .NET · Python · SQL Server · REST APIs"
            delay="stagger-2"
          />

          <SkillCard
            icon="bi bi-cloud"
            title="Cloud & DevOps"
            text="Azure · AWS · Docker · Kubernetes · Terraform · CI/CD"
            delay="stagger-3"
          />

          <SkillCard
            icon="bi bi-robot"
            title="AI & Agents"
            text="LangChain · CrewAI · FastAPI · Prompt Engineering"
            delay="stagger-4"
          />

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/* Skill Card Component                            */
/* ─────────────────────────────────────────────── */

function SkillCard({
  icon,
  title,
  text,
  delay,
}: {
  icon: string;
  title: string;
  text: string;
  delay?: string;
}) {
  return (
    <div
      className={`
        fade-up ${delay ?? ""}
        bg-white border border-slate-200 rounded-2xl p-6 shadow-sm
        hover:shadow-md hover:-translate-y-1 transition
      `}
    >
      <div
        className="
          w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600
          flex items-center justify-center text-xl mb-4
        "
      >
        <i className={icon}></i>
      </div>

      <h5 className="font-bold text-slate-900 mb-2">{title}</h5>

      <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}