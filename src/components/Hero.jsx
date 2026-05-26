import { motion } from "framer-motion";
import profileImage from "../assets/vandana.jpg";
import resumeFile from "../resume/VANDANA_RESUME.docx?url";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  const bgGradient =
    theme === "dark"
      ? "from-slate-900 via-indigo-950/30 to-slate-900"
      : "from-slate-50 via-indigo-50/50 to-slate-50";

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center px-6 pt-20 pb-16 bg-gradient-to-br ${bgGradient} animate-gradient`}
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-72 h-72 md:w-80 md:h-80"
            >
              <div
                className={`absolute inset-0 rounded-full animate-pulse ${
                  theme === "dark"
                    ? "bg-indigo-500/30 blur-xl"
                    : "bg-indigo-400/40 blur-xl"
                }`}
              />
              <img
                src={profileImage}
                alt="Vandana Saharan"
                className="relative w-full h-full object-cover object-top rounded-full border-4 border-white shadow-2xl dark:border-slate-700"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              Vandana Saharan
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6"
          >
            Backend Developer (with Frontend Knowledge)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I build scalable, secure, and user-friendly web applications using
            Spring Boot, MySQL, and React. I am passionate about solving
            real-world problems through clean, efficient, and maintainable code.
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
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-xl font-medium hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-slate-900 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
