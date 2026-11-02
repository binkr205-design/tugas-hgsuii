import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/contentData';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ChevronRight,
  Sparkles,
  Lightbulb
} from 'lucide-react';

export const AiQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const totalQ = QUIZ_QUESTIONS.length;
  const selectedOption = selectedAnswers[currentQ.id];
  const isAnswered = selectedOption !== undefined;

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
  };

  const handleNext = () => {
    if (currentIdx < totalQ - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsFinished(false);
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();

  const getResultBadge = () => {
    if (score === 5) {
      return {
        title: 'Juara Literasi AI · Generasi Kritis & Bijak',
        description: 'Hebat sekali! Pemahamanmu tentang etika dan risiko AI sangat matang. Kamu siap menjadi teladan bagi teman-teman di sekolah!',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300'
      };
    }
    if (score >= 3) {
      return {
        title: 'Pengamat Waspada Digital',
        description: 'Bagus! Kamu sudah punya insting yang baik dalam mengenali bahaya AI. Tingkatkan terus ketelitianmu saat menghadapi konten mencurigakan.',
        color: 'text-indigo-700 bg-indigo-50 border-indigo-300'
      };
    }
    return {
      title: 'Pemula Digital · Yuk Belajar Lagi!',
      description: 'Jangan berkecil hati! Dunia AI memang berkembang sangat cepat dan sering membingungkan. Baca kembali panduan PAHAM di bawah ya!',
      color: 'text-amber-700 bg-amber-50 border-amber-300'
    };
  };

  const result = getResultBadge();

  return (
    <section id="kuis-pemahaman" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
            Fitur Interaktif 03 · Kuis Pemahaman Remaja
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kuis Cek Ketangkasan: Cerdas atau Terjebak AI?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Jawab 5 pertanyaan seputar situasi nyata sehari-hari untuk menguji seberapa siap kamu menghadapi teknologi AI.
          </p>
        </div>

        {/* Quiz Body */}
        {!isFinished ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            
            {/* Top Stepper & Question Counter */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
                Pertanyaan {currentIdx + 1} dari {totalQ}
              </span>
              <div className="flex gap-1.5">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-1.5 rounded-full transition-all ${
                      i === currentIdx
                        ? 'bg-indigo-600'
                        : i < currentIdx
                        ? 'bg-slate-300'
                        : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;
                let optionStyle =
                  'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50';

                if (isAnswered) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold';
                  } else if (isSelected) {
                    optionStyle = 'bg-rose-50 border-rose-300 text-rose-900 line-through opacity-80';
                  } else {
                    optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{option}</span>
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation & Student Tip */}
            {isAnswered && (
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Pembahasan Guru & Pelajar:</span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-3">
                  {currentQ.explanation}
                </p>
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-indigo-900 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Tips Praktis Siswa: </span>
                    {currentQ.tipForStudent}
                  </div>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-end">
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>{currentIdx < totalQ - 1 ? 'Pertanyaan Berikutnya' : 'Lihat Hasil Akhir'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Finished Card */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Hasil Kuis Pemahamanmu
            </div>

            <div className="text-4xl font-black text-slate-900 mb-2 tabular-nums">
              {score} <span className="text-xl font-normal text-slate-400">/ {totalQ} Benar</span>
            </div>

            <div className={`p-3 rounded-lg border text-sm font-bold inline-block mb-4 ${result.color}`}>
              {result.title}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {result.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Kuis</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
