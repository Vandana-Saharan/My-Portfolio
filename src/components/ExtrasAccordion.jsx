import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaLaptopCode, FaHeart, FaGraduationCap } from "react-icons/fa";

export default function ExtrasAccordion() {
  const [expandedId, setExpandedId] = useState("coding");

  const toggleSection = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="extras" className="flex flex-col gap-12 w-full overflow-hidden pb-10 my-6">
      {/* 1. CODING & TECHNICAL HIGHLIGHTS */}
      <motion.section
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3 }}
        className="w-[96%] md:w-[88%] lg:w-[80%] ml-auto relative bg-custom-yellow border-4 border-r-0 border-black shadow-neo rounded-l-3xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚔️</span>
            <h2 className="text-2xl md:text-3xl font-shrikhand text-black uppercase tracking-wide">
              CODING &amp; MASTERY
            </h2>
          </div>
          <button
            onClick={() => toggleSection("coding")}
            className="bg-black text-custom-yellow px-6 py-2 font-bold font-mono border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider text-sm cursor-pointer"
          >
            {expandedId === "coding" ? "Close" : "Open"}
          </button>
        </div>

        <AnimatePresence>
          {expandedId === "coding" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-10 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {/* Card 1 */}
                  <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-neo hover:-translate-y-1 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-custom-green p-3.5 rounded-2xl border-2 border-black text-2xl text-black shadow-sm">
                        <FaCode />
                      </div>
                      <div>
                        <h3 className="text-xl font-shrikhand text-black">
                          Backend Architecture
                        </h3>
                        <p className="text-xs font-mono font-bold text-gray-700">
                          Spring Boot • REST APIs • Node.js
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-800 leading-relaxed bg-gray-50 p-3.5 rounded-xl border-2 border-black/10">
                      Engineered enterprise-grade microservices and multi-tier systems with Spring Boot, JPA, MySQL, and Express. Designed clean entity relationships, JWT authorization, and high-throughput endpoints.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-neo hover:-translate-y-1 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-custom-pink p-3.5 rounded-2xl border-2 border-black text-2xl text-black shadow-sm">
                        <FaLaptopCode />
                      </div>
                      <div>
                        <h3 className="text-xl font-shrikhand text-black">
                          Modern Frontend
                        </h3>
                        <p className="text-xs font-mono font-bold text-gray-700">
                          React.js • Tailwind CSS • Vite
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-800 leading-relaxed bg-gray-50 p-3.5 rounded-xl border-2 border-black/10">
                      Crafting reactive, accessible user interfaces with clean state management, modular components, dynamic styling with Tailwind CSS, and smooth animations using Framer Motion.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* 2. ACADEMIC & PROJECT MILESTONES */}
      <motion.section
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3 }}
        className="w-[96%] md:w-[88%] lg:w-[80%] relative bg-custom-red border-4 border-l-0 border-black shadow-neo rounded-r-3xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <h2 className="text-2xl md:text-3xl font-shrikhand text-black uppercase tracking-wide">
              HIGHLIGHTS &amp; MILESTONES
            </h2>
          </div>
          <button
            onClick={() => toggleSection("milestones")}
            className="bg-black text-white px-6 py-2 font-bold font-mono border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider text-sm cursor-pointer"
          >
            {expandedId === "milestones" ? "Close" : "Open"}
          </button>
        </div>

        <AnimatePresence>
          {expandedId === "milestones" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-10 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Item 1 */}
                  <div className="border-4 border-black shadow-neo-sm hover:translate-y-[-4px] transition-all flex flex-col h-full bg-white rounded-2xl overflow-hidden">
                    <div className="border-b-4 border-black px-3 py-2 flex justify-between items-center bg-custom-yellow">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                      </div>
                      <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black">
                        project.exe
                      </span>
                    </div>
                    <div className="p-5 flex flex-col grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">Smart Poll System</h3>
                        <span className="text-2xl">🗳️</span>
                      </div>
                      <p className="font-bold text-sm text-[#E11D48] mb-2">Major Full-Stack Project</p>
                      <p className="text-xs font-medium text-gray-700 leading-relaxed border-t-2 border-black border-dashed pt-3 mt-auto">
                        Spring Boot + React live polling engine with dynamic links, instant votes, and MySQL database relations.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="border-4 border-black shadow-neo-sm hover:translate-y-[-4px] transition-all flex flex-col h-full bg-white rounded-2xl overflow-hidden">
                    <div className="border-b-4 border-black px-3 py-2 flex justify-between items-center bg-custom-blue">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                      </div>
                      <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black">
                        degree.exe
                      </span>
                    </div>
                    <div className="p-5 flex flex-col grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">BCA Academic Distinction</h3>
                        <span className="text-2xl">🎓</span>
                      </div>
                      <p className="font-bold text-sm text-[#0284C7] mb-2">85% Aggregate Score</p>
                      <p className="text-xs font-medium text-gray-700 leading-relaxed border-t-2 border-black border-dashed pt-3 mt-auto">
                        Graduated with distinction from Kristu Jayanti College, demonstrating academic excellence in computing.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="border-4 border-black shadow-neo-sm hover:translate-y-[-4px] transition-all flex flex-col h-full bg-white rounded-2xl overflow-hidden">
                    <div className="border-b-4 border-black px-3 py-2 flex justify-between items-center bg-custom-green">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                      </div>
                      <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black">
                        cloud.exe
                      </span>
                    </div>
                    <div className="p-5 flex flex-col grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">Cloud &amp; Deployment</h3>
                        <span className="text-2xl">⚡</span>
                      </div>
                      <p className="font-bold text-sm text-[#059669] mb-2">Vercel &amp; Render</p>
                      <p className="text-xs font-medium text-gray-700 leading-relaxed border-t-2 border-black border-dashed pt-3 mt-auto">
                        Deployed production-grade React apps and Express backends with environment config and SSL pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* 3. BEYOND CODE */}
      <motion.section
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3 }}
        className="w-[96%] md:w-[88%] lg:w-[80%] ml-auto relative bg-custom-purple border-4 border-r-0 border-black shadow-neo rounded-l-3xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💡</span>
            <h2 className="text-2xl md:text-3xl font-shrikhand text-black uppercase tracking-wide">
              BEYOND CODE
            </h2>
          </div>
          <button
            onClick={() => toggleSection("beyond-code")}
            className="bg-black text-white px-6 py-2 font-bold font-mono border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider text-sm cursor-pointer"
          >
            {expandedId === "beyond-code" ? "Close" : "Open"}
          </button>
        </div>

        <AnimatePresence>
          {expandedId === "beyond-code" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-10 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-neo hover:-translate-y-1 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <FaHeart className="text-3xl text-[#FB7185]" />
                      <h3 className="text-2xl font-shrikhand text-black">
                        Lifelong Learner
                      </h3>
                    </div>
                    <p className="font-bold text-sm text-gray-700 mb-3">
                      Curiosity &amp; Continuous Improvement
                    </p>
                    <p className="text-sm font-medium leading-relaxed bg-gray-50 p-4 rounded-xl border-2 border-black/10 text-gray-800">
                      Always exploring new tech stacks, modern frameworks, backend optimizations, and software architectures to solve meaningful real-world challenges.
                    </p>
                  </div>

                  <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-neo hover:-translate-y-1 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <FaGraduationCap className="text-3xl text-[#38BDF8]" />
                      <h3 className="text-2xl font-shrikhand text-black">
                        Community &amp; Teamwork
                      </h3>
                    </div>
                    <p className="font-bold text-sm text-gray-700 mb-3">
                      Collaborative Engineering
                    </p>
                    <p className="text-sm font-medium leading-relaxed bg-gray-50 p-4 rounded-xl border-2 border-black/10 text-gray-800">
                      Active participant in technical seminars, group code reviews, and academic tech discussions at Kristu Jayanti College. Passionate about shared growth.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}
