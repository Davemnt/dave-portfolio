import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-v2-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-v2-body" });

export const metadata = {
  title: "David Monte | Soporte IT y Asistente Administrativo (versión 2)",
};

export default function V2Layout({ children }) {
  return <div className={`${display.variable} ${body.variable} v2`}>{children}</div>;
}
