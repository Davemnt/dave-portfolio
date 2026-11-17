import Section from "./Section";

const jobs = [
  {
    company: "OnlyComp",
    role: "Técnico de Soporte IT",
    date: "2009 – Actualidad",
    tasks: [
      "Diagnóstico, reparación y mantenimiento preventivo y correctivo de PCs de escritorio y notebooks.",
      "Armado y actualización de equipos según las necesidades de cada cliente.",
      "Instalación y configuración de Windows, drivers y aplicaciones de oficina.",
      "Soporte presencial y remoto a particulares y empresas: diagnóstico, resolución de incidencias y asesoramiento.",
      "Elaboración de presupuestos técnicos y seguimiento integral de cada reparación.",
      "Control de stock de repuestos y verificación de calidad antes de cada entrega.",
    ],
  },
  {
    company: "Organización sin fines de lucro",
    role: "Secretario y Asistente Administrativo (voluntario)",
    date: "3 años",
    tasks: [
      "Gestión y actualización de registros, documentación y archivos.",
      "Redacción de actas, informes y correspondencia.",
      "Coordinación de agenda, reuniones y actividades.",
      "Atención y orientación a personas, presencial y telefónica.",
    ],
  },
  {
    company: "Silnet",
    role: "Soporte Técnico y Mantenimiento de Impresoras",
    date: "2007 – 2009",
    tasks: [
      "Reparación y mantenimiento de impresoras láser e inkjet.",
      "Soporte técnico on site.",
      "Confección de presupuestos, manejo de caja y ventas.",
      "Atención personalizada y telefónica al cliente.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="relative border-l-2 border-rule">
        {jobs.map((job) => (
          <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-ink bg-paper" aria-hidden="true" />
            <p className="text-[0.95rem] font-medium tabular-nums text-slate">{job.date}</p>
            <h3 className="semiwide mt-1 text-xl font-bold leading-snug">{job.role}</h3>
            <p className="font-medium">{job.company}</p>
            <ul className="mt-3 max-w-[44rem] list-disc space-y-1 pl-5 text-slate marker:text-rule">
              {job.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
