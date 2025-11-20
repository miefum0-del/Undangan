import { Calendar, Clock, MapPin, Map } from "lucide-react";

export default function Home() {
  // GANTI LINK INI: Salin link dari Google Maps (Share -> Copy Link) lokasi asli
  const googleMapsLink = "https://maps.app.goo.gl/WNHk9NxCprQd2Px29";
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] bg-blend-overlay bg-emerald-900">
      
      {/* Container Kartu Undangan */}
      <div className="relative max-w-md w-full bg-emerald-950/95 backdrop-blur-sm border-2 border-amber-500/50 rounded-xl shadow-2xl overflow-hidden">
        
        {/* Hiasan Sudut */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-400 rounded-tl-xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-400 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-400 rounded-bl-xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-400 rounded-br-xl"></div>

        <div className="p-8 text-center space-y-6 relative z-10">
          
          {/* Header Bismillah */}
          <div className="space-y-2">
            <p className="font-amiri text-2xl text-amber-400">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
            <p className="font-lato text-xs tracking-[0.2em] text-amber-200/80 uppercase">Undangan Khitanan</p>
          </div>

          {/* Salam Pembuka */}
          <div className="font-lato text-sm text-amber-100 leading-relaxed">
            <p className="font-bold mb-2">Assalāmu’alaikum Warahmatullāhi Wabarakātuh</p>
            <p>Dengan memohon rahmat serta ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara(i) untuk menghadiri acara Khitanan putra kami:</p>
          </div>

          {/* Nama Anak */}
          <div className="py-6 border-y border-amber-500/30 my-4">
            <h1 className="font-vibes text-5xl text-amber-400 drop-shadow-lg mb-2 transform hover:scale-105 transition-transform duration-500">
              Akmal Pratama
            </h1>
            <p className="font-lato text-sm text-amber-200">(Panggilan: Akmal)</p>
          </div>

          {/* Detail Acara */}
          <div className="space-y-4 bg-emerald-900/50 p-5 rounded-xl border border-amber-500/20">
            {/* Tanggal */}
            <div className="flex items-start gap-4 text-left">
              <div className="bg-amber-500/10 p-2 rounded-lg text-amber-400 mt-1">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-[10px] text-amber-300/80 uppercase tracking-wider font-bold">Hari/Tanggal</p>
                <p className="font-lato text-amber-50 font-medium">Minggu, 20 Desember 2025</p>
              </div>
            </div>

            {/* Waktu */}
            <div className="flex items-start gap-4 text-left">
              <div className="bg-amber-500/10 p-2 rounded-lg text-amber-400 mt-1">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-[10px] text-amber-300/80 uppercase tracking-wider font-bold">Waktu</p>
                <p className="font-lato text-amber-50 font-medium">Pukul 08.00 WIB – Selesai</p>
              </div>
            </div>

            {/* Tempat */}
            <div className="flex items-start gap-4 text-left">
              <div className="bg-amber-500/10 p-2 rounded-lg text-amber-400 mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] text-amber-300/80 uppercase tracking-wider font-bold">Lokasi</p>
                <p className="font-lato text-amber-50 font-medium leading-snug mb-3">
                  Jl. Mawar No. 15, RT 02 RW 05, Sukamaju
                </p>
                
                {/* TOMBOL GOOGLE MAPS */}
                <a 
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-emerald-950 text-sm font-bold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/30 transform active:scale-95"
                >
                  <Map size={16} className="group-hover:rotate-12 transition-transform" />
                  Buka Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Penutup */}
          <div className="font-lato text-sm text-amber-100 leading-relaxed mt-6">
            <p className="italic opacity-90">Merupakan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara(i) berkenan hadir untuk memberikan doa restu bagi putra kami.</p>
            <p className="font-bold mt-4">Wassalāmu’alaikum Warahmatullāhi Wabarakātuh</p>
          </div>

          {/* Footer Keluarga */}
          <div className="pt-6 mt-6 border-t border-amber-500/30">
            <p className="text-xs text-amber-300/60 mb-1 uppercase tracking-widest">Hormat kami,</p>
            <p className="font-amiri text-xl font-bold text-amber-400">Keluarga Bapak Ahmad & Ibu Siti</p>
          </div>
        </div>
      </div>
    </main>
  );
}