import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projectsData } from "../data/projectsData";

const colorRotator = [
  "bg-custom-purple",
  "bg-custom-pink",
  "bg-custom-blue",
  "bg-custom-green",
  "bg-custom-yellow",
  "bg-custom-red",
];

function ProjectCard({ project, color }) {
  const hasLive = project.liveUrl && project.liveUrl !== "#" && project.liveUrl !== "";

  return (
    <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col justify-between">
      {/* Top Accent Stripe */}
      <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`} />

      <div>
        <div className="mt-3 flex justify-between items-start mb-3 gap-2">
          <div>
            <h3 className="text-2xl font-shrikhand text-black leading-tight">
              {project.title}
            </h3>
            {hasLive ? (
              <span className="inline-block bg-[#FB7185] text-white text-[11px] font-bold px-2.5 py-0.5 border border-black rounded-md mt-1 animate-pulse shadow-sm drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
                LIVE DEMO
              </span>
            ) : project.subtitle ? (
              <span className="inline-block bg-custom-yellow text-black text-[11px] font-bold px-2 py-0.5 border border-black rounded-md mt-1 font-mono">
                {project.subtitle}
              </span>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                title="GitHub Repo"
                className="bg-black text-white p-2.5 rounded-xl border-2 border-black hover:bg-custom-yellow hover:text-black transition-colors cursor-pointer text-sm shadow-sm"
              >
                <FaGithub />
              </a>
            )}
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                title="Open Live App"
                className="bg-custom-green text-black p-2.5 rounded-xl border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer text-sm shadow-sm"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        {/* Tools Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tool) => (
            <span
              key={tool}
              className="bg-gray-100 border border-black px-2.5 py-0.5 text-xs font-bold font-mono rounded-md text-black shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm font-medium text-gray-800 border-t-2 border-black pt-4 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-2 flex gap-2 border-t border-dashed border-gray-300">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center py-2 px-3 bg-gray-100 hover:bg-black hover:text-white border-2 border-black rounded-xl font-bold font-mono text-xs transition-colors flex items-center justify-center gap-1.5 text-black shadow-sm"
        >
          <FaGithub /> CODE
        </a>
        {hasLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2 px-3 bg-custom-green text-black hover:bg-black hover:text-custom-yellow border-2 border-black rounded-xl font-bold font-mono text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <FaExternalLinkAlt /> LAUNCH
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-10 px-4 sm:px-6 md:px-8 mx-auto max-w-7xl bg-custom-yellow border-4 border-black rounded-3xl shadow-neo my-4"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand text-black tracking-wide">
            PROJECTS
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["all", "fullstack", "frontend", "backend"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full border-2 border-black font-bold font-mono text-xs uppercase cursor-pointer transition-all ${
                activeFilter === cat
                  ? "bg-black text-white shadow-neo-sm translate-y-[-2px]"
                  : "bg-white text-black hover:bg-gray-100 shadow-sm"
              }`}
            >
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            color={colorRotator[idx % colorRotator.length]}
          />
        ))}
      </div>
    </section>
  );
}
