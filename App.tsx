import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Customizer from './components/Customizer';
import Distributors from './components/Distributors';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';

import StoryPage from './components/StoryPage';

import SavingsCalculator from './components/SavingsCalculator';
import Sustainability from './components/Sustainability';

function App() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = React.useState(false);
  const [currentView, setCurrentView] = React.useState<'home' | 'story'>('home');

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const navigateToStory = () => {
    setCurrentView('story');
    window.scrollTo(0, 0);
  };

  return (
    <div className="App overflow-x-hidden">
      <Navbar onNavigateHome={navigateToHome} onNavigateToStory={navigateToStory} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Marquee />
            <Features />
            <SavingsCalculator />
            <Sustainability />
            <Gallery />
            <Distributors />
            <Customizer />
          </>
        ) : (
          <StoryPage />
        )}
      </main>
      <Footer
        onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)}
        onNavigateToStory={navigateToStory}
      />
      <CookieConsent />
      <PrivacyPolicyModal isOpen={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} />
    </div>
  );
}

export default App;