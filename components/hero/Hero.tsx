"use client";

import { AvatarWaving } from "@/components/avatar/AvatarWaving";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-indigo-50/40 to-white
        pt-32 pb-24
      "
    >
      {/* Decorative radial glow */}
      <div
        className="
          pointer-events-none absolute -top-40 -right-40
          h-[500px] w-[500px] rounded-full
          bg-gradient-to-br from-indigo-200/40 to-violet-200/40
          blur-3xl opacity-60
        "
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column — Text + Speech Bubble */}
          <div className="space-y-6 fade-up">

            {/* Speech Bubble */}
            <div
              className="
                relative bg-white border border-indigo-200
                rounded-2xl shadow-md p-6 max-w-md
              "
            >
              <p className="text-indigo-600 font-semibold mb-1">Hey there! 👋</p>
              <p className="text-slate-700">
                I'm <strong>Dennis</strong> — a software engineer who builds things for the web,
                cloud, and the fun of it.
              </p>

              {/* Bubble Tail */}
              <div
                className="
                  absolute -bottom-3 left-10
                  w-0 h-0
                  border-l-8 border-r-8 border-t-8
                  border-l-transparent border-r-transparent border-t-white
                "
              />
              <div
                className="
                  absolute -bottom-[14px] left-[38px]
                  w-0 h-0
                  border-l-[10px] border-r-[10px] border-t-[10px]
                  border-l-transparent border-r-transparent border-t-indigo-200
                "
              />
            </div>

            {/* Tagline */}
            <h1
              className="
                text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight
              "
            >
              Building the future,
              <br />
              <span
                className="
                  bg-gradient-to-r from-indigo-500 to-violet-500
                  bg-clip-text text-transparent
                "
              >
                one commit at a time.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              Lead Software Engineer · AI Explorer · Adjunct Faculty · Mountain Biker  
              <br />
              Based in Peoria, AZ 🌵
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#projects"
                className="
                  px-6 py-3 rounded-xl text-white font-semibold text-sm
                  bg-gradient-to-r from-indigo-600 to-violet-600
                  shadow-md hover:shadow-lg transition
                "
              >
                View Projects
              </Link>

              <Link
                href="#contact"
                className="
                  px-6 py-3 rounded-xl text-sm font-semibold
                  border border-indigo-500 text-indigo-600
                  hover:bg-indigo-50 transition
                "
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Column — Avatar */}
          <div className="flex justify-center lg:justify-end fade-up">
            <div
              className="
                w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80
                rounded-full overflow-hidden bg-white border border-slate-200
                shadow-xl flex items-center justify-center
              "
            >
              <AvatarWaving size={260} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}