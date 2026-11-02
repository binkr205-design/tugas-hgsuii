import React, { useState } from 'react';
import { TEST_CASES } from '../data/contentData';
import {
  ShieldAlert,
  CheckCircle,
  XCircle,
  HelpCircle,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Info
} from 'lucide-react';

export const CaseSimulator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, 'ai' | 'asli'>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const currentCase = TEST_CASES[currentIndex];
  const totalCases = TEST_CASES.length;
  const currentAnswer = userAnswers[currentCase.id];
  const isAnswered = currentAnswer !== undefined;
  const isCorrect = isAnswered && currentAnswer === currentCase.correctAnswer;

  const handleSelectAnswer = (ans: 'ai' | 'asli') => {
    if (isAnswered) return;
    setUserAnswers((prev) => ({ ...prev, [currentCase.id]: ans }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < totalCases - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowExplanation(userAnswers[TEST_CASES[currentIndex + 1].id] !== undefined);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowExplanation(userAnswers[TEST_CASES[currentIndex - 1].id] !== undefined);
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
  };

  // Calculate score
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([id, ans]) => {
      const c = TEST_CASES.find((item) => item.id === Number(id));
      return c && c.correctAnswer === ans;
    }
  ).length;

  return (
    <section id="lab-uji-kasus" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
              Fitur Interaktif 01 · Simulasi Deteksi
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Lab Uji Kasus: Asli atau Rekayasa AI?
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl">
              Coba asah kepekaanmu! Banyak siswa dan orang tua tertipu karena manipulasi AI terlihat sangat nyata. Analisis kasus di bawah dan tebak apakah itu Asli atau Hasil Rekayasa AI.
            </p>
          </div>

          {/* Score Counter & Reset */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 shadow-xs flex items-center gap-2">
              <span className="font-semibold text-slate-900">Skor Kamu:</span>
              <span className="font-bold text-indigo-600 text-sm tabular-nums">{correctCount} / {totalCases}</span>
              <span className="text-slate-400">({answeredCount} dijawab)</span>
            </div>

            <button
              onClick={handleReset}
              className="p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
              title="Ulangi Simulasi dari Awal"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Case Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          
          {/* Top Progress Bar & Stepper */}
          <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-indigo-400">Kasus {currentIndex + 1} dari {totalCases}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-300">Sumber: {currentCase.source}</span>
            </div>

            {/* Stepper Dots */}
            <div className="flex items-center gap-1.5">
              {TEST_CASES.map((c, i) => {
                const ans = userAnswers[c.id];
                let dotColor = 'bg-slate-700';
                if (ans !== undefined) {
                  dotColor = ans === c.correctAnswer ? 'bg-emerald-500' : 'bg-rose-500';
                } else if (i === currentIndex) {
                  dotColor = 'bg-indigo-400 ring-2 ring-indigo-400/30';
                }

                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setCurrentIndex(i);
                      setShowExplanation(userAnswers[c.id] !== undefined);
                    }}
                    className={`w-6 h-6 rounded-md text-[11px] font-bold flex items-center justify-center transition-all ${
                      i === currentIndex ? 'text-white' : 'text-slate-400'
                    } ${dotColor}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Scenario Title & Text */}
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              {currentCase.title}
            </h3>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed mb-4">
              {currentCase.scenarioText}
            </div>

            {currentCase.visualSnippet && (
              <div className="mb-6 p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Detail Bukti yang Terlihat:</strong> {currentCase.visualSnippet}
                </div>
              </div>
            )}

            {/* Decision Buttons (If not yet answered or show status) */}
            <div className="mt-6 pt-5 border-t border-slate-200">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Menurutmu, apakah skenario ini:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleSelectAnswer('ai')}
                  disabled={isAnswered}
                  className={`p-4 rounded-xl border text-left font-medium transition-all flex items-center justify-between ${
                    isAnswered
                      ? currentCase.correctAnswer === 'ai'
                        ? 'bg-rose-50 border-rose-400 text-rose-900'
                        : currentAnswer === 'ai'
                        ? 'bg-rose-100/50 border-rose-300 text-rose-800 opacity-60'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                      : 'bg-white border-slate-300 text-slate-800 hover:border-rose-400 hover:bg-rose-50/40 active:scale-[0.99]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm shrink-0">
                      AI
                    </div>
                    <div>
                      <div className="text-sm font-bold">Rekayasa / Palsu (AI)</div>
                      <div className="text-xs text-slate-500">Dibuat oleh AI atau mengandung penipuan</div>
                    </div>
                  </div>
                  {isAnswered && currentCase.correctAnswer === 'ai' && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                </button>

                <button
                  onClick={() => handleSelectAnswer('asli')}
                  disabled={isAnswered}
                  className={`p-4 rounded-xl border text-left font-medium transition-all flex items-center justify-between ${
                    isAnswered
                      ? currentCase.correctAnswer === 'asli'
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                        : currentAnswer === 'asli'
                        ? 'bg-emerald-100/50 border-emerald-300 text-emerald-800 opacity-60'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                      : 'bg-white border-slate-300 text-slate-800 hover:border-emerald-400 hover:bg-emerald-50/40 active:scale-[0.99]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                      OK
                    </div>
                    <div>
                      <div className="text-sm font-bold">Asli / Sah / Terverifikasi</div>
                      <div className="text-xs text-slate-500">Berasal dari sumber resmi terpercaya</div>
                    </div>
                  </div>
                  {isAnswered && currentCase.correctAnswer === 'asli' && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                </button>
              </div>
            </div>

            {/* Feedback & Explanation Card */}
            {isAnswered && showExplanation && (
              <div className={`mt-6 p-5 sm:p-6 rounded-xl border ${
                isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span className="font-bold text-emerald-900 text-base">Tebakanmu Tepat Sekali!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span className="font-bold text-rose-900 text-base">Kurang Tepat, Jangan Khawatir!</span>
                    </>
                  )}
                </div>

                <p className="text-sm text-slate-800 leading-relaxed mb-4">
                  {currentCase.explanation}
                </p>

                {/* Red Flags List */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 mb-4">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                    Ciri-Ciri Kunci yang Perlu Diperhatikan:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {currentCase.redFlags.map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety Tip */}
                <div className="text-xs text-slate-700 bg-white/80 p-3 rounded-lg border border-slate-200 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Tips Keselamatan untuk Siswa: </span>
                    {currentCase.safetyTip}
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Navigation */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Kasus Sebelumnya</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === totalCases - 1}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1.5"
              >
                <span>Kasus Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
