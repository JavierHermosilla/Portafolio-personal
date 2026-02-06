"use client";
import { useState } from "react";
import { Proyecto } from "@/data/proyectos";

export default function VideoCard({ proyecto }: { proyecto: Proyecto }) {
  // Estado para controlar la apertura y cierre del modal de detalles
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Stack tecnológico definido en tu perfil profesional [cite: 19, 23, 25]
  const stack = ["React.js", "Node.js", "PostgreSQL", "JWT", "Zod"];

  return (
    <>
      {/* Contenedor de la Tarjeta con efectos de hover y borde dinámico */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col h-full hover:border-blue-500/50 transition-all group">
        {/* Header: Iframe de YouTube para demostración del proyecto */}
        <div className="aspect-video overflow-hidden">
          <iframe
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            src={`https://www.youtube.com/embed/${proyecto.youtubeId}`}
            title={proyecto.titulo}
            allowFullScreen
          />
        </div>

        {/* Cuerpo informativo de la tarjeta */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {proyecto.titulo}
          </h3>

          {/* Resumen ejecutivo del proyecto con límite de líneas (line-clamp) */}
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            Sistema desarrollado bajo Arquitectura por Capas con enfoque en
            seguridad y escalabilidad.
          </p>

          {/* Renderizado de badges técnicos */}
          <div className="flex flex-wrap gap-2 mb-6">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botón de acción para disparar el modal informativo */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-blue-900/20"
          >
            VER DETALLES TÉCNICOS
          </button>
        </div>
      </div>

      {/* Renderizado condicional del Modal de detalles */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
            <div className="p-8">
              {/* Encabezado del Modal con botón de cierre lateral */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {proyecto.titulo}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white text-2xl transition-colors"
                >
                  &times;
                </button>
              </div>

              {/* Área de contenido: whitespace-pre-line respeta el formato del string original */}
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 whitespace-pre-line leading-relaxed text-sm md:text-base">
                  {proyecto.descripcion}
                </p>
              </div>

              {/* Pie del Modal con botón de cierre principal */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium text-sm"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
