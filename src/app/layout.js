import { Amiri, Great_Vibes, Lato } from "next/font/google";
import "./globals.css";

// Font untuk nuansa Arab/Islami
const amiri = Amiri({ 
  subsets: ["arabic", "latin"], 
  weight: ["400", "700"],
  variable: '--font-amiri'
});

// Font Kaligrafi untuk Nama
const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: '--font-vibes'
});

// Font sederhana untuk isi
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-lato'
});

export const metadata = {
  title: "Undangan Khitanan Akmal Pratama",
  description: "Undangan Digital Khitanan Akmal Pratama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${amiri.variable} ${greatVibes.variable} ${lato.variable} bg-emerald-950 text-amber-100`}>
        {children}
      </body>
    </html>
  );
}