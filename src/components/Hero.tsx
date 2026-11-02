import React from 'react';
import { ArrowRight, Sparkles, BookOpen, ShieldAlert } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="pt-6 pb-14 bg-gradient-to-b from-indigo-50/60 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Meta Kicker Line */}
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 tracking-wide uppercase mb-3">
          <span>Proyek Edukasi Siswa Kelas 8</span>
          <span aria-hidden="true">·</span>
          <span>Literasi Digital & Etika AI</span>
          <span aria-hidden="true">·</span>
          <span>Panduan Ramah Remaja</span>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, intro, and action triggers */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Cerdas Memakai AI, <span className="text-indigo-600">Waspada</span> Terhadap Penyalahgunaannya
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Kecerdasan Buatan (AI) itu sangat keren dan seru untuk membantu belajar. Namun di sekitar kita, AI sering disalahgunakan: mulai dari foto teman yang diedit sembarangan (deepfake), penipuan suara WhatsApp, hoaks viral, hingga rasa malas berpikir karena asal copy-paste tugas.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('lab-uji-kasus')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-sm"
              >
                <span>Coba Lab Uji Kasus Nyata</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('bentuk-masalah')}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <ShieldAlert className="w-4 h-4 text-slate-500" />
                <span>Kenali 5 Bahaya Utama</span>
              </button>
            </div>

            {/* Quick Micro Reminder */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-3 text-xs text-slate-500">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
              <p>
                Dibuat dengan bahasa santai, jelas, dan fitur sederhana agar mudah dimengerti teman sekelas, guru, dan orang tua.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <img
                src="/src/assets/images/hero_ai_ethics_illustration_1793600216123.jpg"
                alt="Ilustrasi siswa SMP belajar teknologi kecerdasan buatan dengan aman di sekolah"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover max-h-[380px]"
              />
              <div className="p-4 bg-white/95 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  Kelas Digital Aman & Sehat
                </span>
                <span>SMP Indonesia · Kurikulum Merdeka</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Strip Below Hero Split */}
        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-indigo-600 font-bold text-lg mb-1 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" />
              <span>5 Masalah Utama</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ketahui bahaya manipulasi wajah (deepfake), kloning suara darurat, hoaks halusinasi AI, hingga pencurian data pribadi.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-emerald-600 font-bold text-lg mb-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Lab Kasus Interaktif</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Uji ketelitianmu membedakan pesan asli vs manipulasi AI lewat 5 skenario nyata yang sering mengecoh remaja.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-amber-600 font-bold text-lg mb-1 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Kalkulator & Kuis Etika</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cek apakah caramu menggunakan AI saat mengerjakan tugas sekolah sudah berintegritas dan tidak merugikan masa depanmu.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
