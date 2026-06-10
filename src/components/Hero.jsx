import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../assets/vandana.jpg";
import resumeFile from "../resume/VANDANA_RESUME.docx?url";
import { useTheme } from "../context/ThemeContext";

const roles = [
  "Backend Developer",
  "Full-Stack Developer",
  "MCA Postgrad Scholar",
  "Tech Enthusiast"
];

export default function Hero() {
  const { theme } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bgGradient =
    theme === "dark"
      ? "from-slate-950 via-slate-900 to-indigo-950/20"
      : "from-slate-50 via-slate-100 to-indigo-50/40";

  return (
    <section
      id="hero"
      className={`min-h-screen relative flex items-center px-6 pt-28 pb-20 bg-gradient-to-br ${bgGradient} overflow-hidden transition-colors duration-300`}
    >
      {/* Premium Floating Animated Background Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-[120px] animate-pulse delay-700 pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-60 h-60 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-[80px] animate-pulse delay-1000 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left - Profile Image with Glow Borders */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative group">
            {/* Pulsing Backlight */}
            <div
              className={`absolute inset-0 rounded-full blur-2xl transition-all duration-500 group-hover:scale-105 opacity-80 ${
                theme === "dark"
                  ? "bg-gradient-to-tr from-indigo-500 to-purple-600"
                  : "bg-gradient-to-tr from-indigo-400/60 to-purple-500/60"
              }`}
            />
            {/* Double Border Frame */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
              <div className={`w-full h-full rounded-full overflow-hidden border-4 ${
                theme === "dark" ? "border-slate-900" : "border-white"
              }`}>
                <img
                  src={profileImage}
                  alt="Vandana Saharan"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Content with interactive elements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            Available for Internships & Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 font-extrabold">
              Vandana Saharan
            </span>
          </motion.h1>

          {/* Dynamic Rotating Subtitle */}
          <div className="h-12 flex justify-center lg:justify-start items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I architect and build clean, scalable backends coupled with smooth,
            interactive frontends. Specialize in Spring Boot, Node.js, Express, MongoDB, and React.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href={resumeFile}
              download="Vandana-Saharan-Resume.docx"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 group"
            >
              <svg
                className="w-5 h-5 mr-3 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-900 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
