"use client";
import { useEffect, useRef, useState } from "react";
import { getEmail, getWhatsAppUrl, linkedinUrl, githubUrl } from "../data";

// Encabezado centrado: foto, nombre, puesto y contacto (protegido contra bots).
export default function Header() {
  const [hasPhoto, setHasPhoto] = useState(true);
  const [email, setEmail] = useState(null);
  const photoRef = useRef(null);

  useEffect(() => {
    // Si la foto falló antes de que React cargara, onError no se dispara: lo revisamos acá.
    const img = photoRef.current;
    if (img && img.complete && img.naturalWidth === 0) setHasPhoto(false);
  }, []);

  const link = "text-[var(--v3-blue)] underline decoration-[var(--v3-rule)] decoration-1 underline-offset-[5px] transition-colors hover:decoration-[var(--v3-blue)]";

  return (
    <header className="px-4 pb-14 pt-16 text-center sm:pt-20">
      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border border-[var(--v3-rule)] bg-[var(--v3-blue)]">
        {hasPhoto ? (
          <img ref={photoRef} src="/images/foto.jpg" alt="Foto de David Monte"
               onError={() => setHasPhoto(false)} className="h-full w-full object-cover" />
        ) : (
          <div className="serif flex h-full w-full items-center justify-center text-4xl text-white" aria-hidden="true">
            DM
          </div>
        )}
      </div>

      <h1 className="serif mt-7 text-5xl font-semibold tracking-tight text-[var(--v3-blue)] sm:text-6xl">
        David Monte
      </h1>
      <p className="mt-3 text-xl text-[var(--v3-muted)]">
        Técnico de Soporte IT y Asistente Administrativo
      </p>
      <p className="mt-1 text-[var(--v3-muted)]">Aldo Bonzi, Buenos Aires. Disponible para trabajar.</p>

      <nav aria-label="Contacto" className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-lg">
        <button onClick={() => window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer")} className={link}>
          WhatsApp
        </button>
        {email ? (
          <a href={`mailto:${email}`} className={link}>{email}</a>
        ) : (
          <button onClick={() => setEmail(getEmail())} className={link}>Ver email</button>
        )}
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
        {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>}
        <a href="/cv/CV-David-Monte.pdf" download className={link}>Descargar CV</a>
      </nav>
    </header>
  );
}
