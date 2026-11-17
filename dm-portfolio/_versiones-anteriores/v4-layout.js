import { Plus_Jakarta_Sans } from "next/font/google";
import "./v4.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-v4" });

export const metadata = {
  title: "David Monte | Soporte IT y Asistente Administrativo (versión 4)",
};

export default function V4Layout({ children }) {
  return <div className={`${font.variable} v4`}>{children}</div>;
}
