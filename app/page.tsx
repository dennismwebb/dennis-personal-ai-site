import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Life from "@/components/life/Life";
import Prompts from "@/components/prompts/Prompts";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Navbar */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Life />
      <Prompts />

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-slate-500 border-t border-slate-200 mt-24">
        <p>© {new Date().getFullYear()} Dennis Webb — Built with Next.js & Tailwind CSS</p>
      </footer>

    </main>
  );
}