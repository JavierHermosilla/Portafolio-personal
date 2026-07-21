import ExperienceCard from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import VideoCard from "@/components/VideoCard";
import { misProyectos } from "@/data/proyectos";

export default function Home() {
  return (
    <main
      id="contenido"
      className="min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-blue-500/30"
    >
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-24">
        <Hero />

        <section
          id="proyectos"
          className="mb-24 scroll-mt-24"
          aria-labelledby="projects-title"
        >
          <div className="mb-10 flex items-center gap-4">
            <h2
              id="projects-title"
              className="text-3xl font-bold text-white"
            >
              Proyectos seleccionados
            </h2>
            <div className="h-px flex-1 bg-slate-800" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {misProyectos.map((proyecto) => (
              <VideoCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </section>

        <section
          id="experiencia"
          className="mb-24 scroll-mt-24"
          aria-labelledby="experience-title"
        >
          <div className="mb-10 flex items-center gap-4">
            <h2
              id="experience-title"
              className="text-3xl font-bold text-white"
            >
              Experiencia
            </h2>
            <div className="h-px flex-1 bg-slate-800" aria-hidden="true" />
          </div>
          <ExperienceCard />
        </section>

        <Skills />
        <Footer />
      </div>
    </main>
  );
}
