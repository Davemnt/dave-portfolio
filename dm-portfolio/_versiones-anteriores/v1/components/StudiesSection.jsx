import Section from "./Section";

// Ordenados de lo más reciente a lo más antiguo.
const studies = [
  {
    title: "Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial",
    institution: "ISTEA",
    date: "En curso",
    description: "Formación en análisis de datos, programación en Python, estadística y fundamentos de inteligencia artificial."
  },
  {
    title: "Experto Universitario en Seguridad de la Información",
    institution: "Centro de e-Learning UTN FRBA",
    date: "2024",
    description: "Desarrollo del plan estratégico de seguridad requerido por una organización y conocimientos sobre los elementos tecnológicos, redes y servidores de datos que generan impacto en ella."
  },
  {
    title: "Diplomatura en Programación Web Full Stack con React JS",
    institution: "Centro de e-Learning UTN FRBA",
    date: "2022 – 2023",
    description: "Desarrollo con HTML y CSS, JavaScript (asincronismo, funciones arrow y anónimas), herramientas para la puesta en marcha y prueba de proyectos full stack, React JS y Node JS."
  },
  {
    title: "Fundamentos de la Programación",
    institution: "Centro de e-Learning UTN FRBA",
    date: "2021",
    description: "Lógica computacional y pensamiento resolutivo como base para aprender lenguajes de programación."
  },
  {
    title: "Redes Informáticas 1",
    institution: "CETIA - Centro de Enseñanza Tecnológica e Informática de Argentina",
    date: "2021",
    description: "Configuración de direcciones IP manuales y automáticas (DHCP). Prácticas de armado de fichas y rosetas."
  },
  {
    title: "Armado y Reparación de PC",
    institution: "CETIA - Centro de Enseñanza Tecnológica e Informática de Argentina",
    date: "2014",
    description: "Armado, diagnóstico y reparación de computadoras."
  },
];

export default function StudiesSection() {
  return (
    <Section id="formacion" title="Formación">
      <ul className="border-t border-rule">
        {studies.map((s) => {
          const current = s.date === "En curso";
          return (
            <li key={s.title} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
              <p className={`text-[0.95rem] font-medium tabular-nums ${current ? "text-signal" : "text-slate"}`}>{s.date}</p>
              <div>
                <h3 className="font-bold leading-snug">{s.title}</h3>
                <p className="text-[0.95rem]">{s.institution}</p>
                <p className="mt-2 max-w-[44rem] text-[0.95rem] text-slate">{s.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
