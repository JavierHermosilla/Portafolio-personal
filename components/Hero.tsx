import { ArrowDown, Download, Mail } from "lucide-react";

const technologies = [
  { name: "React", color: "text-blue-300" },
  { name: "Next.js", color: "text-white" },
  { name: "TypeScript", color: "text-blue-300" },
  { name: "Node.js", color: "text-emerald-400" },
  { name: "Supabase", color: "text-emerald-300" },
  { name: "PostgreSQL", color: "text-cyan-300" },
];

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative mb-20 scroll-mt-24 pt-10 text-center md:pt-16 md:text-left"
    >
      <div className="absolute -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none left-1/2 top-0 md:h-[600px] md:w-[600px] md:-translate-x-20 md:blur-[120px] md:left-0" />
      <div className="absolute -z-20 inset-0 h-[150%] w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="animate-fade-in-up">
        <div className="mb-5 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
          <h1 className="text-5xl font-black text-white md:text-7xl">
            Javier <span className="text-blue-500">Hermosilla</span>
          </h1>
          <div className="inline-flex min-h-8 w-fit items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible
          </div>
        </div>
      </div>

      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "160ms" }}
      >
        <p className="mb-3 text-xl font-bold text-blue-300 md:text-2xl">
          Desarrollador de Software Junior | Full Stack
        </p>
        <p className="mb-7 max-w-3xl text-base font-light leading-relaxed text-slate-300 md:text-xl">
          Egresado de Ingeniería en Informática. Desarrollo aplicaciones web y
          APIs con React, Next.js, TypeScript, Node.js, Supabase y PostgreSQL.
        </p>
      </div>

      <div
        className="animate-fade-in-up"
        style={{ animationDelay: "280ms" }}
      >
        <div className="mb-7 flex flex-wrap justify-center gap-3 md:justify-start">
          {technologies.map((technology) => (
            <span
              key={technology.name}
              className={`rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 font-mono text-xs ${technology.color}`}
            >
              {technology.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
          <a
            href="#proyectos"
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500 ${focusStyles}`}
          >
            Ver proyectos
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a
            href="/CV-Javier-Hermosilla.pdf"
            download
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-blue-500 bg-blue-500/10 px-5 py-3 text-sm font-bold text-blue-200 transition-colors hover:bg-blue-500/20 hover:text-white ${focusStyles}`}
          >
            <Download size={18} aria-hidden="true" />
            Descargar CV
          </a>
          <a
            href="mailto:javierhermosilla0@gmail.com"
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-blue-400 hover:text-blue-300 ${focusStyles}`}
          >
            <Mail size={18} aria-hidden="true" />
            Contactarme
          </a>
        </div>
      </div>
    </header>
  );
}
