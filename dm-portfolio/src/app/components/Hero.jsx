"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true);
  const photoRef = useRef(null);

  useEffect(() => {
    // Si la foto (public/images/home1.png) falló antes de que React cargara, onError no se dispara: lo revisamos acá.
    const img = photoRef.current;
    if (img && img.complete && img.naturalWidth === 0) setHasPhoto(false);
  }, []);

  return (
    <section id="inicio" className="glow">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-sm text-[var(--muted)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Disponible para trabajar
          </p>

          <h1 className="rise rise-2 mt-6 text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[0.98] tracking-tight">
            <span className="grad-text">David Monte</span>
          </h1>
          <p className="rise rise-2 mt-5 text-xl font-semibold text-white sm:text-2xl">
            Técnico de Soporte IT y Asistente Administrativo
          </p>
          <p className="rise rise-3 mt-4 max-w-xl text-lg text-[var(--muted)]">
            Reparo equipos, instalo sistemas y resuelvo problemas para particulares y
            empresas desde 2007. También llevo presupuestos, stock, caja y documentación.
          </p>

          <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
            <a href="#contacto"
               className="rounded-full bg-[var(--sky)] px-6 py-3 font-bold text-[var(--bg)] shadow-[0_0_30px_rgba(76,194,255,0.35)] transition hover:brightness-110">
              Contactarme
            </a>
            <a href="/cv/CV-David-Monte.pdf" download
               className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 font-semibold transition hover:border-[var(--sky)]">
              Descargar CV
            </a>
          </div>
        </div>

        {/* Foto con datos destacados flotando */}
        <div className="rise rise-2 relative mx-auto w-full max-w-[250px] sm:max-w-[290px]">
          <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-[var(--sky)] to-[var(--violet)] opacity-30 blur-2xl" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-[var(--line)] bg-[radial-gradient(circle_at_50%_30%,#8cc4ee_0%,#3c6ea6_45%,#16223a_100%)]">
            {hasPhoto ? (
              <img ref={photoRef} src="/images/home1.png" alt="Foto de David Monte"
                   onError={() => setHasPhoto(false)} className="h-full w-full object-cover object-bottom" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-7xl font-extrabold text-white/90" aria-hidden="true">
                DM
              </div>
            )}
          </div>
          <div className="card absolute -left-4 bottom-4 px-3 py-2 shadow-2xl sm:-left-14 sm:bottom-6 sm:px-4 sm:py-3">
            <p className="text-xl font-extrabold text-[var(--sky)] sm:text-2xl">+15 años</p>
            <p className="text-xs text-[var(--muted)] sm:text-sm">en soporte técnico</p>
          </div>
          <div className="card absolute -right-4 -top-6 px-3 py-2 shadow-2xl sm:-right-14 sm:-top-5 sm:px-4 sm:py-3">
            <p className="text-xl font-extrabold text-[var(--violet)] sm:text-2xl">3 años</p>
            <p className="text-xs text-[var(--muted)] sm:text-sm">como secretario</p>
          </div>
        </div>
      </div>
    </section>
  );
}
