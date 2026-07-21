const processes = [
  "Análisis de APIs",
  "Evaluación de costos",
  "Documentación técnica",
  "Metodologías ágiles",
];

export default function ExperienceCard() {
  return (
    <article className="relative ml-3 border-l border-slate-700 pl-7 md:ml-4 md:pl-8">
      <div
        className="absolute left-[-6.5px] top-[10px] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
        aria-hidden="true"
      />

      <div className="mb-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-3 md:flex-row md:items-baseline">
          <h3 className="text-xl font-bold uppercase tracking-wider text-white md:text-2xl">
            Practicante de Arquitectura de Software | Ripley
          </h3>
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-slate-300">
            Sept. 2025 – Dic. 2025
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="text-sm leading-relaxed text-slate-300 md:col-span-9 md:text-base">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                Analicé la factibilidad técnica y comercial de la integración
                de un servicio de mensajería de Entel con plataformas de Ripley.
              </li>
              <li>
                Evalué compatibilidad de APIs, costos y posibles impactos
                técnicos para apoyar la toma de decisiones.
              </li>
              <li>
                Documenté alternativas, procesos y criterios técnicos,
                colaborando con equipos multidisciplinarios bajo metodologías
                ágiles.
              </li>
            </ul>
          </div>

          <div className="flex flex-col border-l border-slate-700 pl-5 md:col-span-3 md:pl-6">
            <span className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-blue-300">
              Stack y procesos
            </span>
            <ul className="space-y-2.5">
              {processes.map((process) => (
                <li
                  key={process}
                  className="border-b border-slate-800 pb-1.5 text-xs font-medium text-slate-300"
                >
                  {process}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
