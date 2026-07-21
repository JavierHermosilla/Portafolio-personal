import { Github, Linkedin, Mail } from "lucide-react";

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="scroll-mt-24 border-t border-slate-800 pb-12 pt-14"
    >
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        <section aria-labelledby="education-title">
          <h2
            id="education-title"
            className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-blue-400"
          >
            Formación académica
          </h2>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-white">
                Ingeniería en Informática
              </h3>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                Egresado
              </span>
            </div>
            <p className="font-medium text-slate-300">
              Duoc UC · Generación 2026
            </p>
          </div>
        </section>

        <section
          aria-labelledby="contact-title"
          className="flex w-full flex-col md:items-end"
        >
          <h2
            id="contact-title"
            className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-blue-400"
          >
            Contacto
          </h2>
          <div className="grid w-full max-w-sm grid-cols-2 gap-3">
            <a
              href="https://www.linkedin.com/in/javier-hermosilla-cabezas"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-blue-400 ${focusStyles}`}
            >
              <Linkedin size={18} className="text-blue-400" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://github.com/JavierHermosilla"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-blue-400 ${focusStyles}`}
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="mailto:javierhermosilla0@gmail.com"
              className={`col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500 ${focusStyles}`}
            >
              <Mail size={18} aria-hidden="true" />
              Enviar correo
            </a>
          </div>
        </section>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-7 md:flex-row">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
          © 2026 Javier Hermosilla · Santiago, Chile
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
          Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
