import { FaTools, FaClipboardList, FaCode, FaGraduationCap } from "react-icons/fa";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { jobs, studies, skills, projects } from "./data";

const icons = [FaTools, FaClipboardList, FaCode];
const navLinks = [
  ["#servicios", "Qué hago"],
  ["#experiencia", "Experiencia"],
  ["#formacion", "Formación"],
  ["#proyectos", "Proyectos"],
];
const skillText = [
  "Diagnóstico y reparación de PCs, notebooks e impresoras, presencial y remoto.",
  "Experiencia como secretario y en la gestión diaria de un negocio.",
  "Formación en desarrollo web y, actualmente, en ciencia de datos e IA.",
];

function Heading({ id, title, sub }) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-2 text-[var(--muted)]">{sub}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[rgba(10,17,32,0.75)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2.5 font-bold">
            <img src="/images/logo-badge.png" alt="" className="h-9 w-9" />
            <span className="hidden sm:inline">David Monte</span>
          </a>
          <ul className="hidden items-center gap-1 text-[0.95rem] md:flex">
            {navLinks.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="rounded-full px-3 py-1.5 text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-white">{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="rounded-full border border-[var(--sky)] px-4 py-1.5 text-sm font-bold text-[var(--sky)] transition hover:bg-[var(--sky)] hover:text-[var(--bg)]">
            Contacto
          </a>
        </nav>
      </header>

      <main>
        <Hero />

        <div className="light">
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Heading id="servicios" title="Qué hago" sub="Tres áreas en las que puedo aportar desde el primer día." />
          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((s, i) => {
              const Icon = icons[i];
              return (
                <div key={s.area} className="card p-7 transition">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--sky)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{s.area}</h3>
                  <p className="mt-2 text-[var(--muted)]">{skillText[i]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.items.map((it) => <span key={it} className="chip">{it}</span>)}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Heading id="experiencia" title="Experiencia" />
          <ol className="relative ml-2 border-l border-[var(--line)]">
            {jobs.map((j) => (
              <li key={j.company} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full bg-[var(--sky)] ring-4 ring-[#f4f7fb]" aria-hidden="true" />
                <div className="card p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{j.role}</h3>
                      <p className="text-[var(--sky)]">{j.company}</p>
                    </div>
                    <span className="chip text-[var(--muted)]">{j.to ? `${j.from} – ${j.to}` : j.from}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-[var(--muted)]">
                    {j.tasks.map((t) => (
                      <li key={t} className="relative pl-5 before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--violet)]">{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Heading id="formacion" title="Formación" />
          <div className="grid gap-4 sm:grid-cols-2">
            {studies.map((s) => {
              const current = s.date === "En curso";
              return (
                <div key={s.title} className={`card flex gap-4 p-5 ${current ? "border-[var(--sky)]" : ""}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--sky)]">
                    <FaGraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className={`text-sm font-semibold ${current ? "text-[var(--sky)]" : "text-[var(--muted)]"}`}>{s.date}</p>
                    <h3 className="font-bold leading-snug">{s.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{s.institution}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Heading id="proyectos" title="Proyectos web" />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <div key={p.title} className="card p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <span className={`chip ${p.status === "En desarrollo" ? "text-[var(--sky)]" : "text-[var(--muted)]"}`}>{p.status}</span>
                </div>
                <p className="mt-3 text-[var(--muted)]">{p.description}</p>
                <p className="mt-4 text-sm font-semibold">{p.stack}</p>
                {(p.previewUrl || p.gitUrl) && (
                  <div className="mt-5 flex gap-4">
                    {p.previewUrl && <a href={p.previewUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--sky)]">Ver sitio</a>}
                    {p.gitUrl && <a href={p.gitUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--sky)]">Ver código</a>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        </div>

        <Contact />
      </main>

      <footer className="border-t border-[var(--line)] py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} David Monte
      </footer>
    </>
  );
}
