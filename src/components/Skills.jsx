import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../data/skillsData";
import { useTheme } from "../context/ThemeContext";

const categoryLabels = {
  frontend: { label: "Frontend Development", icon: "🎨" },
  backend: { label: "Backend Development", icon: "⚙️" },
  database: { label: "Database Management", icon: "💾" },
  tools: { label: "Tools & Utilities", icon: "🔧" },
};

function SkillCard({ skill, index, isInView }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`p-6 rounded-2xl glass-panel border glow-card-hover shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
        theme === "dark"
          ? "border-slate-800/80 shadow-slate-950/20"
          : "border-slate-200/60 shadow-slate-100/60"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-xl block">
              {skill.icon}
            </span>
            <h4
              className={`font-bold text-base tracking-tight ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              {skill.name}
            </h4>
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
            {skill.level}%
          </span>
        </div>

        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
            className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 rounded-full"
          />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className={`text-[10px] uppercase font-bold tracking-wider ${
          theme === "dark" ? "text-slate-500" : "text-slate-400"
        }`}>
          Proficiency
        </span>
        <span className={`text-xs ${
          theme === "dark" ? "text-slate-400" : "text-slate-500"
        }`}>
          {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-28 px-6 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Skills</span>
        </motion.h2>
        <p className={`text-center max-w-xl mx-auto mb-16 text-base ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          A breakdown of my programming languages, frameworks, databases, and development tools I use to bring ideas to life.
        </p>

        <div className="space-y-16">
          {Object.entries(skillsData).map(([key, skills], catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <span className="text-2xl">{categoryLabels[key]?.icon}</span>
                <h3
                  className={`text-xl font-bold tracking-tight ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  {categoryLabels[key]?.label}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
