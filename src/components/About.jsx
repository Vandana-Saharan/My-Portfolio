import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-28 px-6 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`rounded-3xl p-8 md:p-12 shadow-xl border glass-panel transition-all duration-350 ${
            theme === "dark"
              ? "border-slate-800/80 shadow-slate-950/20"
              : "border-slate-200/60 shadow-slate-100/60"
          }`}
        >
          <div className="space-y-6 text-lg leading-relaxed">
            <p
              className={theme === "dark" ? "text-slate-300" : "text-slate-650"}
            >
              I began my journey as an enthusiastic frontend learner and quickly pivoted to full-fledged 
              <strong> backend systems engineering</strong>. I am deeply passionate about constructing 
              secure, optimized, and high-performance server architectures that solve complex real-world problems.
            </p>
            <p
              className={theme === "dark" ? "text-slate-300" : "text-slate-650"}
            >
              Currently pursuing my <strong>Master of Computer Applications (MCA)</strong>, I combine theoretical foundations
              in computer science with practical application stacks. My toolkit covers <strong>React</strong>, 
              <strong>Spring Boot</strong>, <strong>Node.js / Express</strong>, <strong>MongoDB</strong>, 
              <strong>MySQL</strong>, and modern CI/CD tooling.
            </p>
            <p
              className={theme === "dark" ? "text-slate-300" : "text-slate-650"}
            >
              I take pride in writing clean, reusable code, structuring modular database schemas, 
              and exploring modern architectural patterns. When I am not coding, I like keeping track of emerging 
              frameworks and contributing to the open-source community.
            </p>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200 dark:border-slate-850">
            <div className="text-center p-4 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-2xl">
              <span className="text-2xl block mb-1">🎓</span>
              <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>Education</span>
              <span className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>MCA Student</span>
            </div>
            <div className="text-center p-4 bg-purple-500/5 dark:bg-purple-500/10 rounded-2xl">
              <span className="text-2xl block mb-1">💻</span>
              <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>Focus</span>
              <span className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Backend Systems</span>
            </div>
            <div className="text-center p-4 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-2xl col-span-2 md:col-span-1">
              <span className="text-2xl block mb-1">⚡</span>
              <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>Philosophy</span>
              <span className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-slate-800"}`}>Clean & Scalable Code</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
