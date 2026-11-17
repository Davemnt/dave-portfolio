"use client";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { getEmail, getWhatsAppUrl, linkedinUrl, githubUrl } from "../data";

export default function Contact() {
  const [email, setEmail] = useState(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Si el navegador bloquea el portapapeles, el mail igual queda visible.
    }
  };

  const btn = "inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition";

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-gradient-to-br from-[#13284a] via-[var(--surface)] to-[#1b1d45] px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[var(--sky)] opacity-20 blur-3xl" aria-hidden="true" />
        <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">¿Hablamos?</h2>
        <p className="relative mx-auto mt-4 max-w-lg text-lg text-[var(--muted)]">
          Si tenés una búsqueda de soporte IT o administrativa, escribime y te respondo a la brevedad.
        </p>

        <div className="relative mt-9 flex flex-wrap justify-center gap-3">
          <button onClick={() => window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer")}
                  className={`${btn} bg-emerald-500 text-[var(--bg)] hover:brightness-110`}>
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> WhatsApp
          </button>
          {!email && (
            <button onClick={() => setEmail(getEmail())}
                    className={`${btn} border border-[var(--line)] bg-[var(--surface-2)] hover:border-[var(--sky)]`}>
              <FaEnvelope className="h-5 w-5" aria-hidden="true" /> Ver email
            </button>
          )}
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
             className={`${btn} border border-[var(--line)] bg-[var(--surface-2)] hover:border-[var(--sky)]`}>
            <FaLinkedin className="h-5 w-5" aria-hidden="true" /> LinkedIn
          </a>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
               className={`${btn} border border-[var(--line)] bg-[var(--surface-2)] hover:border-[var(--sky)]`}>
              <FaGithub className="h-5 w-5" aria-hidden="true" /> GitHub
            </a>
          )}
        </div>

        {email && (
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${email}`} className="break-all text-lg font-semibold text-[var(--sky)] underline underline-offset-4">{email}</a>
            <button onClick={copy} className="rounded-full border border-[var(--line)] px-3 py-1 text-sm font-semibold hover:border-[var(--sky)]">
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
