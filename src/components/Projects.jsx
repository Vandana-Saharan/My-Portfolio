import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { useTheme } from "../context/ThemeContext";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend / Other" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-28 px-6 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      {/* Decorative blurred backdrops */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          My Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">Projects</span>
        </motion.h2>
        <p className={`text-center max-w-xl mx-auto mb-12 text-base ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          A collection of work spanning full-stack applications, interactive user interfaces, and desktop database integrations.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "text-white"
                    : theme === "dark"
                      ? "text-slate-400 hover:text-white bg-slate-800/40 border border-slate-700/50"
                      : "text-slate-600 hover:text-slate-900 bg-white border border-slate-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const hasLive = project.liveUrl && project.liveUrl !== "#" && project.liveUrl !== "";
              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className={`group rounded-2xl overflow-hidden glass-panel border glow-card-hover flex flex-col justify-between h-[480px] shadow-lg hover:shadow-2xl ${
                    theme === "dark"
                      ? "border-slate-800/80 shadow-slate-950/20"
                      : "border-slate-200/60 shadow-slate-100/60"
                  }`}
                >
                  <div>
                    {/* Image / Gradient Cover */}
                    <div className="relative h-44 overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-500 flex items-center justify-center`}
                        >
                          <span className="text-5xl group-hover:rotate-6 transition-transform duration-300">
                            {project.category === "fullstack" ? "🚀" : project.category === "frontend" ? "💻" : "💾"}
                          </span>
                        </div>
                      )}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3
                          className={`text-xl font-bold tracking-tight ${
                            theme === "dark" ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                      {project.subtitle && (
                        <span className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded mb-3">
                          {project.subtitle}
                        </span>
                      )}
                      <p
                        className={`text-sm mb-4 line-clamp-3 leading-relaxed ${
                          theme === "dark" ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Dual Links Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                          hasLive
                            ? theme === "dark"
                              ? "border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                              : "border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                            : "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-slate-950 w-full"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                      {hasLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-400 dark:hover:to-purple-400 text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
