import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata = {
  title: "David Monte | Soporte IT y Asistente Administrativo",
  description:
    "Técnico de Soporte IT con más de 15 años de experiencia, experiencia administrativa y formación en Seguridad de la Información y Desarrollo Web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={archivo.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
