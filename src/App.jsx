import Hero from './components/Hero';
import Features from './components/Features';
import PromoReel from './components/PromoReel';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Features />
      <PromoReel />
      <FooterCTA />
    </div>
  );
}

export default App;
