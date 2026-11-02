import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';

interface CheckItem {
  id: string;
  label: string;
  sublabel: string;
  weight: number;
}

const CHECK_ITEMS: CheckItem[] = [
  {
    id: 'brainstorming-only',
    label: 'AI hanya sebagai Teman Diskusi & Kerangka',
    sublabel: 'Saya tidak meminta AI menulis seluruh jawaban atau esai jadi, melainkan hanya meminta ide kerangka atau penjelasan konsep yang sulit.',
    weight: 20
  },
  {
    id: 'fact-checked',
    label: 'Semua Fakta & Data Sudah Diverifikasi',
    sublabel: 'Saya memeriksa kembali tahun kejadian, rumus ilmiah, atau nama tokoh ke buku paket sekolah dan tidak menelan mentah-mentah hasil AI.',
    weight: 20
  },
  {
    id: 'no-private-data',
    label: 'Bebas dari Data Pribadi & Privasi Orang',
    sublabel: 'Saya tidak memasukkan nama lengkap teman, nomor HP, foto wajah pribadi, atau data sensitif ke dalam prompt AI.',
    weight: 20
  },
  {
    id: 'own-words',
    label: 'Ditulis Kembali dengan Kata-Kata Sendiri',
    sublabel: 'Saya menyusun kalimat berdasarkan apa yang sudah saya pahami, bukan sekadar copy-paste teks kaku buatan mesin.',
    weight: 20
  },
  {
    id: 'honest-transparent',
    label: 'Siap Jujur dan Transparan Kepada Guru',
    sublabel: 'Jika ditanya oleh Bapak/Ibu Guru, saya tidak menyangkal dan siap menceritakan bagaimana saya menggunakan AI untuk belajar.',
    weight: 20
  }
];

export const HomeworkChecker: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([
    'fact-checked',
    'no-private-data'
  ]);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const score = checkedIds.reduce((acc, curr) => {
    const item = CHECK_ITEMS.find((c) => c.id === curr);
    return acc + (item ? item.weight : 0);
  }, 0);

  const getStatus = () => {
    if (score === 100) {
      return {
        badge: 'Sangat Aman & Berintegritas',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        barColor: 'bg-emerald-500',
        summary: 'Luar biasa! Caramu memanfaatkan teknologi AI sudah sangat bijak, etis, dan menunjukkan integritas seorang pelajar sejati.'
      };
    }
    if (score >= 60) {
      return {
        badge: 'Cukup Baik · Ada Beberapa Catatan',
        color: 'text-amber-700 bg-amber-50 border-amber-300',
        barColor: 'bg-amber-500',
        summary: 'Hampir aman! Pastikan kamu melengkapi poin yang belum tercentang sebelum mengumpulkan tugasmu ke guru.'
      };
    }
    return {
      badge: 'Berisiko Pelanggaran & Malas Berpikir',
      color: 'text-rose-700 bg-rose-50 border-rose-300',
      barColor: 'bg-rose-500',
      summary: 'Waspada! Mengumpulkan tugas dengan cara ini berisiko menurunkan kemampuan berpikirmu dan bisa ditegur oleh guru jika ketahuan.'
    };
  };

  const status = getStatus();

  const handleCopyCitation = () => {
    const citationText =
      'Catatan Transparansi Tugas: Sebagian ide kerangka penulisan ini dieksplorasi dengan bantuan AI untuk diskusi konsep. Seluruh isi analisis, verifikasi data buku paket, dan kalimat akhir disusun mandiri oleh siswa.';
    navigator.clipboard.writeText(citationText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="cek-etika-tugas" className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
            Fitur Interaktif 02 · Kejujuran Akademik
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kalkulator Etika Tugas Sekolah: Apakah Penggunaan AI-mu Sudah Aman?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Sering bingung apakah boleh memakai AI untuk mengerjakan PR? Gunakan checklist sederhana ini sebelum kamu mengumpulkan tugasmu ke meja guru!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Checklist */}
          <div className="lg:col-span-7 space-y-3">
            {CHECK_ITEMS.map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-indigo-50/40 border-indigo-200'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="mt-0.5 text-indigo-600 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>{item.label}</span>
                      {isChecked && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded font-semibold">
                          +20 poin
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.sublabel}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Result & Advice Box */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Tingkat Etika Tugasmu
                </span>
                <span className="text-xl font-extrabold text-slate-900 tabular-nums">
                  {score} / 100
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full transition-all duration-300 ${status.barColor}`}
                  style={{ width: `${score}%` }}
                />
              </div>

              {/* Status Badge */}
              <div className={`p-3 rounded-lg border text-xs font-bold text-center mb-3 ${status.color}`}>
                {status.badge}
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                {status.summary}
              </p>

              {/* Advice */}
              <div className="text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  Rekomendasi untukmu:
                </div>
                {score < 100 ? (
                  <p>
                    Periksa kembali poin yang belum kamu centang. Jadikan AI sebagai pendorong kreativitas, bukan pengganti otak cerdasmu!
                  </p>
                ) : (
                  <p className="text-emerald-700 font-medium">
                    Mantap! Kamu telah mempraktikkan etika literasi digital yang patut dicontoh teman-teman sekelasmu.
                  </p>
                )}
              </div>
            </div>

            {/* Template Catatan Transparansi untuk Tugas */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide mb-1.5">
                <FileText className="w-4 h-4 text-indigo-600" />
                Template Catatan Kaki untuk Tugasmu
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Salin teks ini dan tempel di bagian bawah tugas sekolahmu sebagai bukti kejujuran akademik:
              </p>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono leading-relaxed mb-3">
                &ldquo;Catatan Transparansi: Ide kerangka penulisan dieksplorasi bersama AI. Seluruh isi analisis materi dan kalimat akhir disusun mandiri oleh siswa.&rdquo;
              </div>

              <button
                onClick={handleCopyCitation}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Catatan Kejujuran Tugas</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
