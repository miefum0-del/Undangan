'use client';

import { useState } from "react";
import { Calendar, Clock, MapPin, Map, Quote, Heart, Camera, MessageCircle, Users, Gift, Copy, Send, MessageSquare } from "lucide-react";

export default function Home() {
  // --- KONFIGURASI DATA (TIDAK BERUBAH) ---
  const googleMapsLink = "https://maps.app.goo.gl/WNHk9NxCprQd2Px29";
  const whatsappNumber = "6282315066622";
  const textWA = encodeURIComponent("Assalamualaikum, InsyaAllah saya akan hadir di acara Khitanan Ananda Akmal (Amay).");

  const [comments, setComments] = useState([
    { name: "Teman Amay", message: "Selamat ya Amay! Keren sudah disunat!", date: "Baru saja" },
    { name: "Om & Tante", message: "Semoga Amay jadi anak pinter dan sholeh ya.", date: "5 menit lalu" }
  ]);
  
  const [inputName, setInputName] = useState("");
  const [inputMsg, setInputMsg] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Nomor rekening ${text} berhasil disalin!`);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!inputName || !inputMsg) return alert("Mohon isi nama dan ucapan.");
    const newComment = { name: inputName, message: inputMsg, date: "Baru saja" };
    setComments([newComment, ...comments]);
    setInputName("");
    setInputMsg("");
    alert("Terima kasih atas ucapannya!");
  };

  // Data Foto Galeri (Ganti dengan foto asli nanti)
  const galleryPhotos = [
    { src: "/2.jpeg",alt: "Foto 1" },
    { src: "/6.jpeg",alt: "Foto 2" },
    { src: "/4.jpeg",alt: "Foto 3" },
    { src: "/5.jpeg",alt: "Foto 4" },
  ];

  // --- URL BACKGROUND IMAGE THEMA ANAK (Ganti dengan '/kids-bg.jpg' jika file sudah di folder public) ---
  // Saya menggunakan gambar placeholder awan kartun sebagai contoh.
  const backgroundImgUrl = "https://img.freepik.com/free-vector/hand-drawn-sky-background_23-2150361716.jpg?w=1380&t=st=1708670000~exp=1708670600~hmac=example";

  return (
    // Background utama cerah dengan gambar kartun
    <main className="min-h-screen font-lato overflow-x-hidden bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${backgroundImgUrl}')` }}>
      
      {/* Overlay cerah (biru langit transparan) agar teks terbaca */}
      <div className="bg-sky-100/70 min-h-screen text-gray-800 backdrop-blur-[2px]"> 

        {/* --- SECTION 1: HERO --- */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative">
          <div className="relative z-10 space-y-6 max-w-3xl animate-fade-in-up">
            {/* Hiasan Balon/Awan (Opsional, bisa ditambah gambar SVG) */}
            
            <p className="text-blue-600 font-fredoka font-semibold text-xl tracking-widest animate-bounce">UNDANGAN CUKURAN</p>
            <div className="inline-block bg-orange-400 text-white px-6 py-2 rounded-full shadow-md transform -rotate-2">
              <p className="font-fredoka text-lg tracking-wider uppercase">Walimatul Khitan</p>
            </div>
            
            <h1 className="font-fredoka text-5xl md:text-7xl text-blue-700 drop-shadow-lg py-6 leading-tight">
              Muhammad Akmal <br/> Zahir Al 'Asyari
            </h1>
            
            <p className="text-gray-700 font-semibold text-xl bg-white/50 inline-block px-4 py-2 rounded-xl">
              Putra Bapak H.M Ridwan Abdulloh & Ibu Hj Eva Muzdalifah
            </p>

            <div className="pt-12">
               {/* Indikator Scroll yang lebih lucu */}
              <div className="animate-bounce bg-white p-3 rounded-full shadow-lg inline-block border-2 border-blue-300">
                 <span className="text-3xl">👇</span>
              </div>
              <p className="text-sm text-blue-600/80 mt-2 font-bold font-fredoka">Yuk, Scroll ke bawah!</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: SALAM & PROFIL --- */}
        <section className="py-16 px-4 relative">
           {/* Container seperti kertas putih dengan border warna-warni */}
          <div className="max-w-2xl mx-auto text-center space-y-8 bg-white p-8 rounded-[3rem] border-4 border-dashed border-sky-300 shadow-xl">
            <p className="font-fredoka text-3xl text-blue-600">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
            
            <div className="space-y-4">
              <p className="text-orange-500 font-bold text-xl font-fredoka">Assalāmu’alaikum Teman-teman!</p>
              <p className="leading-relaxed text-gray-600 text-lg">
                Dengan memohon Rahmat Allah SWT, kami mengundang Bapak/Ibu/Teman-teman untuk hadir di acara syukuran khitanan putra kami.
              </p>
            </div>

            {/* Profil Anak dengan Bingkai Lucu */}
            <div className="relative inline-block py-8">
               {/* Efek bingkai berputar warna oranye */}
              <div className="absolute inset-0 border-4 border-orange-400 border-dashed rounded-full animate-[spin_10s_linear_infinite] scale-110"></div>
              <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto relative bg-sky-100 z-10">
                {/* GANTI GAMBAR INI DENGAN FOTO ANAK */}
                <img 
                  src="/1.jpeg" 
                  alt="Amay" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-fredoka text-4xl text-blue-700 mb-2">Muhammad Akmal Zahir Al 'Asyari</h2>
              <div className="inline-block bg-yellow-300 text-blue-800 px-4 py-1 rounded-full font-bold transform rotate-2 shadow-sm">
                Panggilan: Amay
              </div>
              <p className="text-lg text-gray-600 mt-6 italic font-medium bg-sky-50 p-4 rounded-xl">
                "Semoga Amay menjadi anak yang Sholeh, pinter, dan jagoan Ayah Bunda!"
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: WAKTU & TEMPAT (Gaya Tiket/Kartu) --- */}
        <section className="py-16 px-4">
          <div className="max-w-md mx-auto bg-white border-4 border-blue-400 rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(59,130,246,0.2)] relative overflow-hidden">
            {/* Hiasan sudut */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-300 rounded-br-full opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-300 rounded-tl-full opacity-50"></div>
            
            <h3 className="text-center font-fredoka text-3xl text-blue-600 mb-8 border-b-4 border-dashed border-blue-200 pb-4 relative z-10">Kapan & Dimana?</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4 bg-sky-50 p-4 rounded-2xl">
                <div className="bg-blue-500 p-3 rounded-full text-white mt-1 shadow-md">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase text-blue-500 font-bold tracking-widest font-fredoka">Hari / Tanggal</p>
                  <p className="text-xl font-bold text-gray-800">Sabtu, 29 November 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-orange-50 p-4 rounded-2xl">
                <div className="bg-orange-500 p-3 rounded-full text-white mt-1 shadow-md">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase text-orange-500 font-bold tracking-widest font-fredoka">Pukul</p>
                  <p className="text-xl font-bold text-gray-800">09.00 WIB – Selesai</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-green-50 p-4 rounded-2xl">
                <div className="bg-green-500 p-3 rounded-full text-white mt-1 shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm uppercase text-green-600 font-bold tracking-widest font-fredoka">Lokasi Acara</p>
                  <p className="font-medium leading-snug text-gray-700 mb-4">
                    Kp Cilebak Rt 05 Rw 03, Desa Rancamanyar, Kec Baleendah, Kab Bandung, Provinsi Jawa Barat
                  </p>
                  
                  <a 
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-3 rounded-xl transition-all shadow-md items-center justify-center gap-2 hover:scale-[1.02] font-fredoka"
                  >
                    <Map size={20} /> Buka Peta Lokasi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: GALERI FOTO (Bentuk Polaroid Lucu) --- */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8 bg-white inline-block px-8 py-3 rounded-full shadow-md border-2 border-blue-200">
              <Camera className="text-blue-500" size={32} />
              <h3 className="font-fredoka text-3xl text-blue-600">Foto-foto Amay</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {galleryPhotos.map((photo, index) => (
                // Efek Polaroid: Background putih, padding, dan sedikit rotasi acak
                <div key={index} className={`relative group bg-white p-3 rounded-lg shadow-lg border-2 border-gray-100 transform hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0`}>
                  <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-fredoka text-gray-500 mt-2">Momen Ceria {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 5: TANDA KASIH (Celengan Digital) --- */}
        <section className="py-16 px-4">
          <div className="max-w-md mx-auto text-center bg-white/80 p-8 rounded-[2rem] border-4 border-orange-200 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="text-orange-500 animate-bounce" size={36} />
              <h3 className="font-fredoka text-3xl text-orange-600">Celengan Amay</h3>
            </div>
            
            <p className="text-gray-600 mb-8 font-medium">
              Doa restu Om & Tante adalah kado terindah. Tapi kalau mau isi celengan Amay, boleh banget kok! Terima kasih ya!
            </p>
          </div>
        </section>

        {/* --- SECTION 6: UCAPAN & DOA (Buku Tamu Ceria) --- */}
        <section className="py-16 px-4 relative">
          <div className="max-w-md mx-auto bg-white p-6 rounded-[2rem] border-4 border-green-300 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <MessageSquare className="text-green-500" size={32} />
              <h3 className="font-fredoka text-3xl text-green-600">Kirim Doa Yuk!</h3>
            </div>

            {/* Form Input Ceria */}
            <form onSubmit={handleSubmitComment} className="bg-green-50 p-6 rounded-2xl border-2 border-green-200 mb-8 shadow-inner">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nama Om/Tante/Teman" 
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full bg-white border-2 border-green-300 rounded-xl p-3 text-gray-800 placeholder-green-300 focus:outline-none focus:border-green-500 transition-colors font-fredoka"
                />
                <textarea 
                  rows="3" 
                  placeholder="Tulis ucapan selamat & doa untuk Amay disini..." 
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  className="w-full bg-white border-2 border-green-300 rounded-xl p-3 text-gray-800 placeholder-green-300 focus:outline-none focus:border-green-500 transition-colors font-medium"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-1 font-fredoka"
                >
                  <Send size={20} /> Kirim Ucapan
                </button>
              </div>
            </form>

            {/* List Komentar Bubble */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar-kids">
              {comments.map((comment, idx) => (
                // Gaya chat bubble
                <div key={idx} className={`p-4 rounded-2xl relative shadow-sm ${idx % 2 === 0 ? 'bg-blue-100 ml-4 rounded-tl-none' : 'bg-orange-100 mr-4 rounded-tr-none'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-bold text-blue-800 font-fredoka">{comment.name}</p>
                    <span className="text-[10px] text-gray-500 bg-white/50 px-2 py-1 rounded-full">{comment.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{comment.message}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 7: KATA MUTIARA (Versi Lebih Ringan) --- */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-6 animate-bounce" fill="currentColor" />
            <div className="bg-white/90 p-8 rounded-[3rem] border-4 border-dashed border-red-200 shadow-lg relative">
              {/* Hiasan bintang */}
              <span className="absolute top-4 left-4 text-3xl">✨</span>
              <span className="absolute bottom-4 right-4 text-3xl">✨</span>

              <Quote className="w-10 h-10 text-red-300 mb-4 mx-auto" />
              <p className="italic text-xl text-gray-600 mb-6 font-medium leading-relaxed">
                "Dan Nabi Ibrahim a.s. dikhitan setelah berumur delapan puluh tahun dengan menggunakan kapak."
              </p>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold font-fredoka text-sm">
                HR. Bukhari
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 8: TURUT MENGUNDANG (Gaya Awan) --- */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center bg-white/80 p-8 rounded-[50%_/_30%] shadow-xl border-4 border-sky-200">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="text-sky-500" size={28} />
              <h3 className="font-fredoka text-2xl text-sky-600">Turut Berbahagia</h3>
            </div>
            
            <div className="space-y-4 font-medium text-gray-700">
              <p className="bg-sky-50 inline-block px-4 py-2 rounded-full shadow-sm">Keluarga Besar H. Ibrahim</p>
              <br/>
              <p className="bg-orange-50 inline-block px-4 py-2 rounded-full shadow-sm">Keluarga Besar Miftahul Aziz</p>
              <br/>
              <p className="bg-green-50 inline-block px-4 py-2 rounded-full shadow-sm">Keluarga Besar Miftahul Ulum</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 9: PENUTUP (Footer Ceria) --- */}
        <section className="py-20 px-4 text-center bg-gradient-to-t from-blue-200 to-transparent">
          <div className="max-w-md mx-auto space-y-8">
            <p className="text-blue-900 text-lg font-fredoka bg-white/50 p-4 rounded-2xl shadow-sm inline-block transform rotate-1">
              Terima kasih sudah mau datang ke acara Amay! Sampai jumpa! 👋
            </p>

            {/* Tombol RSVP WA */}
            <br/>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${textWA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-full shadow-[0px_6px_0px_0px_rgba(22,163,74,1)] transition-all transform hover:-translate-y-1 active:translate-y-1 active:shadow-[0px_2px_0px_0px_rgba(22,163,74,1)] font-fredoka text-lg animate-pulse"
            >
              <MessageCircle size={24} />
              Konfirmasi Kehadiran ke Ayah/Bunda
            </a>

            <div className="pt-12 mt-12 border-t-4 border-dashed border-blue-300/50">
              <p className="text-sm font-bold tracking-widest text-blue-600/70 mb-4 font-fredoka">Salam Sayang dari Kami,</p>
              <div className="bg-white/70 inline-block p-6 rounded-3xl shadow-md rotate-[-1deg]">
                <p className="font-fredoka text-2xl text-blue-800 font-bold mb-1">H.M Ridwan Abdulloh</p>
                <p className="font-fredoka text-xl text-orange-500">&</p>
                <p className="font-fredoka text-2xl text-blue-800 font-bold mt-1">Hj Eva Muzdalifah</p>
              </div>
            </div>
            
            <p className="text-[12px] text-blue-600/60 pt-10 font-fredoka">🎈 Undangan Digital Ceria by HeavensQue 🎈</p>
          </div>
        </section>

      </div> {/* End of overlay div */}
    </main>
  );
}