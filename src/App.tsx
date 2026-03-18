import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Career from './components/Career';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // const lenis = new Lenis({
    //   duration: 1.2,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   orientation: 'vertical',
    //   gestureOrientation: 'vertical',
    //   smoothWheel: true,
    //   wheelMultiplier: 1,
    //   touchMultiplier: 2,
    //   infinite: false,
    // });

    // function raf(time: number) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);

    // return () => {
    //   lenis.destroy();
    // };
  }, []);

  return (
    <div className="relative min-h-screen dot-grid">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Career />
        <Projects />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}

export default App;
