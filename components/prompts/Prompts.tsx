"use client";

import { AvatarWaving } from "@/components/avatar/AvatarWaving";
import { AvatarLaptop } from "@/components/avatar/AvatarLaptop";
import { AvatarThinking } from "@/components/avatar/AvatarThinking";
import { AvatarPointing } from "@/components/avatar/AvatarPointing";
import { AvatarProject } from "@/components/avatar/AvatarProject";
import { AvatarCoffee } from "@/components/avatar/AvatarCoffee";
import { AvatarCycling } from "@/components/avatar/AvatarCycling";
import { AvatarEnergetic } from "@/components/avatar/AvatarEnergetic";
import { AvatarResume } from "@/components/avatar/AvatarResume";
import { AvatarArmsCrossed } from "@/components/avatar/AvatarArmsCrossed";

import Link from "next/link";

export default function Prompts() {
  return (
    <section
      id="prompts"
      className="py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <p className="text-indigo-600 font-semibold uppercase tracking-wider text-xs">
            Interactive
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Things You Can Ask Me About
          </h2>

          <p className="text-slate-600 mt-2">
            Click a topic to learn more — or just reach out.
          </p>
        </div>

        {/* Prompt Chips */}
        <div className="flex flex-wrap justify-center gap-4 fade-up">

          <PromptChip
            avatar={<AvatarWaving size={32} />}
            label="Introduce myself"
          />

          <PromptChip
            avatar={<AvatarLaptop size={32} />}
            label="Building web platforms"
          />

          <PromptChip
            avatar={<AvatarThinking size={32} />}
            label="AI agent architecture"
          />

          <PromptChip
            avatar={<AvatarPointing size={32} />}
            label="Cloud & DevOps strategy"
          />

          <PromptChip
            avatar={<AvatarProject size={32} />}
            label="Side projects & experiments"
          />

          <PromptChip
            avatar={<AvatarCoffee size={32} />}
            label="Let's grab coffee ☕"
          />

          <PromptChip
            avatar={<AvatarCycling size={32} />}
            label="Group mountain bike rides"
          />

          <PromptChip
            avatar={<AvatarEnergetic size={32} />}
            label="Team leadership & morale"
          />

          <PromptChip
            avatar={<AvatarResume size={32} />}
            label="Career & teaching"
          />

          <PromptChip
            avatar={<AvatarArmsCrossed size={32} />}
            label="Linux desktop customization"
          />

        </div>

        {/* Avatar Parade */}
        <div className="mt-16 fade-up">
          <div className="flex flex-wrap justify-center items-end gap-8">

            <ParadeItem label="Wave" avatar={<AvatarWaving size={70} />} />
            <ParadeItem label="Think" avatar={<AvatarThinking size={70} />} />
            <ParadeItem label="Point" avatar={<AvatarPointing size={70} />} />
            <ParadeItem label="Code" avatar={<AvatarLaptop size={70} />} />
            <ParadeItem label="Project" avatar={<AvatarProject size={70} />} />
            <ParadeItem label="Coffee" avatar={<AvatarCoffee size={70} />} />
            <ParadeItem label="Cycle" avatar={<AvatarCycling size={70} />} />
            <ParadeItem label="Energy" avatar={<AvatarEnergetic size={70} />} />
            <ParadeItem label="Resume" avatar={<AvatarResume size={70} />} />
            <ParadeItem label="Linux" avatar={<AvatarArmsCrossed size={70} />} />

          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/* Prompt Chip Component                           */
/* ─────────────────────────────────────────────── */

function PromptChip({
  avatar,
  label,
}: {
  avatar: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href="#contact"
      className="
        flex items-center gap-3
        bg-white border border-slate-200
        px-5 py-3 rounded-full shadow-sm
        hover:border-indigo-300 hover:bg-indigo-50
        transition text-sm font-medium text-slate-700
      "
    >
      <div className="w-8 h-8 flex items-center justify-center">{avatar}</div>
      {label}
    </Link>
  );
}

/* ─────────────────────────────────────────────── */
/* Parade Item Component                           */
/* ─────────────────────────────────────────────── */

function ParadeItem({
  avatar,
  label,
}: {
  avatar: React.ReactNode;
  label: string;
}) {
  return (
    <div className="text-center hover:-translate-y-1 transition">
      <div
        className="
          w-20 h-20 rounded-2xl bg-white border border-slate-200
          shadow flex items-center justify-center mx-auto
        "
      >
        {avatar}
      </div>
      <p className="text-xs text-slate-500 font-semibold mt-2 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}