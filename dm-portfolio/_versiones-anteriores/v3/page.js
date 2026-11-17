import Header from "./Header";
import { jobs, studies, skills, projects } from "../data";

// Cada sección: título centrado con una línea fina arriba; el texto queda alineado a la izquierda para leer cómodo.
function Section({ title, children }) {
  return (
    <section className="border-t border-[var(--v3-rule)] py-14">
      <h2 className="serif mb-9 text-center text-3xl font-semibold text-[var(--v3-blue)]">{title}</h2>
      {children}
    </section>
  );
}

const muted = "text-[var(--v3-muted)]";

export default function PageV3() {
  return (
    <div className="mx-auto max-w-[760px] px-5 text-[1.0625rem] leading-relaxed">
      <Header />

      <main>
        <Section title="Perfil">
          <p className="serif mx-auto max-w-[36rem] text-center text-xl leading-relaxed">
            Más de 15 años reparando equipos, instalando sistemas y atendiendo a
            particulares y empresas. Llevo presupuestos, stock, caja y
            documentación, y fui secretario durante 3 años. Hoy estudio Ciencia
            de Datos e Inteligencia Artificial.
          </p>
          <div className="mt-10 grid gap-8 text-center sm:grid-cols-3">
            {skills.map((s) => (
              <div key={s.area}>
                <h3 className="font-semibold text-[var(--v3-blue)]">{s.area}</h3>
                <ul className={`mt-2 space-y-0.5 ${muted}`}>
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Experiencia">
          <ol className="space-y-10">
            {jobs.map((j) => (
              <li key={j.company} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-8">
                <p className={`${muted} tabular-nums sm:pt-0.5 sm:text-right`}>
                  {j.to ? `${j.from} – ${j.to}` : j.from}
                </p>
                <div>
                  <h3 className="serif text-xl font-semibold text-[var(--v3-blue)]">{j.role}</h3>
                  <p className={`italic ${muted}`}>{j.company}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-[var(--v3-muted)]">
                    {j.tasks.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Formación">
          <ul className="space-y-5">
            {studies.map((s) => (
              <li key={s.title} className="grid gap-0.5 sm:grid-cols-[130px_1fr] sm:gap-8">
                <p className={`tabular-nums sm:text-right ${s.date === "En curso" ? "font-semibold text-[var(--v3-blue)]" : muted}`}>
                  {s.date}
                </p>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className={`italic ${muted}`}>{s.institution}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Proyectos web">
          <ul className="space-y-8">
            {projects.map((p) => (
              <li key={p.title} className="grid gap-0.5 sm:grid-cols-[130px_1fr] sm:gap-8">
                <p className={`${muted} sm:text-right`}>{p.status}</p>
                <div>
                  <h3 className="serif text-xl font-semibold text-[var(--v3-blue)]">{p.title}</h3>
                  <p>{p.description}</p>
                  <p className={muted}>{p.stack}</p>
                  {(p.previewUrl || p.gitUrl) && (
                    <p className="mt-1 flex gap-5">
                      {p.previewUrl && <a href={p.previewUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--v3-blue)] underline underline-offset-4">Ver sitio</a>}
                      {p.gitUrl && <a href={p.gitUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--v3-blue)] underline underline-offset-4">Ver código</a>}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className={`border-t border-[var(--v3-rule)] py-8 text-center text-sm ${muted}`}>
        © {new Date().getFullYear()} David Monte
      </footer>
    </div>
  );
}
