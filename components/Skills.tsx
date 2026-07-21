const skills = [
  "APIs REST",
  "Arquitectura por capas",
  "Validación de datos",
  "Git y GitHub",
  "Metodologías ágiles",
];

export default function Skills() {
  return (
    <section id="skills" className="mb-24 scroll-mt-24" aria-labelledby="skills-title">
      <div className="mb-8 flex items-center gap-4">
        <h2 id="skills-title" className="text-3xl font-bold text-white">
          Habilidades
        </h2>
        <div className="h-px flex-1 bg-slate-800" aria-hidden="true" />
      </div>
      <ul className="flex flex-wrap justify-center gap-3 border-y border-slate-800 py-6 md:justify-start">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
