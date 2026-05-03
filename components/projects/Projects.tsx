"use client";

import { AvatarProject } from "@/components/avatar/AvatarProject";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="fade-up">
            <p className="text-indigo-600 font-semibold uppercase tracking-wider text-xs">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Projects & Experiments
            </h2>
          </div>

          {/* Avatar */}
          <div className="hidden md:flex fade-up">
            <div
              className="
                w-28 h-28 rounded-2xl overflow-hidden bg-white border border-slate-200
                shadow-md flex items-center justify-center
              "
            >
              <AvatarProject size={110} />
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <ProjectCard
            icon="bi bi-diagram-3"
            title="AI Agent Platform"
            text="Multi-agent orchestration framework built with Python, LangChain, CrewAI, and FastAPI. Modular repo with Docker-ready architecture."
            delay="stagger-1"
          />

          <ProjectCard
            icon="bi bi-window-stack"
            title="Enterprise Web Platform"
            text="Full-stack Angular + C# platform with microservices, real-time data, and CI/CD pipelines on Azure."
            delay="stagger-2"
          />

          <ProjectCard
            icon="bi bi-house-gear"
            title="Home Lab & Network"
            text="Docker/k3s home server, mesh network with IoT isolation, media stack, and automated security hardening."
            delay="stagger-3"
          />

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/* Project Card Component                          */
/* ─────────────────────────────────────────────── */

function ProjectCard({
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
        hover:shadow-lg hover:-translate-y-1 transition
        flex flex-col
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

      <p className="text-slate-600 text-sm leading-relaxed flex-1">{text}</p>

      <Link
        href="#"
        className="
          mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700
          transition-colors
        "
      >
        View Project →
      </Link>
    </div>
  );
}