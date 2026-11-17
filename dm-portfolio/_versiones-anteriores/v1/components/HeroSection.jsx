"use client";
import { useEffect, useRef, useState } from "react";

const ficha = [
  ["Estado", "Disponible para trabajar", true],
  ["Puestos", "Soporte IT y asistente administrativo"],
  ["Experiencia", "En soporte técnico desde 2007"],
  ["Estudiando", "Ciencia de Datos e IA en ISTEA"],
  ["Zona", "Aldo Bonzi, Buenos Aires"],
];

export default function HeroSection() {
  // Si no existe /images/foto.jpg, se muestran las iniciales.
  const [hasPhoto, setHasPhoto] = useState(true);
  const photoRef = useRef(null);
  useEffect(() => {
    // Si la imagen falló antes de que React cargara, onError no se dispara: lo revisamos acá.
    const img = photoRef.current;
    if (img && img.complete && img.naturalWidth === 0) setHasPhoto(false);
  }, []);

  return (
    <section id="inicio" className="mx-auto grid max-w-[1080px] items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="wide text-[clamp(3rem,9vw,6rem)] font-extrabold leading-[0.95] tracking-tight">
          David<br />Monte
        </h1>
        <p className="semiwide mt-6 text-2xl font-semibold leading-snug">
          Técnico de soporte IT y asistente administrativo
        </p>
        <p className="mt-4 max-w-[34rem] text-slate">
          Más de 15 años reparando equipos, instalando sistemas y atendiendo a
          particulares y empresas. También llevo presupuestos, stock, caja y
          documentación.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contacto" className="rounded-md bg-ink px-5 py-3 font-semibold text-white transition-colors hover:bg-ink-deep">
            Escribirme
          </a>
          <a href="/cv/CV-David-Monte.pdf" download className="rounded-md border border-ink px-5 py-3 font-semibold transition-colors hover:bg-white">
            Descargar CV
          </a>
        </div>
      </div>

      {/* Ficha técnica, como una orden de servicio */}
      <aside className="rounded-lg border border-rule bg-white" aria-label="Ficha">
        <div className="flex items-center gap-4 border-b border-rule p-5">
          {hasPhoto ? (
            <img ref={photoRef} src="/images/foto.jpg" alt="Foto de David Monte" onError={() => setHasPhoto(false)}
                 className="h-20 w-20 rounded-md object-cover" />
          ) : (
            <div className="wide flex h-20 w-20 items-center justify-center rounded-md bg-ink text-2xl font-extrabold text-white" aria-hidden="true">
              DM
            </div>
          )}
          <div>
            <p className="font-semibold">Ficha técnica</p>
            <p className="text-sm text-slate">Actualizada en 2026</p>
          </div>
        </div>
        <dl className="px-5 py-2 text-[0.95rem]">
          {ficha.map(([k, v, live]) => (
            <div key={k} className="grid grid-cols-[100px_1fr] gap-3 border-b border-dashed border-rule py-3 last:border-0">
              <dt className="text-slate">{k}</dt>
              <dd className={live ? "flex items-center gap-2 font-semibold text-signal" : "font-medium"}>
                {live && <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />}
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
