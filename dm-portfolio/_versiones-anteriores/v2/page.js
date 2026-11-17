import Panel from "./Panel";
import { jobs, studies, skills, projects } from "../data";

function Block({ title, children }) {
  return (
    <section className="border-t border-[var(--v2-rule)] py-12 first:border-0 first:pt-0">
      <h2 className="display mb-8 text-3xl font-bold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

const amberLink = "font-semibold underline decoration-[var(--amber)] decoration-2 underline-offset-4";

export default function PageV2() {
  return (
    <div className="lg:grid lg:grid-cols-[minmax(360px,38%)_1fr]">
      <Panel />

      <main className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="max-w-[46rem]">
          <Block title="Perfil">
            <p className="text-xl leading-relaxed">
              Más de 15 años reparando equipos, instalando sistemas y atendiendo a
              particulares y empresas. Además llevo presupuestos, stock, caja y
              documentación, y fui secretario durante 3 años. Hoy estudio Ciencia
              de Datos e Inteligencia Artificial.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {skills.map((s) => (
                <div key={s.area}>
                  <h3 className="font-semibold">{s.area}</h3>
                  <ul className="mt-2 space-y-1 text-[var(--v2-muted)]">
                    {s.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Experiencia">
            <ol className="space-y-12">
              {jobs.map((j) => (
                <li key={j.company} className="grid gap-2 sm:grid-cols-[110px_1fr] sm:gap-8">
                  <p className="display text-2xl font-bold leading-none tabular-nums">
                    {j.from}
                    {j.to && (
                      <span className="mt-1 block text-base font-semibold text-[var(--v2-muted)]">
                        a {j.to.toLowerCase()}
                      </span>
                    )}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug">{j.role}</h3>
                    <p className="text-[var(--v2-muted)]">{j.company}</p>
                    <ul className="mt-3 space-y-1.5">
                      {j.tasks.map((t) => (
                        <li key={t} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--amber)]">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Formación">
            <ul className="divide-y divide-[var(--v2-rule)]">
              {studies.map((s) => (
                <li key={s.title} className="grid gap-1 py-4 sm:grid-cols-[110px_1fr] sm:gap-8">
                  <p className={`font-semibold tabular-nums ${s.date === "En curso" ? "text-[var(--petrol)]" : "text-[var(--v2-muted)]"}`}>
                    {s.date}
                  </p>
                  <div>
                    <h3 className="font-semibold leading-snug">{s.title}</h3>
                    <p className="text-[var(--v2-muted)]">{s.institution}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Proyectos web">
            <ul className="space-y-8">
              {projects.map((p) => (
                <li key={p.title}>
                  <h3 className="text-xl font-semibold">
                    {p.title}
                    <span className="ml-3 align-middle text-sm font-medium text-[var(--v2-muted)]">{p.status}</span>
                  </h3>
                  <p className="mt-1">{p.description}</p>
                  <p className="text-[var(--v2-muted)]">{p.stack}</p>
                  {(p.previewUrl || p.gitUrl) && (
                    <div className="mt-2 flex gap-5">
                      {p.previewUrl && <a href={p.previewUrl} target="_blank" rel="noopener noreferrer" className={amberLink}>Ver sitio</a>}
                      {p.gitUrl && <a href={p.gitUrl} target="_blank" rel="noopener noreferrer" className={amberLink}>Ver código</a>}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Block>

          <footer className="border-t border-[var(--v2-rule)] pt-6 text-sm text-[var(--v2-muted)]">
            © {new Date().getFullYear()} David Monte
          </footer>
        </div>
      </main>
    </div>
  );
}
