"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ExternalLink, Github, Info, Play, X } from "lucide-react";
import type { Proyecto, ProyectoLink } from "@/data/proyectos";

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

function ProjectLinkIcon({ type }: { type: ProyectoLink["type"] }) {
  if (type === "repository") return <Github size={17} aria-hidden="true" />;
  if (type === "video") return <Play size={17} aria-hidden="true" />;
  return <ExternalLink size={17} aria-hidden="true" />;
}

export default function VideoCard({ proyecto }: { proyecto: Proyecto }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const titleId = `project-title-${proyecto.id}`;
  const dialogTitleId = `project-dialog-title-${proyecto.id}`;
  const dialogDescriptionId = `project-dialog-description-${proyecto.id}`;

  useEffect(() => {
    if (!isModalOpen) return;

    const main = document.querySelector("main");
    const triggerElement = triggerRef.current;
    const wasInert = main instanceof HTMLElement ? main.inert : false;
    const previousOverflow = document.body.style.overflow;

    if (main instanceof HTMLElement) main.inert = true;
    document.body.style.overflow = "hidden";

    const animationFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsModalOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (main instanceof HTMLElement) main.inert = wasInert;
      triggerElement?.focus();
    };
  }, [isModalOpen]);

  const modal = isModalOpen
    ? createPortal(
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsModalOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            aria-describedby={dialogDescriptionId}
            tabIndex={-1}
            className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-lg border border-slate-700 bg-slate-900 shadow-2xl"
          >
            <div className="p-5 sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                    {proyecto.category}
                  </p>
                  <h2
                    id={dialogTitleId}
                    className="text-2xl font-bold text-white"
                  >
                    {proyecto.title}
                  </h2>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label={`Cerrar detalles de ${proyecto.title}`}
                  className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 hover:text-white ${focusStyles}`}
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              <div
                id={dialogDescriptionId}
                className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base"
              >
                {proyecto.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>

              <div className="mt-7 border-t border-slate-700 pt-6">
                <h3 className="mb-3 text-sm font-bold text-white">
                  Tecnologías
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {proyecto.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded border border-blue-400/30 bg-blue-500/10 px-2.5 py-1.5 text-xs font-bold text-blue-200"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex justify-end border-t border-slate-700 pt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-600 ${focusStyles}`}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <article
        aria-labelledby={titleId}
        className={`group flex h-full flex-col overflow-hidden rounded-lg border bg-slate-900 transition-colors ${
          proyecto.featured
            ? "border-blue-500/70 hover:border-blue-400"
            : "border-slate-700 hover:border-blue-400/70"
        }`}
      >
        {proyecto.youtubeId ? (
          <div className="aspect-video overflow-hidden border-b border-slate-700 bg-[#071024]">
            {isVideoLoaded ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${proyecto.youtubeId}?autoplay=1`}
                title={`Video de ${proyecto.title}`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsVideoLoaded(true)}
                aria-label={`Reproducir video de ${proyecto.title}`}
                className={`flex h-full w-full flex-col items-center justify-center gap-3 text-slate-200 transition-colors hover:bg-slate-800 hover:text-white ${focusStyles}`}
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-950/40">
                  <Play size={25} fill="currentColor" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold">Reproducir presentación</span>
              </button>
            )}
          </div>
        ) : proyecto.image ? (
          <div className="relative flex aspect-video items-center justify-center border-b border-blue-500/30 bg-[#071024] p-8">
            <span className="absolute left-5 top-5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              SaaS en producción
            </span>
            <Image
              src={proyecto.image.src}
              alt={proyecto.image.alt}
              width={proyecto.image.width}
              height={proyecto.image.height}
              sizes="(max-width: 1023px) 128px, 144px"
              className="h-32 w-auto object-contain sm:h-36"
            />
          </div>
        ) : (
          <div className="aspect-video border-b border-slate-700 bg-[#071024]" />
        )}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
            {proyecto.category}
          </p>
          <h3 id={titleId} className="mb-3 text-2xl font-bold text-white">
            {proyecto.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-300">
            {proyecto.summary}
          </p>

          <ul className="mb-6 flex flex-wrap gap-2" aria-label="Tecnologías">
            {proyecto.stack.map((technology) => (
              <li
                key={technology}
                className="rounded border border-blue-400/30 bg-blue-500/10 px-2.5 py-1.5 text-xs font-bold text-blue-200"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {proyecto.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500 ${focusStyles}`}
              >
                <ProjectLinkIcon type={link.type} />
                {link.label}
              </a>
            ))}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsModalOpen(true)}
              className={`inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-sm font-bold text-white transition-colors hover:border-blue-400 hover:text-blue-200 ${focusStyles}`}
            >
              <Info size={17} aria-hidden="true" />
              Detalles técnicos
            </button>
          </div>
        </div>
      </article>
      {modal}
    </>
  );
}
