import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import StaysSame from './components/StaysSame';
import WhatsChanging from './components/WhatsChanging';
import SeasonTimeline from './components/SeasonTimeline';
import TrainingPhilosophy from './components/TrainingPhilosophy';
import WaterfallCup from './components/WaterfallCup';
import SquadPhotos from './components/SquadPhotos';
import MatchDay from './components/MatchDay';
import FAQ from './components/FAQ';
import Closing from './components/Closing';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <StaysSame />
      <WhatsChanging />
      <SeasonTimeline />
      <TrainingPhilosophy />
      <WaterfallCup />
      <SquadPhotos />
      <MatchDay />
      <FAQ />
      <Closing />
    </>
  );
}

export default App;
