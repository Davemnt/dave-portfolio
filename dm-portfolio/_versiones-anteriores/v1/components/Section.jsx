// Estructura común: título a la izquierda y contenido a la derecha (en celular, uno debajo del otro).
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-rule py-16 md:py-24">
      <div className="mx-auto grid max-w-[1080px] gap-8 px-4 sm:px-6 md:grid-cols-[200px_1fr] md:gap-12">
        <h2 className="semiwide text-2xl font-bold leading-tight">{title}</h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
