export interface MisuseTopic {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  iconName: string;
  realWorldScenario: string;
  whyDangerous: string;
  howToPrevent: string[];
  alertLevel: 'Tinggi' | 'Sedang' | 'Kritis';
  statsNote: string;
}

export interface TestCase {
  id: number;
  title: string;
  source: string;
  scenarioText: string;
  visualSnippet?: string;
  isAiGenerated: boolean;
  correctAnswer: 'ai' | 'asli';
  redFlags: string[];
  explanation: string;
  safetyTip: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tipForStudent: string;
}

export interface EmergencyAction {
  id: string;
  situation: string;
  immediateStep: string;
  actionList: string[];
  contactWhom: string;
  reportTemplate: string;
}

export interface GlossaryTerm {
  term: string;
  phonetic?: string;
  simpleDefinition: string;
  dailyAnalogy: string;
}
