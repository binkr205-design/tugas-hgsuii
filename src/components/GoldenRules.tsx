import React, { useState } from 'react';
import { PAHAM_PRINCIPLES, EMERGENCY_ACTIONS } from '../data/contentData';
import {
  ShieldAlert,
  CheckCircle,
  Copy,
  Check,
  PhoneCall,
  UserCheck,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const GoldenRules: React.FC = () => {
  const [selectedEmergencyId, setSelectedEmergencyId] = useState<string>(
    EMERGENCY_ACTIONS[0].id
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeEmergency =
    EMERGENCY_ACTIONS.find((a) => a.id === selectedEmergencyId) ||
    EMERGENCY_ACTIONS[0];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="panduan-darurat" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section 1: Prinsip PAHAM */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
            Pedoman Karakter Pelajar Pancasila & Literasi Digital
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Prinsip Emas &ldquo;PAHAM&rdquo; Menggunakan AI untuk Siswa SMP
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Ingat 5 huruf sakti ini setiap kali kamu membuka HP, laptop, atau aplikasi kecerdasan buatan apa pun:
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {PAHAM_PRINCIPLES.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-indigo-300 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold text-lg flex items-center justify-center mb-3 shadow-xs">
                  {item.letter}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {item.word}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-indigo-700">
                Aksi: {item.action}
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Pertolongan Pertama & Tindakan Darurat */}
        <div className="pt-10 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>Panduan Tindakan Darurat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Apa yang Harus Kulakukan Jika Terjadi Penyalahgunaan?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Jangan panik, jangan membalas dengan kemarahan di medsos, dan ikuti langkah aman yang terbukti berikut:
            </p>
          </div>

          {/* Interactive Situation Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {EMERGENCY_ACTIONS.map((action) => {
              const isSelected = action.id === selectedEmergencyId;
              return (
                <button
                  key={action.id}
                  onClick={() => setSelectedEmergencyId(action.id)}
                  className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="line-clamp-2 leading-snug">{action.situation}</div>
                </button>
              );
            })}
          </div>

          {/* Active Action Breakdown */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-50/40 border border-rose-200/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-rose-200/60 mb-5">
              <div>
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wide">
                  Situasi:
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {activeEmergency.situation}
                </h3>
              </div>
              <div className="text-xs text-rose-800 bg-rose-100/70 px-3 py-1.5 rounded-lg border border-rose-200 font-medium">
                Pihak yang Dihubungi: {activeEmergency.contactWhom}
              </div>
            </div>

            {/* Immediate Warning Box */}
            <div className="p-4 rounded-xl bg-white border border-rose-200 mb-6 flex items-start gap-3 text-xs sm:text-sm text-rose-950 font-medium">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong>Langkah Paling Pertama (Detik Ini Juga):</strong> {activeEmergency.immediateStep}
              </div>
            </div>

            {/* 4-Step Action Checklist */}
            <div className="mb-6">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">
                Langkah Rinci Penanganan yang Aman:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeEmergency.actionList.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Template WhatsApp Aduan / Konsultasi */}
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Contoh Draf Pesan Sopan untuk Menghubungi Guru / Keluarga:
                </span>
                <button
                  onClick={() => handleCopy(activeEmergency.id, activeEmergency.reportTemplate)}
                  className="px-3 py-1 text-xs font-semibold rounded bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  {copiedId === activeEmergency.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Pesan</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono leading-relaxed">
                {activeEmergency.reportTemplate}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
