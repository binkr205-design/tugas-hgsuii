import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 text-left text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-indigo-600 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span>Waspada AI</span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('bentuk-masalah')}
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Bentuk Masalah
          </button>
          <button
            onClick={() => onNavigate('lab-uji-kasus')}
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Lab Deteksi Kasus
          </button>
          <button
            onClick={() => onNavigate('kuis-pemahaman')}
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Kuis Pemahaman
          </button>
          <button
            onClick={() => onNavigate('cek-etika-tugas')}
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Cek Etika Tugas
          </button>
          <button
            onClick={() => onNavigate('panduan-darurat')}
            className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            Bantuan Darurat
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('lab-uji-kasus')}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            Uji Kasus Sekarang
          </button>
        </div>
      </div>
    </header>
  );
};
