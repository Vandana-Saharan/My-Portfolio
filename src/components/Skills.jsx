import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../data/skillsData";
import { useTheme } from "../context/ThemeContext";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
};

function SkillCard({ skill, index, isInView }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`p-6 rounded-xl shadow-md transition-shadow hover:shadow-xl ${
        theme === "dark"
          ? "bg-slate-800/50 border border-slate-700"
          : "bg-white border border-slate-100"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{skill.icon}</span>
        <h3
          className={`font-semibold text-lg ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          {skill.name}
        </h3>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-indigo-500 rounded-full"
        />
      </div>
      <p
        className={`text-sm mt-1 ${
          theme === "dark" ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {skill.level}%
      </p>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 px-6 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-16 ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          My <span className="text-indigo-500">Tech Stack</span>
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(skillsData).map(([key, skills], catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3
                className={`text-xl font-semibold mb-6 ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                {categoryLabels[key]}
              </h3>
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
