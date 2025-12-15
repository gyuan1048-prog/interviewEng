import React from 'react';
import Hero from './components/Hero';
import WordCloudSection from './components/WordCloudSection';
import KeywordChart from './components/KeywordChart';
import ThemeChart from './components/ThemeChart';
import NarrativeCards from './components/NarrativeCards';
import FinalImpact from './components/FinalImpact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <Hero />
      <WordCloudSection />
      <KeywordChart />
      <ThemeChart />
      <NarrativeCards />
      <FinalImpact />
      <Footer />
    </main>
  );
};

export default App;