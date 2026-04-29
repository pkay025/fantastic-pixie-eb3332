import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import WarningBanner from './components/WarningBanner';
import HeroSection from './components/sections/HeroSection';
import AdvancedTraderSection from './components/sections/AdvancedTraderSection';
import BaseAppSection from './components/sections/BaseAppSection';
import LearnSection from './components/sections/LearnSection';
import TakeControlSection from './components/sections/TakeControlSection';
import ExplorePage from './pages/ExplorePage';
import MarketStatsPage from './pages/MarketStatsPage';
import LearnPage from './pages/LearnPage';
import CryptoBasicsPage from './pages/CryptoBasicsPage';
import Loader from './components/ui/Loader';
import SafetyNoticePage from './pages/SafetyNoticePage';

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <WarningBanner />
    <Header />
    <main className="flex-1">
      <HeroSection />
      <AdvancedTraderSection />
      <BaseAppSection />
      <LearnSection />
      <TakeControlSection />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/market-stats" element={<MarketStatsPage />} />
      <Route path="/signin" element={<SafetyNoticePage />} />
      <Route path="/account-type" element={<SafetyNoticePage />} />
      <Route path="/signup" element={<SafetyNoticePage />} />
      <Route path="/forgot-password" element={<SafetyNoticePage />} />
      <Route path="/verify" element={<SafetyNoticePage />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/learn/crypto-basics" element={<CryptoBasicsPage />} />
    </Routes>
  );
};

export default App;
