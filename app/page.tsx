"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ExperienceCard from "@/components/ExperienceCard";
import VideoCard from "@/components/VideoCard";
import { misProyectos } from "@/data/proyectos";

export default function Home() {
  const [copiado, setCopiado] = useState(false);

  const handleEmailClick = () => {
    const email = "javierhermosilla0@gmail.com";
    navigator.clipboard.writeText(email);
    setCopiado(true);
    window.location.href = `mailto:${email}`;
    setTimeout(() => setCopiado(false), 3000);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* HEADER CON INDICADOR AL LADO DEL NOMBRE */}
        <header className="mb-24 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 justify-center md:justify-start">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              Javier <span className="text-blue-500">Hermosilla</span>
            </h1>

            {/* Badge de Disponibilidad al lado del nombre */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit mx-auto md:mx-0 h-fit mt-2 md:mt-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest whitespace-nowrap">
                Disponible
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed mb-8">
            Ingeniero en Informática y{" "}
            <span className="text-blue-400 font-medium">
              Desarrollador Software
            </span>
            .
            <br />
            Especializado en crear aplicaciones robustas y escalables con{" "}
            <span className="text-blue-500 font-bold">React.js</span> y{" "}
            <span className="text-emerald-500 font-bold">Node.js</span>.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {[
              { name: "React", color: "text-blue-400" },
              { name: "Next.js", color: "text-white" },
              { name: "Node.js", color: "text-emerald-500" },
              { name: "PostgreSQL", color: "text-blue-300" },
              { name: "Tailwind", color: "text-cyan-400" },
              { name: "TypeScript", color: "text-blue-600" },
            ].map((tech) => (
              <span
                key={tech.name}
                className={`px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-full text-xs font-mono ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </header>

        {/* EXPERIENCIA PROFESIONAL */}
        <section className="mb-20">
          <ExperienceCard />
        </section>

        {/* SECCIÓN DE SOFT SKILLS (Debajo de Experiencia) */}
        <section className="mb-32">
          <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 border-y border-slate-900/50 justify-center md:justify-start">
            {[
              "Arquitectura de Software",
              "Liderazgo Técnico",
              "Resolución de Problemas",
              "Metodologías Ágiles",
              "Clean Code",
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]"
              >
                • {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Proyectos Seleccionados
            </h2>
            <div className="h-[1px] flex-grow bg-slate-800"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {misProyectos.map((proyecto) => (
              <VideoCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-40 pb-16 border-t border-slate-900 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-6">
                Formación Académica
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">
                    Ingeniería en Informática
                  </h3>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Egresado
                  </span>
                </div>
                <p className="text-slate-400 font-medium">
                  Duoc UC • Generación 2025
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end w-full">
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.3em] mb-6">
                ¿Hablamos?
              </h2>
              <div className="grid grid-cols-2 gap-3 w-full max-w-[320px] md:max-w-[280px]">
                <a
                  href="https://www.linkedin.com/in/javier-hermosilla-625757164/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 border border-slate-800 text-white rounded-xl hover:border-blue-500 transition-all font-medium text-sm"
                >
                  <Linkedin size={18} className="text-blue-500" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/JavierHermosilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 border border-slate-800 text-white rounded-xl hover:border-blue-500 transition-all font-medium text-sm"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <button
                  onClick={handleEmailClick}
                  className="col-span-2 flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-bold text-sm shadow-lg shadow-blue-900/20 active:scale-95"
                >
                  <Mail size={18} />
                  {copiado ? "¡Email Copiado!" : "Enviar Correo"}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.4em]">
              © 2026 Javier Hermosilla • Santiago, Chile
            </p>
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.4em]">
              Next.js + Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
