import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { LanguageProvider } from "@/i18n";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Trust from "@/components/site/Trust";
import Services from "@/components/site/Services";
import Fleet from "@/components/site/Fleet";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="grain bg-[#070D1A] min-h-screen">
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Trust />
          <Services />
          <Fleet />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </LanguageProvider>
  );
}

export default App;
