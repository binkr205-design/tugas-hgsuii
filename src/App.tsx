import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MisuseShowcase } from './components/MisuseShowcase';
import { CaseSimulator } from './components/CaseSimulator';
import { HomeworkChecker } from './components/HomeworkChecker';
import { AiQuiz } from './components/AiQuiz';
import { GoldenRules } from './components/GoldenRules';
import { Glossary } from './components/Glossary';
import { Footer } from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar onNavigate={handleNavigate} />
      <main className="grow">
        <Hero onNavigate={handleNavigate} />
        <MisuseShowcase />
        <CaseSimulator />
        <HomeworkChecker />
        <AiQuiz />
        <GoldenRules />
        <Glossary />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
