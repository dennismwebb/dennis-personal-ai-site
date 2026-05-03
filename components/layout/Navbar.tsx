"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="
      fixed top-0 left-0 right-0 z-50 
      bg-white/80 dark:bg-slate-900/80 
      backdrop-blur-md 
      border-b border-slate-200 dark:border-slate-700
    ">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg text-slate-900 dark:text-white">
          Dennis Webb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300">
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#life">Life</Link>
          <Link href="/#prompts">Prompts</Link>

          <Link href="/chat" className="text-indigo-600 dark:text-indigo-400 font-semibold">
            Chat
          </Link>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 dark:text-slate-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="
          md:hidden 
          bg-white dark:bg-slate-900 
          border-t border-slate-200 dark:border-slate-700 
          px-6 py-4 space-y-4 
          text-slate-700 dark:text-slate-300
        ">
          <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/#skills" onClick={() => setOpen(false)}>Skills</Link>
          <Link href="/#projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/#experience" onClick={() => setOpen(false)}>Experience</Link>
          <Link href="/#life" onClick={() => setOpen(false)}>Life</Link>
          <Link href="/#prompts" onClick={() => setOpen(false)}>Prompts</Link>

          <Link
            href="/chat"
            className="text-indigo-600 dark:text-indigo-400 font-semibold block"
            onClick={() => setOpen(false)}
          >
            Chat
          </Link>

          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}