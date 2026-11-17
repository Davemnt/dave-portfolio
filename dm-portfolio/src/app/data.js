// Datos del portfolio en un solo lugar (los usa la versión 2).

export const jobs = [
  {
    company: "OnlyComp",
    role: "Técnico de Soporte IT",
    from: "2009",
    to: "Hoy",
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
    from: "3 años",
    to: null,
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
    from: "2007",
    to: "2009",
    tasks: [
      "Reparación y mantenimiento de impresoras láser e inkjet.",
      "Soporte técnico on site.",
      "Confección de presupuestos, manejo de caja y ventas.",
      "Atención personalizada y telefónica al cliente.",
    ],
  },
];

export const studies = [
  { title: "Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial", institution: "ISTEA", date: "En curso" },
  { title: "Experto Universitario en Seguridad de la Información", institution: "Centro de e-Learning UTN FRBA", date: "2024" },
  { title: "Diplomatura en Programación Web Full Stack con React JS", institution: "Centro de e-Learning UTN FRBA", date: "2022 – 2023" },
  { title: "Fundamentos de la Programación", institution: "Centro de e-Learning UTN FRBA", date: "2021" },
  { title: "Redes Informáticas 1", institution: "CETIA", date: "2021" },
  { title: "Armado y Reparación de PC", institution: "CETIA", date: "2014" },
  { title: "Secundario en Gestión y Administración de las Organizaciones", institution: "Instituto Bernardo Houssay", date: "2003" },
];

export const skills = [
  { area: "Soporte técnico", items: ["Hardware y software", "Windows y drivers", "Redes", "Seguridad informática", "Impresoras"] },
  { area: "Administración", items: ["Presupuestos", "Stock y caja", "Actas y correspondencia", "Agenda", "Excel, Word y PowerPoint"] },
  { area: "Desarrollo y datos", items: ["HTML y CSS", "JavaScript y React", "Node.js", "Python", "Git"] },
];

export const projects = [
  {
    title: "Aurea",
    status: "Terminado",
    description: "Landing page para una productora de eventos masivos, pensada para convertir visitantes en clientes potenciales.",
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

// Contacto protegido contra bots: invertido y en partes, se arma recién al hacer clic.
const decode = (parts) => parts.map((p) => p.split("").reverse().join("")).join("");
export const getEmail = () => decode(["divad.etnom", "@", "kooltuo", ".moc"]);
export const getWhatsAppUrl = () =>
  `https://wa.me/${decode(["945", "1165", "4773"])}?text=${encodeURIComponent("Hola David, vi tu portfolio y quería contactarte.")}`;
export const linkedinUrl = "https://www.linkedin.com/in/monte-david";
export const githubUrl = null;
