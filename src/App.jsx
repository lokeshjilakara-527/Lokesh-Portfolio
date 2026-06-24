import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Hooks
import { useTheme } from './hooks/useTheme';

// Global UI
import ParticleBackground from './components/ui/ParticleBackground';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import LoadingScreen from './components/ui/LoadingScreen';

// Sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App
 * Top-level composition. Shows a brief loading screen, then the full page.
 * Global overlays (particles, cursor, scroll bar, back-to-top) live here so
 * they persist across all sections.
 */
export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  // Dismiss the loading screen shortly after first paint.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading intro */}
      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>

      {/* Persistent global UI */}
      <ScrollProgress />
      <ParticleBackground />
      <CustomCursor />
      <BackToTop />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
