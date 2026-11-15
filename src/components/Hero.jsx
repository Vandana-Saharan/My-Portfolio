import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import profileImage from "../assets/vandana.jpg";
import resumeFile from "../resume/Vandana.pdf?url";
import MiniTerminal from "./ui/MiniTerminal";

export default function Hero({ onOpenContact }) {
  return (
    <section className="pt-4 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">
      {/* Left Column: ID / Profile Card */}
      <div className="w-full md:w-1/3 bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden">
        {/* Tape decoration */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#FDE68A]/80 w-24 h-6 rotate-[-4deg] border border-gray-400 pointer-events-none" />

        {/* Profile Avatar */}
        <div className="w-36 h-36 bg-custom-purple rounded-full border-4 border-black mb-4 flex items-center justify-center overflow-hidden shadow-neo-sm mt-3">
          <img
            src={profileImage}
            alt="Vandana Saharan"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl font-shrikhand mb-1 text-black">VANDANA</h1>
        <div className="bg-black text-white px-3.5 py-1 font-mono text-xs sm:text-sm font-bold rounded-md mb-5 rotate-1 shadow-sm">
          FULL_STACK_DEVELOPER()
        </div>

        {/* Metadata Details */}
        <div className="w-full space-y-3 text-left font-bold text-sm font-mono border-t-2 border-black pt-4">
          <div className="flex items-center">
            <span className="bg-custom-yellow text-black px-2 py-0.5 border border-black mr-2 text-xs rounded shadow-sm">
              [LOCATION]
            </span>
            <span className="truncate">Bengaluru, India</span>
          </div>
          <div className="flex items-center">
            <span className="bg-custom-green text-black px-2 py-0.5 border border-black mr-2 text-xs rounded shadow-sm">
              [STATUS]
            </span>
            <span className="truncate">MCA Postgrad Scholar</span>
          </div>
          <div className="flex items-center">
            <span className="bg-custom-blue text-black px-2 py-0.5 border border-black mr-2 text-xs rounded shadow-sm">
              [MISSION]
            </span>
            <span className="truncate">Code. Build. Ship.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3 mt-6">
          <a
            href={resumeFile}
            download="Vandana-Saharan-Resume.pdf"
            className="bg-[#86EFAC] hover:bg-[#4ADE80] text-black w-full py-3 rounded-xl border-2 border-black font-black shadow-neo-sm hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-sm"
          >
            <FaDownload /> DOWNLOAD_RESUME
          </a>
          <button
            onClick={onOpenContact}
            className="bg-[#FB7185] hover:bg-[#F43F5E] text-white w-full py-3 rounded-xl border-2 border-black font-black shadow-neo-sm hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-sm drop-shadow-[1px_1px_0_rgba(0,0,0,1)]"
          >
            <FaEnvelope /> CONTACT ME
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-6 text-2xl flex-wrap justify-center items-center">
          <a
            href="mailto:vandanasaharan11@gmail.com"
            title="Email Vandana"
            className="hover:scale-110 transition-transform text-red-500 hover:rotate-6 p-2 rounded-full border-2 border-transparent hover:border-black hover:bg-yellow-100"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Vandana-Saharan"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="hover:scale-110 transition-transform text-black hover:-rotate-6 p-2 rounded-full border-2 border-transparent hover:border-black hover:bg-gray-100"
          >
            <FaGithub />
          </a>
          <a
            href="http://linkedin.com/in/vandana-0bb224283"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="hover:scale-110 transition-transform text-blue-700 hover:rotate-6 p-2 rounded-full border-2 border-transparent hover:border-black hover:bg-blue-100"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Column: Bio Card + Mini Terminal */}
      <div className="w-full md:w-2/3 flex flex-col gap-6" id="about">
        {/* Bio Card in Warm Honey Butter */}
        <div className="bg-[#FEF9C3] p-6 md:p-10 rounded-3xl border-4 border-black shadow-neo">
          <h2 className="text-3xl md:text-4xl font-shrikhand mb-5 text-black">
            Hi people! 👋
          </h2>
          <p className="text-base md:text-lg font-medium leading-relaxed mb-4 text-black">
            I am a <span className="font-bold bg-white px-2.5 py-0.5 border-2 border-black rounded-lg shadow-sm">Master of Computer Applications (MCA) scholar at Kristu Jayanti College, Bengaluru</span>.
            I architect and engineer clean, scalable backend systems paired with smooth, interactive user interfaces.
          </p>
          <p className="text-base md:text-lg font-medium leading-relaxed mb-5 text-black">
            My core stack is built on <span className="font-bold bg-white px-2.5 py-0.5 border-2 border-black rounded-lg shadow-sm">Spring Boot</span>, <span className="font-bold bg-white px-2.5 py-0.5 border-2 border-black rounded-lg shadow-sm">Node.js / Express</span>, <span className="font-bold bg-white px-2.5 py-0.5 border-2 border-black rounded-lg shadow-sm">MySQL</span>, <span className="font-bold bg-white px-2.5 py-0.5 border-2 border-black rounded-lg shadow-sm">MongoDB</span>, and <span className="font-bold bg-white px-2.5 py-0.5 border-2 border-black rounded-lg shadow-sm">React</span>.
            I focus on designing clean REST APIs, modular database schemas, and robust software architectures.
          </p>
          <div className="bg-white text-black p-4 border-2 border-black rounded-xl inline-block font-bold shadow-neo-sm text-sm md:text-base">
            🚀 Open to Software Engineering, Backend &amp; Full-Stack Opportunities
          </div>
        </div>

        {/* Terminal Widget */}
        <MiniTerminal />
      </div>
    </section>
  );
}
