import { Calendar, Clock, MapPin, Map, Quote, Heart, Camera, MessageCircle, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // --- KONFIGURASI DATA ---
  // Link Google Maps dari snippet Anda
  const googleMapsLink = "https://maps.app.goo.gl/WNHk9NxCprQd2Px29";
  
  // Ganti nomor ini dengan nomor WhatsApp Anda untuk konfirmasi
  const whatsappNumber = "6282315066622"; 
  const textWA = encodeURIComponent("Assalamualaikum, InsyaAllah saya akan hadir di acara Khitanan Ananda Akmal (Amay).");

  // Data Foto Galeri (Placeholder - Ganti dengan foto asli di folder public nanti)
  const galleryPhotos = [
    { src: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=500", alt: "Foto 1" },
    { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=500", alt: "Foto 2" },
    { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=500", alt: "Foto 3" },
    { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=500", alt: "Foto 4" },
  ];

  return (
    <main className="min-h-screen bg-emerald-950 text-amber-50 font-lato overflow-x-hidden">
      
      {/* --- SECTION 1: HERO (PEMBUKA) --- */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] bg-fixed bg-emerald-900/50 bg-blend-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/50 to-emerald-950 z-0"></div>
        
        <div className="relative z-10 space-y-6 max-w-3xl animate-fade-in-up">
          <p className="text-amber-400 font-amiri text-xl tracking-widest animate-pulse">UNDANGAN</p>
          <p className="text-amber-300 font-lato text-sm tracking-[0.3em] uppercase border-b border-amber-500/50 inline-block pb-2">Walimatul Khitan</p>
          
          <h1 className="font-vibes text-6xl md:text-8xl text-amber-400 drop-shadow-2xl py-4 leading-tight">
            Muhammad Akmal <br/> Zahir Al 'Asyari
          </h1>
          
          <p className="text-amber-100/90 font-light text-lg">
            Putra Bapak H.M Ridwan Abdulloh & Ibu Hj Eva Muzdalifah
          </p>

          <div className="pt-12">
            <div className="inline-flex items-center justify-center w-10 h-16 border-2 border-amber-500/30 rounded-full p-1">
              <div className="w-1 h-3 bg-amber-400 rounded-full animate-bounce"></div>
            </div>
            <p className="text-xs text-amber-500/70 mt-2">Scroll ke bawah</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SALAM & PROFIL --- */}
      <section className="py-16 px-4 bg-emerald-950 relative">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="font-amiri text-3xl text-amber-400">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
          
          <div className="space-y-4">
            <p className="text-amber-200 font-bold text-lg">Assalāmu’alaikum Warahmatullāhi Wabarakātuh</p>
            <p className="leading-relaxed text-emerald-100/90">
              Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan acara Tasyakuran Khitanan putra kami tercinta.
            </p>
          </div>

          {/* Profil Anak */}
          <div className="relative inline-block py-8">
            <div className="absolute inset-0 border-2 border-amber-500/30 rounded-full rotate-6 scale-105"></div>
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500 shadow-2xl mx-auto relative bg-emerald-900">
              {/* GANTI GAMBAR INI DENGAN FOTO ANAK */}
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400" 
                alt="Amay" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-vibes text-4xl text-amber-400 mb-2">Muhammad Akmal Zahir Al 'Asyari</h2>
            <p className="text-lg text-amber-200 font-bold">( Panggilan: Amay )</p>
            <p className="text-sm text-emerald-200/70 mt-4 italic">
              Semoga menjadi anak yang Sholeh, berbakti kepada orang tua, serta berguna bagi Agama, Nusa dan Bangsa.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: DETAIL ACARA --- */}
      <section className="py-16 px-4 bg-emerald-900/30 border-y border-amber-500/10">
        <div className="max-w-md mx-auto bg-emerald-950 border border-amber-500/30 rounded-xl p-8 shadow-2xl relative overflow-hidden">
          {/* Ornamen Pojok */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
          
          <h3 className="text-center font-amiri text-3xl text-amber-400 mb-8 border-b border-amber-500/20 pb-4">Waktu & Tempat</h3>
          
          <div className="space-y-8">
            {/* Waktu */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/20 p-3 rounded-full text-amber-400 mt-1">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-xs uppercase text-amber-500 font-bold tracking-widest">Hari / Tanggal</p>
                <p className="text-xl font-bold text-amber-50">Minggu, 30 November 2025</p>
              </div>
            </div>

            {/* Jam */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/20 p-3 rounded-full text-amber-400 mt-1">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs uppercase text-amber-500 font-bold tracking-widest">Pukul</p>
                <p className="text-xl font-bold text-amber-50">09.00 WIB – Selesai</p>
              </div>
            </div>

            {/* Lokasi */}
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/20 p-3 rounded-full text-amber-400 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs uppercase text-amber-500 font-bold tracking-widest">Lokasi</p>
                <p className="font-medium leading-snug text-amber-100 mb-4">
                  Kp Cilebak Rt 05 Rw 03, Desa Rancamanyar, Kec Baleendah, Kab Bandung, Provinsi Jawa Barat
                </p>
                
                <a 
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full bg-amber-600 hover:bg-amber-500 text-emerald-950 text-center font-bold py-3 rounded-lg transition-all shadow-lg items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <Map size={18} /> Buka Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: GALERI FOTO --- */}
      <section className="py-20 px-4 bg-emerald-950 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Camera className="text-amber-400" size={28} />
            <h3 className="font-amiri text-3xl text-amber-400">Galeri Momen</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl border border-amber-500/20 shadow-lg aspect-square bg-emerald-900">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: KATA MUTIARA --- */}
      <section className="py-16 px-4 bg-emerald-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-10 h-10 text-amber-500 mx-auto mb-6 animate-pulse" />
          <div className="bg-emerald-900/40 p-8 rounded-2xl border border-amber-500/20">
            <Quote className="w-8 h-8 text-amber-500/40 mb-4 mx-auto" />
            <p className="italic text-xl text-emerald-100/90 mb-6 font-amiri leading-relaxed">
              "Dan Nabi Ibrahim a.s. dikhitan setelah berumur delapan puluh tahun dengan menggunakan kapak."
            </p>
            <p className="text-sm text-amber-400 font-bold uppercase tracking-widest">- HR. Bukhari -</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: TURUT MENGUNDANG (BARU) --- */}
      <section className="py-16 px-4 bg-emerald-950 border-t border-amber-500/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="text-amber-400" size={24} />
            <h3 className="font-amiri text-2xl text-amber-400">Turut Mengundang</h3>
          </div>
          
          <div className="bg-emerald-900/30 p-6 rounded-xl border border-amber-500/10 space-y-3">
            <p className="text-amber-100 font-medium">Keluarga Besar H. Ibrahim</p>
            <div className="w-1/3 h-px bg-amber-500/30 mx-auto"></div>
            <p className="text-amber-100 font-medium">Keluarga Besar Miftahul Aziz</p>
            <div className="w-1/3 h-px bg-amber-500/30 mx-auto"></div>
            <p className="text-amber-100 font-medium">Keluarga Besar Miftahul Ulum</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: PENUTUP --- */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-emerald-950 to-emerald-900">
        <div className="max-w-md mx-auto space-y-8">
          <p className="text-emerald-100/80 text-sm italic">
            Kehadiran dan doa restu Bapak/Ibu/Saudara(i) merupakan kado terindah bagi putra kami.
          </p>

          {/* Tombol RSVP WA */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${textWA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-green-600/20 transition-all transform hover:-translate-y-1"
          >
            <MessageCircle size={20} />
            Konfirmasi Kehadiran
          </a>

          <div className="pt-12 mt-8 border-t border-amber-500/20">
            <p className="text-xs uppercase tracking-widest text-amber-500/70 mb-2">Kami yang berbahagia,</p>
            <p className="font-amiri text-2xl text-amber-400 font-bold mb-1">H.M Ridwan Abdulloh</p>
            <p className="font-vibes text-xl text-amber-200">&</p>
            <p className="font-amiri text-2xl text-amber-400 font-bold mt-1">Hj Eva Muzdalifah</p>
          </div>
          
          <p className="text-[10px] text-emerald-500/30 pt-10">Undangan Digital by HeavensQue</p>
        </div>
      </section>

    </main>
  );
}