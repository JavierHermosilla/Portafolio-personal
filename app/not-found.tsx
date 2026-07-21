import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6 text-slate-200">
      <div className="max-w-lg text-center">
        <p className="mb-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
          Error 404
        </p>
        <h1 className="mb-4 text-4xl font-black text-white">
          Esta página no existe
        </h1>
        <p className="mb-8 leading-relaxed text-slate-300">
          La dirección puede haber cambiado o el enlace ya no está disponible.
        </p>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
        >
          Volver al portafolio
        </Link>
      </div>
    </main>
  );
}
