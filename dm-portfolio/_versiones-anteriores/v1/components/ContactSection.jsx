"use client";

import React, { useState } from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';

// Protección contra bots ("grabbers"):
// El mail y el celular NO aparecen escritos en el HTML ni como texto corrido en el código.
// Se guardan invertidos y en partes, y recién se arman cuando una persona hace clic.
const decode = (parts) => parts.map((p) => p.split('').reverse().join('')).join('');
const EMAIL_PARTS = ['divad.etnom', '@', 'kooltuo', '.moc'];   // monte.david@outlook.com
const PHONE_PARTS = ['945', '1165', '4773'];                   // 54 9 11 5694-3774 (WhatsApp)

const linkedinUrl = "https://www.linkedin.com/in/monte-david";
const githubUrl = null; // Poné acá tu URL de GitHub cuando la tengas, por ejemplo "https://github.com/tu-usuario"

const ContactMeSection = () => {
  const [email, setEmail] = useState(null);
  const [copied, setCopied] = useState(false);

  const showEmail = () => setEmail(decode(EMAIL_PARTS));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Si el navegador bloquea el portapapeles, el mail igual queda visible para copiarlo a mano.
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Hola David, vi tu portfolio y quería contactarte.');
    window.open(`https://wa.me/${decode(PHONE_PARTS)}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const btn =
    "inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors";

  return (
    <section id="contacto" className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1080px] gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:py-24">
        <div>
          <h2 className="wide text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-none tracking-tight">
            ¿Hablamos?
          </h2>
          <p className="mt-5 max-w-[32rem] text-white/80">
            Si tenés una búsqueda de soporte IT o administrativa, o necesitás
            ayuda con tus equipos, escribime y te respondo a la brevedad.
          </p>
        </div>

        <div className="md:min-w-[320px]">
          <div className="flex flex-wrap gap-3">
            <button onClick={openWhatsApp} className={`${btn} bg-white text-ink hover:bg-paper`}>
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> WhatsApp
            </button>
            {!email && (
              <button onClick={showEmail} className={`${btn} border border-white/60 hover:bg-white/10`}>
                <FaEnvelope className="h-5 w-5" aria-hidden="true" /> Ver email
              </button>
            )}
          </div>

          {email && (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href={`mailto:${email}`} className="break-all text-lg font-medium underline underline-offset-4">
                {email}
              </a>
              <button onClick={copyEmail} className="rounded-md border border-white/60 px-3 py-1.5 text-[0.95rem] font-semibold hover:bg-white/10">
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>
          )}

          <div className="mt-6 flex gap-5 border-t border-white/20 pt-5">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <FaLinkedin className="h-5 w-5" aria-hidden="true" /> LinkedIn
            </a>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <FaGithub className="h-5 w-5" aria-hidden="true" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
