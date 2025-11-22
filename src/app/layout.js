import { Fredoka, Lato } from "next/font/google";
import "./globals.css";

// Font Playful untuk Judul dan Aksen (Pengganti Amiri & Great Vibes)
const fredoka = Fredoka({ 
  subsets: ["latin"], 
  weight: ["400", "600"], // Menggunakan ketebalan normal dan semi-bold
  variable: '--font-fredoka'
});

// Font Rapi untuk Isi Teks
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-lato'
});

export const metadata = {
  title: "Undangan Khitanan Ceria - Akmal (Amay)",
  description: "Undangan Digital Walimatul Khitan Muhammad Akmal Zahir Al 'Asyari",
  // icons: { icon: '/favicon.ico' }, // Aktifkan jika sudah ada ikon
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* Ubah body class: background dasar cerah (sky-50) dan teks gelap (gray-800) */}
      <body className={`${fredoka.variable} ${lato.variable} bg-sky-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}