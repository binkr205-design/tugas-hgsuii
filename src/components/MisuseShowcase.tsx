import React, { useState } from 'react';
import { MISUSE_TOPICS } from '../data/contentData';
import {
  CameraOff,
  MicOff,
  BookX,
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  AlertOctagon,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

export const MisuseShowcase: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>(MISUSE_TOPICS[0].id);

  const activeTopic = MISUSE_TOPICS.find((t) => t.id === activeTopicId) || MISUSE_TOPICS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CameraOff':
        return <CameraOff className="w-5 h-5" />;
      case 'MicOff':
        return <MicOff className="w-5 h-5" />;
      case 'BookX':
        return <BookX className="w-5 h-5" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <AlertOctagon className="w-5 h-5" />;
    }
  };

  const getBadgeColor = (level: string) => {
    if (level === 'Kritis') {
      return 'text-rose-700 bg-rose-50 border-rose-200';
    }
    if (level === 'Tinggi') {
      return 'text-amber-700 bg-amber-50 border-amber-200';
    }
    return 'text-indigo-700 bg-indigo-50 border-indigo-200';
  };

  return (
    <section id="bentuk-masalah" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
            Materi Utama · Modul Siswa Kelas 8
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            5 Bentuk Penyalahgunaan AI yang Paling Sering Terjadi di Sekitar Kita
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            AI diciptakan untuk mempermudah hidup, tapi saat jatuh ke tangan yang keliru atau dipakai tanpa tanggung jawab, AI bisa melukai orang lain dan merugikan diri sendiri.
          </p>
        </div>

        {/* Interactive Segmented Filter / Tab Bar */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {MISUSE_TOPICS.map((topic) => {
            const isActive = topic.id === activeTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{getIcon(topic.iconName)}</span>
                <span>{topic.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Topic Detailed Card */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <span>{activeTopic.category}</span>
                <span aria-hidden="true">·</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getBadgeColor(activeTopic.alertLevel)}`}>
                  Tingkat Bahaya: {activeTopic.alertLevel}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {activeTopic.title}
              </h3>
              <p className="text-sm text-slate-600 mt-0.5">
                {activeTopic.subtitle}
              </p>
            </div>

            <div className="text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-200 max-w-xs shrink-0">
              <span className="font-semibold text-slate-700 block mb-0.5">Catatan Fakta:</span>
              {activeTopic.statsNote}
            </div>
          </div>

          {/* 3-Column Content Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            
            {/* Box 1: Skenario Nyata */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-2">
                <AlertOctagon className="w-4 h-4 shrink-0" />
                <span>Skenario Nyata di Sekolah / Rumah</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-rose-50/50 p-3 rounded-lg border border-rose-100/80 mb-3">
                &ldquo;{activeTopic.realWorldScenario}&rdquo;
              </p>
              <div className="mt-auto text-xs text-slate-500 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>Sering berawal dari iseng atau sekadar cari cara cepat.</span>
              </div>
            </div>

            {/* Box 2: Mengapa Sangat Berbahaya */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Mengapa Ini Sangat Berbahaya?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeTopic.whyDangerous}
              </p>
              <div className="mt-4 p-3 rounded-lg bg-amber-50/60 border border-amber-100 text-xs text-amber-900 leading-snug">
                <strong>Penting diingat:</strong> Jejak digital sulit dihapus, dan dampak buruknya dapat menghantui korban untuk waktu yang sangat lama.
              </div>
            </div>

            {/* Box 3: Cara Pencegahan Cepat */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Cara Pencegahan Cepat</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {activeTopic.howToPrevent.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Quick Summary Tip */}
          <div className="mt-6 p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-indigo-950">
              <span className="font-semibold">Nasihat untuk Kita Semua:</span> Teknologi AI itu netral seperti pisau dapur. Pisau bisa dipakai koki untuk memasak makanan lezat, tapi bisa melukai jika dipegang orang yang ceroboh. Jadilah generasi yang menggunakannya untuk hal bermanfaat!
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
