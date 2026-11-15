import Blackboard from "./ui/Blackboard";
import { educationData } from "../data/educationData";

function EduCard({ year, degree, institution, achievements, color }) {
  return (
    <div
      className={`relative bg-white border-4 border-black p-6 rounded-3xl shadow-neo hover:-translate-y-1 transition-transform ${color}`}
    >
      {/* Year Tag Rotated */}
      <div className="absolute -top-4 -left-3 bg-black text-white font-mono font-bold py-1 px-3.5 rounded-lg border-2 border-white shadow-sm rotate-[-4deg] text-xs uppercase tracking-wider">
        {year}
      </div>

      <div className="mt-3">
        <h3 className="text-xl font-shrikhand leading-tight mb-1 text-black">
          {degree}
        </h3>
        <p className="font-bold text-sm text-gray-800 mb-3">{institution}</p>
        <div className="text-sm font-medium bg-gray-50 p-3.5 rounded-xl border-2 border-black/15 text-gray-900 shadow-sm">
          <ul className="list-disc list-inside space-y-1 font-medium">
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const cardColors = ["bg-indigo-50", "bg-amber-50", "bg-emerald-50"];

  return (
    <section
      id="education"
      className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-custom-green border-4 border-black rounded-3xl shadow-neo my-4"
    >
      {/* Header Pill */}
      <div className="flex justify-center mb-10">
        <div className="bg-white px-8 py-3 rounded-full border-4 border-black w-fit shadow-neo">
          <h2 className="text-3xl font-shrikhand text-black tracking-wide">
            EDUCATION
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Timeline Cards */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 relative">
          {/* Dashed timeline backline */}
          <div className="absolute left-8 top-10 bottom-10 w-1 bg-black border-l-4 border-black border-dashed -z-10 opacity-30" />

          {educationData.map((edu, idx) => (
            <EduCard
              key={edu.id}
              year={edu.year}
              degree={edu.degree}
              institution={edu.institution}
              achievements={edu.achievements}
              color={cardColors[idx % cardColors.length]}
            />
          ))}
        </div>

        {/* Right Side: Blackboard Chalkboard Canvas */}
        <div className="w-full lg:w-2/3 sticky top-24">
          <Blackboard />
          <p className="text-center font-mono font-bold mt-4 bg-white text-black text-xs sm:text-sm px-5 py-2 border-2 border-black rounded-full shadow-neo-sm mx-auto block w-fit">
            ✨ Bored? Doodle something cool on the chalkboard!
          </p>
        </div>
      </div>
    </section>
  );
}
