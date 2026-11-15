import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Taskbar({ onOpenContact }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const navLinks = [
    { name: "EXPERIENCE", id: "experience" },
    { name: "SKILLS", id: "skills" },
    { name: "PROJECTS", id: "projects" },
    { name: "EDUCATION", id: "education" },
    { name: "EXTRAS", id: "extras" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 bg-white border-4 border-black rounded-full px-5 py-3 shadow-neo flex justify-between items-center max-w-7xl mx-auto">
        {/* Brand */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMenuOpen(false);
          }}
          className="text-xl md:text-2xl font-shrikhand text-black ml-2 hover:scale-105 transition-transform cursor-pointer tracking-wider"
        >
          VANDANA
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-3 font-bold text-sm items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 bg-gray-50 text-black rounded-full border-black border-b-4 border-r-4 border-2 hover:bg-custom-yellow hover:border-b-2 hover:border-r-2 active:border-b-2 active:border-r-2 active:translate-y-1 transition-all cursor-pointer font-bold uppercase tracking-wider text-xs shadow-sm"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={onOpenContact}
            className="px-5 py-2 bg-[#FB7185] text-white font-black border-2 border-black border-b-4 border-r-4 rounded-full hover:border-b-2 hover:border-r-2 active:translate-y-1 transition-all cursor-pointer uppercase tracking-wider text-xs shadow-sm drop-shadow-[1px_1px_0_rgba(0,0,0,1)]"
          >
            CONTACT
          </button>
        </div>

        {/* Date / Status Tag */}
        <div className="hidden md:flex items-center gap-2 bg-custom-yellow text-black px-4 py-1.5 rounded-full font-mono text-sm border-black border-2 border-b-4 border-r-4 font-bold select-none shadow-sm">
          <span className="text-black animate-pulse">█</span>
          <span>{formatDate(currentTime)}</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden text-white text-xl bg-black p-2.5 rounded-full border-2 border-white cursor-pointer hover:bg-gray-800 transition-colors shadow-neo-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-24 left-4 right-4 z-40 bg-white border-4 border-black rounded-3xl p-5 flex flex-col gap-3 shadow-neo lg:hidden max-w-7xl mx-auto animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="bg-gray-50 text-black border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left hover:bg-custom-yellow transition-all uppercase tracking-wide cursor-pointer text-sm shadow-sm"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              onOpenContact();
            }}
            className="bg-[#FB7185] text-white border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-black active:border-b-2 active:border-r-2 active:translate-y-1 text-left transition-all uppercase tracking-wide cursor-pointer text-sm drop-shadow-[1px_1px_0_rgba(0,0,0,1)]"
          >
            CONTACT
          </button>

          <div className="flex md:hidden items-center gap-2 bg-custom-yellow text-black px-4 py-3 rounded-xl font-mono text-sm border-black border-2 border-b-4 border-r-4 justify-center font-bold shadow-sm">
            <span className="animate-pulse">█</span>
            <span>{formatDate(currentTime)}</span>
          </div>
        </div>
      )}
    </>
  );
}
