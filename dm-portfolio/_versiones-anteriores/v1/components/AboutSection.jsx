import Section from "./Section";

const areas = [
  {
    title: "Soporte técnico",
    text: "Diagnóstico y reparación de PCs, notebooks e impresoras. Atención presencial y remota.",
    items: ["Hardware y software", "Windows y drivers", "Redes", "Seguridad informática", "Impresoras láser e inkjet"],
  },
  {
    title: "Administración",
    text: "Experiencia como secretario y en la gestión diaria de un negocio de servicio técnico.",
    items: ["Presupuestos", "Stock y caja", "Actas y correspondencia", "Agenda y reuniones", "Excel, Word y PowerPoint"],
  },
  {
    title: "Desarrollo y datos",
    text: "Formación en programación web y, actualmente, en ciencia de datos e inteligencia artificial.",
    items: ["HTML y CSS", "JavaScript y React", "Node.js", "Python", "Git y GitHub"],
  },
];

export default function AboutSection() {
  return (
    <Section id="que-hago" title="Qué hago">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {areas.map((a) => (
          <div key={a.title}>
            <h3 className="semiwide text-lg font-bold">{a.title}</h3>
            <p className="mt-2 text-slate">{a.text}</p>
            <ul className="mt-4 border-t border-rule">
              {a.items.map((i) => (
                <li key={i} className="border-b border-rule py-2 text-[0.95rem]">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
