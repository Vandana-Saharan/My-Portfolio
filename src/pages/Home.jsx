import { useState, useEffect } from "react";
import Preloader from "../components/ui/Preloader";
import CustomCursor from "../components/ui/CustomCursor";
import Taskbar from "../components/layout/Taskbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import ExtrasAccordion from "../components/ExtrasAccordion";
import Marquee from "../components/ui/Marquee";
import Footer from "../components/layout/Footer";
import ContactModal from "../components/ui/ContactModal";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(totalScroll / windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-custom-bg overflow-x-hidden selection:bg-custom-yellow selection:text-black font-sans relative">
      {/* 1. Preloader */}
      <Preloader />

      {/* 2. Custom Cursor */}
      <CustomCursor />

      {/* 3. Top Neo-Brutalist High-Contrast Progress Bar */}
      <div
        className="fixed top-0 left-0 h-2 bg-[#FB7185] z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <div className="fixed top-0 left-0 w-full h-2 bg-custom-yellow z-[90]" />

      {/* 4. Floating Pill Taskbar / Navbar */}
      <Taskbar onOpenContact={() => setIsContactModalOpen(true)} />

      {/* 5. Main Content in Sequence */}
      <main className="flex flex-col gap-16 md:gap-20 pt-32 pb-16">
        {/* Hero Section */}
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Extras Accordion */}
        <ExtrasAccordion />

        {/* Marquee Ticker Tape */}
        <Marquee />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Contact Popover Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
