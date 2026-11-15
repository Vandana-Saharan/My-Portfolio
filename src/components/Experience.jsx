import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "MCA Postgrad Scholar",
      company: "Kristu Jayanti College",
      duration: "2025 – 2027",
      location: "Bengaluru, Karnataka, India",
      description:
        "Deepening specialization in Enterprise Software Architecture, Data Structures & Algorithms, Distributed Systems, Database Management Systems, and Cloud Engineering. Building scalable applications adhering to OOP design patterns and agile development methodologies.",
      color: "bg-custom-purple",
      badgeColor: "bg-custom-purple text-black",
    },
    {
      role: "Full-Stack Developer",
      company: "Personal & Academic Projects",
      duration: "2022 – Present",
      location: "Bengaluru, Karnataka, India",
      description:
        "Designing, architecting, and shipping full-stack applications utilizing Spring Boot, Node.js, Express, MySQL, MongoDB, and React. Engineered robust REST APIs, managed database relations, and created responsive, stateful client applications such as Smart Poll System, Mini Social Media App, and E-Commerce platforms.",
      color: "bg-custom-pink",
      badgeColor: "bg-custom-pink text-black",
    },
    {
      role: "BCA Graduate (Distinction)",
      company: "Kristu Jayanti College",
      duration: "2022 – 2025",
      location: "Bengaluru, Karnataka, India",
      description:
        "Graduated with 85% aggregate score with foundational mastery in Core Java, Database Concepts, Web Development, Software Engineering, and Operating Systems. Developed academic desktop and web projects.",
      color: "bg-custom-blue",
      badgeColor: "bg-custom-blue text-black",
    },
  ];

  return (
    <section id="experience" className="py-10 px-4 max-w-7xl mx-auto w-full relative">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-yellow px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand italic uppercase tracking-wide text-black">
            EXPERIENCE
          </h2>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10 pb-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-start relative group"
            >
              {/* Date & Location (Left Side) */}
              <div className="w-full lg:w-[270px] shrink-0 flex flex-col items-start gap-3 z-10">
                {/* Date Capsule */}
                <div className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 border-4 border-black rounded-full shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-sm md:text-base text-black">
                  <FaCalendarAlt className="text-black" />
                  <span>{exp.duration}</span>
                </div>

                {/* Location Pill */}
                <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 border-2 border-black rounded-full shadow-neo-sm font-bold text-xs md:text-sm text-black ml-1">
                  <FaMapMarkerAlt className="text-red-500 shrink-0 text-sm" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Desktop Connecting Horizontal Line */}
              <div className="hidden lg:block absolute top-6 left-[270px] w-14 h-1 bg-black z-0 border-t-4 border-black group-hover:bg-custom-yellow transition-colors" />

              {/* Dotted Wavy Line */}
              {index !== experiences.length - 1 && (
                <div className="hidden lg:block absolute top-[45px] -bottom-[70px] left-[270px] w-14 -z-10 pointer-events-none">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 50 0 C 120 25, -20 75, 50 100"
                      stroke="black"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="2 12"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              )}

              {/* Main Card (Right Side) */}
              <div className="w-full grow border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col relative bg-white rounded-2xl overflow-hidden">
                {/* Window Top Bar */}
                <div
                  className={`border-b-4 border-black px-4 py-2.5 flex justify-between items-center ${exp.color}`}
                >
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
                  </div>
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
                    experience.exe
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 md:p-8 flex flex-col grow">
                  {/* Role */}
                  <h3 className="text-2xl md:text-3xl italic leading-tight mb-4 tracking-wide text-black font-shrikhand">
                    {exp.role}
                  </h3>

                  {/* Company Name Pill */}
                  <div
                    className={`inline-block ${exp.badgeColor} px-5 py-2 border-2 border-black rounded-full font-bold text-base md:text-lg shadow-[4px_4px_0_rgba(0,0,0,1)] mb-6 tracking-wide w-fit`}
                  >
                    {exp.company}
                  </div>

                  {/* Description Box */}
                  <div className="bg-gray-50 border-4 border-black rounded-xl p-5 md:p-6 shadow-sm relative overflow-hidden">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-custom-red border border-black" />
                      <div className="w-2.5 h-2.5 rounded-full bg-custom-yellow border border-black" />
                      <div className="w-2.5 h-2.5 rounded-full bg-custom-green border border-black" />
                    </div>

                    <p className="font-sans text-sm md:text-base font-semibold leading-relaxed text-gray-900">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
