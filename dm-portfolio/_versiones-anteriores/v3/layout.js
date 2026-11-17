import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./v3.css";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-v3-serif" });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--font-v3-sans" });

export const metadata = {
  title: "David Monte | Soporte IT y Asistente Administrativo (versión 3)",
};

export default function V3Layout({ children }) {
  return <div className={`${serif.variable} ${sans.variable} v3`}>{children}</div>;
}
