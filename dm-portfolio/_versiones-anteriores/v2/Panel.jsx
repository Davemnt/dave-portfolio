"use client";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { getEmail, getWhatsAppUrl, linkedinUrl, githubUrl } from "../data";

// Panel izquierdo tipo credencial: foto, nombre, estado y contacto siempre a mano.
export default function Panel() {
  const [hasPhoto, setHasPhoto] = useState(true);
  const [email, setEmail] = useState(null);
  const [copied, setCopied] = useState(false);
  const photoRef = useRef(null);

  useEffect(() => {
    // Si la foto falló antes de que React cargara, onError no se dispara: lo revisamos acá.
    const img = photoRef.current;
    if (img && img.complete && img.naturalWidth === 0) setHasPhoto(false);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Si el navegador bloquea el portapapeles, el mail igual queda visible.
    }
  };

  const openWhatsApp = () => window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");

  const btn = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-semibold transition-colors";

  return (
    <aside className="bg-[var(--petrol)] text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:overflow-y-auto">
      <div className="px-6 pb-10 pt-8 sm:px-10 lg:pt-12">
        <div className="aspect-square w-36 overflow-hidden rounded-2xl bg-[var(--petrol-deep)] sm:w-44">
          {hasPhoto ? (
            <img ref={photoRef} src="/images/foto.jpg" alt="Foto de David Monte"
                 onError={() => setHasPhoto(false)} className="h-full w-full object-cover" />
          ) : (
            <div className="display flex h-full w-full items-center justify-center text-5xl font-bold text-[var(--amber)]" aria-hidden="true">
              DM
            </div>
          )}
        </div>

        <h1 className="display mt-8 text-[clamp(2.75rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
          David Monte
        </h1>
        <p className="mt-3 text-lg text-white/85">Técnico de soporte IT y asistente administrativo</p>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-3 py-1 text-sm font-semibold text-[var(--petrol-deep)]">
          <span className="h-2 w-2 rounded-full bg-[var(--petrol-deep)]" aria-hidden="true" />
          Disponible para trabajar
        </p>
        <p className="mt-3 text-white/70">Aldo Bonzi, Buenos Aires</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={openWhatsApp} className={`${btn} bg-white text-[var(--petrol)] hover:bg-[var(--amber)]`}>
            <FaWhatsapp aria-hidden="true" /> WhatsApp
          </button>
          {!email && (
            <button onClick={() => setEmail(getEmail())} className={`${btn} border border-white/50 hover:bg-white/10`}>
              <FaEnvelope aria-hidden="true" /> Ver email
            </button>
          )}
        </div>
        {email && (
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href={`mailto:${email}`} className="break-all font-medium underline decoration-[var(--amber)] decoration-2 underline-offset-4">
              {email}
            </a>
            <button onClick={copy} className="rounded-full border border-white/50 px-3 py-1 text-sm font-semibold hover:bg-white/10">
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 px-6 py-5 text-white/80 sm:px-10">
        <a href="/cv/CV-David-Monte.pdf" download className="inline-flex items-center gap-2 hover:text-white">
          <FaDownload aria-hidden="true" /> Descargar CV
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
          <FaLinkedin aria-hidden="true" /> LinkedIn
        </a>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
        )}
      </div>
    </aside>
  );
}
