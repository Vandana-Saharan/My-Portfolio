import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveSection(entry.target.getAttribute("id") || "");
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    navLinks.forEach(({ href }) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navClasses = scrolled
    ? theme === "dark"
      ? "bg-slate-900/95 backdrop-blur shadow-lg"
      : "bg-white/95 backdrop-blur shadow-lg"
    : "bg-transparent";

  const textClasses =
    theme === "dark"
      ? "text-slate-100 hover:text-indigo-400"
      : "text-slate-700 hover:text-indigo-600";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollTo("#hero")}
            className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            Vandana
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`font-medium transition-colors ${
                    activeSection === href.slice(1)
                      ? theme === "dark"
                        ? "text-indigo-400"
                        : "text-indigo-600"
                      : textClasses
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${textClasses}`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden ${theme === "dark" ? "bg-slate-900" : "bg-white"} border-t ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
            >
              <ul className="px-6 py-4 space-y-3">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <button
                      onClick={() => scrollTo(href)}
                      className={`block w-full text-left py-2 font-medium ${textClasses}`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={toggleTheme} className={`py-2 font-medium ${textClasses}`}>
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
