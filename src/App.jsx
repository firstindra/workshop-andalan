import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Portfolio from './components/Portfolio';
import Keahlian from './components/Keahlian';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ['beranda', 'portofolio', 'keahlian', 'blog', 'kontak'];

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Hero onNavigate={scrollToSection} />
        <Ticker />
        <Portfolio />
        <Keahlian />
        <Blog />
        <Contact />
      </main>
      <Ticker variant="footer" />
      <Footer />
    </div>
  );
}

export default App;
