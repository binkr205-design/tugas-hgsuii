import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Waspada AI · Pelajar Cerdas Indonesia</span>
            </div>
            <p className="mt-1 text-xs text-slate-400 max-w-md leading-relaxed">
              Website edukasi sederhana inisiatif siswa kelas 8 untuk membantu sesama teman, orang tua, dan guru memahami bahaya penyalahgunaan AI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <button
              onClick={() => onNavigate('bentuk-masalah')}
              className="hover:text-white transition-colors"
            >
              5 Ancaman AI
            </button>
            <button
              onClick={() => onNavigate('lab-uji-kasus')}
              className="hover:text-white transition-colors"
            >
              Lab Deteksi Kasus
            </button>
            <button
              onClick={() => onNavigate('cek-etika-tugas')}
              className="hover:text-white transition-colors"
            >
              Etika Tugas
            </button>
            <button
              onClick={() => onNavigate('panduan-darurat')}
              className="hover:text-white transition-colors"
            >
              Aduan & Darurat
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Waspada AI. Disusun dengan semangat belajar mandiri dan integritas.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Didedikasikan untuk pelajar SMP seluruh Indonesia</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
