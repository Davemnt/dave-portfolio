import Section from "./Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Para agregar un proyecto, sumá un objeto a esta lista.
// gitUrl y previewUrl: poné el link real o dejalo en null para que no aparezca el botón.
const projects = [
  {
    title: "Aurea",
    status: "Terminado",
    description:
      "Landing page para una productora de eventos masivos, pensada para convertir visitantes en clientes potenciales.",
    stack: "HTML, CSS, JavaScript y Bootstrap",
    gitUrl: null,
    previewUrl: null,
  },
  {
    title: "Rimorca",
    status: "En desarrollo",
    description: "Tienda online de venta de colchones.",
    stack: "Sitio web e-commerce",
    gitUrl: null,
    previewUrl: null,
  },
];

const linkClass =
  "inline-flex items-center gap-2 rounded-md border border-ink px-3 py-1.5 text-[0.95rem] font-semibold transition-colors hover:bg-white";

export default function PortfolioSection() {
  return (
    <Section id="proyectos" title="Proyectos web">
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.title} className="flex flex-col rounded-lg border border-rule bg-white p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="semiwide text-xl font-bold">{p.title}</h3>
              <span className={`text-sm font-medium ${p.status === "En desarrollo" ? "text-signal" : "text-slate"}`}>
                {p.status}
              </span>
            </div>
            <p className="mt-2">{p.description}</p>
            <p className="mt-1 text-[0.95rem] text-slate">{p.stack}</p>
            {(p.gitUrl || p.previewUrl) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {p.previewUrl && (
                  <a href={p.previewUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" /> Ver sitio
                  </a>
                )}
                {p.gitUrl && (
                  <a href={p.gitUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <FaGithub className="h-4 w-4" aria-hidden="true" /> Ver código
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
