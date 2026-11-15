import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import resumeFile from "../resume/Vandana.pdf?url";
import { resumeProfile, resumeExperience } from "../data/resumeData";
import { educationData } from "../data/educationData";
import { skillsData } from "../data/skillsData";
import { projectsData } from "../data/projectsData";
import { useTheme } from "../context/ThemeContext";

const skillGroups = [
  { key: "frontend", label: "Frontend", color: "bg-pink-300" },
  { key: "backend", label: "Backend", color: "bg-green-300" },
  { key: "database", label: "Databases", color: "bg-yellow-300" },
  { key: "tools", label: "Tools", color: "bg-sky-300" },
];

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const paper = isDark
    ? "bg-slate-900 border-black text-slate-100"
    : "bg-white border-black text-slate-900";

  return (
    <section
      id="resume"
      ref={ref}
      className={`py-24 px-6 relative overflow-hidden ${
        isDark ? "bg-slate-950" : "bg-[#A78BFA]/15"
      }`}
    >
      <div className="absolute -top-10 right-10 w-48 h-48 rounded-full bg-pink-300/40 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-6 w-56 h-56 rounded-full bg-yellow-300/30 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <h2
              className={`inline-block px-5 py-2 rounded-xl border-2 border-black shadow-[6px_6px_0_#000] font-black tracking-tight text-3xl md:text-4xl ${
                isDark ? "bg-indigo-500 text-white" : "bg-[#4ADE80] text-black"
              }`}
            >
              RESUME
            </h2>
            <p
              className={`mt-4 max-w-xl font-medium ${
                isDark ? "text-slate-400" : "text-slate-700"
              }`}
            >
              A compact, downloadable snapshot of my education, skills, and
              projects — styled as a live document.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={resumeFile}
              download="Vandana-Saharan-Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#4ADE80] text-black font-bold rounded-xl border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] transition-all"
            >
              <DownloadIcon />
              DOWNLOAD_RESUME
            </a>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#FF9FAC] text-black font-bold rounded-xl border-2 border-black shadow-[4px_4px_0_#000] hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] transition-all"
            >
              OPEN PDF
            </a>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className={`rounded-2xl border-2 ${paper} shadow-[8px_8px_0_#000] overflow-hidden`}
        >
          <div
            className={`flex items-center gap-2 px-4 py-3 border-b-2 border-black ${
              isDark ? "bg-slate-800" : "bg-slate-100"
            }`}
          >
            <span className="w-3 h-3 rounded-full bg-[#F87171] border border-black" />
            <span className="w-3 h-3 rounded-full bg-[#FCD34D] border border-black" />
            <span className="w-3 h-3 rounded-full bg-[#4ADE80] border border-black" />
            <span className="ml-3 font-mono text-sm font-bold">resume.pdf</span>
          </div>

          <div className="p-6 md:p-10 space-y-10">
            <header className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
              <div>
                <p className="font-mono text-xs font-bold tracking-widest text-indigo-500 mb-2">
                  FULL_STACK_DEVELOPER()
                </p>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
                  {resumeProfile.name}
                </h3>
                <p
                  className={`mt-3 text-lg font-medium ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {resumeProfile.summary}
                </p>
              </div>

              <div className="space-y-2 font-mono text-sm">
                <MetaRow label="LOCATION" value={resumeProfile.location} />
                <MetaRow label="STATUS" value={resumeProfile.status} />
                <MetaRow label="MISSION" value={resumeProfile.mission} />
                <a
                  href={`mailto:${resumeProfile.email}`}
                  className="block hover:underline"
                >
                  <MetaRow label="EMAIL" value={resumeProfile.email} />
                </a>
                <a
                  href={resumeProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  <MetaRow label="GITHUB" value="Vandana-Saharan" />
                </a>
              </div>
            </header>

            <Section title="experience.exe" accent="bg-[#FF9FAC]">
              {resumeExperience.map((exp) => (
                <div
                  key={exp.id}
                  className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8"
                >
                  <div className="space-y-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FCD34D] border-2 border-black text-xs font-bold">
                      {exp.duration}
                    </span>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {exp.location}
                    </p>
                  </div>
                  <div
                    className={`rounded-xl border-2 border-black p-5 ${
                      isDark ? "bg-slate-800" : "bg-white"
                    }`}
                  >
                    <h4 className="text-xl font-black">{exp.role}</h4>
                    <span className="inline-block mt-2 mb-3 px-3 py-1 rounded-full bg-indigo-200 text-black border-2 border-black text-xs font-bold">
                      {exp.company}
                    </span>
                    <p
                      className={`leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </Section>

            <Section title="skills.json" accent="bg-[#A78BFA]">
              <div className="grid sm:grid-cols-2 gap-4">
                {skillGroups.map((group) => (
                  <div
                    key={group.key}
                    className={`rounded-xl border-2 border-black p-4 ${
                      isDark ? "bg-slate-800" : "bg-white"
                    }`}
                  >
                    <h4
                      className={`inline-block px-2 py-0.5 rounded-md border-2 border-black text-sm font-black mb-3 ${group.color} text-black`}
                    >
                      {group.label}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillsData[group.key].map((skill) => (
                        <span
                          key={skill.name}
                          className={`px-2.5 py-1 rounded-md border-2 border-black text-xs font-bold ${
                            isDark
                              ? "bg-slate-900 text-slate-100"
                              : "bg-slate-50 text-slate-800"
                          }`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="projects/" accent="bg-[#60A5FA]">
              <ul className="space-y-4">
                {projectsData.slice(0, 4).map((project) => (
                  <li
                    key={project.id}
                    className={`rounded-xl border-2 border-black p-4 ${
                      isDark ? "bg-slate-800" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-black text-lg">{project.title}</h4>
                      {project.subtitle && (
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FCD34D] border border-black">
                          {project.subtitle}
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-bold rounded border-2 border-black bg-indigo-100 text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="education.log" accent="bg-[#4ADE80]">
              <div className="space-y-4">
                {educationData.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-xl border-2 border-black p-5 ${
                      isDark ? "bg-slate-800" : "bg-white"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-pink-200 border-2 border-black text-xs font-bold text-black">
                      {item.year}
                    </span>
                    <h4 className="mt-3 text-xl font-black">{item.degree}</h4>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {item.institution}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className={`text-sm ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function Section({ title, accent, children }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`px-3 py-1 rounded-lg border-2 border-black font-mono text-sm font-black ${accent} text-black`}
        >
          {title}
        </span>
        <span className="flex-1 h-0.5 bg-black/80" />
      </div>
      {children}
    </div>
  );
}

function MetaRow({ label, value }) {
  return (
    <p className="flex flex-wrap gap-x-2">
      <span className="font-black text-indigo-500">[{label}]</span>
      <span>{value}</span>
    </p>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}
