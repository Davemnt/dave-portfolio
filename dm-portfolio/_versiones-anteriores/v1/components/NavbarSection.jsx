const links = [
  ["#experiencia", "Experiencia"],
  ["#formacion", "Formación"],
  ["#proyectos", "Proyectos"],
  ["#contacto", "Contacto"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-x-8 gap-y-1 px-4 py-3 sm:px-6">
        <a href="#inicio" className="semiwide text-lg font-bold">David Monte</a>
        <ul className="-mx-2 flex overflow-x-auto text-[0.95rem]">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="block whitespace-nowrap rounded px-2 py-1.5 text-slate transition-colors hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
