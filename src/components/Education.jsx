import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { educationData } from "../data/educationData";
import { useTheme } from "../context/ThemeContext";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();

  return (
    <section
      id="education"
      ref={ref}
      className={`py-24 px-6 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-16 ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          Education
        </motion.h2>

        <div className="relative pl-8 md:pl-12 border-l-2 border-indigo-500/30">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pb-12 last:pb-0"
            >
              <div
                className={`absolute -left-[41px] md:-left-[49px] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ${
                  theme === "dark" ? "ring-slate-950" : "ring-white"
                }`}
              />
              <div
                className={`rounded-2xl p-6 shadow-lg ${
                  theme === "dark"
                    ? "bg-slate-800/50 border border-slate-700"
                    : "bg-slate-50 border border-slate-100"
                }`}
              >
                <span className="text-sm font-semibold text-indigo-500">
                  {item.year}
                </span>
                <h3
                  className={`text-xl font-bold mt-2 ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.degree}
                </h3>
                <p
                  className={`font-medium mt-1 ${
                    theme === "dark" ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.institution}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-start gap-2 ${
                        theme === "dark" ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      <span className="text-indigo-500 mt-0.5">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
