import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/contentData';
import { Search, BookA, Sparkles } from 'lucide-react';

export const Glossary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTerms = GLOSSARY_TERMS.filter((item) =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.simpleDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.dailyAnalogy.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
              Glosarium Istilah Remaja
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kamus Istilah AI yang Sering Kamu Dengar
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Jangan bingung dengan istilah bahasa Inggris! Ini penjelasannya dengan analogi kehidupan sehari-hari anak SMP.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari istilah AI..."
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Term Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.term}
                    </h3>
                    {item.phonetic && (
                      <span className="text-xs text-slate-400 font-mono">
                        [{item.phonetic}]
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.simpleDefinition}
                  </p>
                </div>

                <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100/70 text-xs text-indigo-950">
                  <div className="font-semibold text-indigo-700 flex items-center gap-1 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Analogi Gampangnya:
                  </div>
                  <p className="italic text-slate-700">&ldquo;{item.dailyAnalogy}&rdquo;</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              Istilah &ldquo;{searchQuery}&rdquo; tidak ditemukan. Coba ketik &ldquo;deepfake&rdquo;, &ldquo;prompt&rdquo;, atau &ldquo;halusinasi&rdquo;.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
