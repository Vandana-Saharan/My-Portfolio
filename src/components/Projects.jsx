import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 px-6 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}
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
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group rounded-2xl overflow-hidden shadow-lg ${
                theme === "dark"
                  ? "bg-slate-800/50 border border-slate-700"
                  : "bg-white border border-slate-100"
              }`}
            >
              {/* Image / Gradient */}
              <div className="relative h-48 overflow-hidden">
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
                    <span className="text-6xl opacity-50">📁</span>
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    theme === "dark"
                      ? "from-slate-900/90 to-transparent"
                      : "from-slate-900/50 to-transparent"
                  } opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>

              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <span className="text-xs font-medium text-indigo-500">
                      {project.subtitle}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mb-4 line-clamp-3 ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 px-4 border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-lg text-center text-sm font-medium hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-900 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
