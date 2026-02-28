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
      className={`py-24 px-6 ${
        theme === "dark" ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          About <span className="text-indigo-500">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`rounded-2xl p-8 md:p-12 shadow-lg ${
            theme === "dark"
              ? "bg-slate-800/50 border border-slate-700"
              : "bg-white border border-slate-100"
          }`}
        >
          <p
            className={`text-lg leading-relaxed mb-6 ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I started my journey with frontend development and later moved towards
            backend development. I am passionate about building scalable systems
            using clean architecture and industry best practices.
          </p>
          <p
            className={`text-lg leading-relaxed mb-6 ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            With hands-on experience in <strong>React</strong>,{" "}
            <strong>Spring Boot</strong>, <strong>MySQL</strong>, and modern
            tooling, I focus on writing maintainable, reusable, and optimized
            code. I continuously learn new technologies to stay updated with
            the evolving tech landscape.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            In my free time, I explore new frameworks and enjoy sharing knowledge
            with the developer community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
