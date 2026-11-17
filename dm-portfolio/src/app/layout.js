import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./theme.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-v4" });

export const metadata = {
  title: "David Monte | Soporte IT y Asistente Administrativo",
  description:
    "Técnico de Soporte IT con más de 15 años de experiencia, experiencia administrativa y formación en Seguridad de la Información y Desarrollo Web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={font.variable}>
      <body className="v4 antialiased">{children}</body>
    </html>
  );
}
