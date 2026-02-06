export default function ExperienceCard() {
  return (
    <div className="relative border-l border-slate-800 pl-8 ml-4">
      {/* Indicador de posición */}
      <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-[10px] shadow-[0_0_10px_#3b82f6]"></div>

      <div className="mb-12">
        {/* Cabecera: Cargo y Fecha alineados a los extremos */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
            Apoyo en Desarrollo y Procesos Técnicos
          </h3>
          <span className="text-slate-500 font-mono text-xs tracking-[0.2em] uppercase shrink-0">
            Ripley Chile • 2025
          </span>
        </div>

        {/* Grid de 12 columnas para alineación exacta */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Descripción: 9 columnas (75%) */}
          <div className="md:col-span-9 space-y-6 text-slate-400 text-sm md:text-base leading-relaxed">
            <p>
              Lideré el estudio técnico de viabilidad para la integración de
              sistemas de mensajería externa, evaluando la compatibilidad de
              APIs y tiempos de respuesta para asegurar el cumplimiento de
              estándares corporativos.
            </p>
            <p>
              Responsable de documentar procesos técnicos RFC (Request for
              Comments) y analizar la obsolescencia tecnológica para optimizar
              la infraestructura de las células de Ecommerce.
            </p>
          </div>

          {/* Habilidades: 3 columnas (25%) alineadas al inicio del texto */}
          <div className="md:col-span-3 flex flex-col md:pl-6 border-l border-slate-800/50">
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4">
              Stack & Procesos
            </span>
            <ul className="space-y-3">
              {[
                "React.js",
                "Node.js",
                "Análisis de APIs",
                "Estándares RFC",
                "Células Ágiles",
              ].map((skill) => (
                <li
                  key={skill}
                  className={`text-[11px] font-medium border-b border-slate-900 pb-1 transition-colors ${
                    skill === "Node.js"
                      ? "text-emerald-500 border-emerald-900/30"
                      : skill === "React.js"
                        ? "text-blue-400"
                        : "text-slate-500"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
