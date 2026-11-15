import { skillsData } from "../data/skillsData";

function SkillCategory({ title, skills, color, textColor = "text-black" }) {
  return (
    <div className="bg-white border-4 border-black p-6 rounded-2xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col justify-between">
      <div>
        <h3
          className={`font-shrikhand text-xl mb-4 ${color} ${textColor} inline-block px-3.5 py-1.5 border-2 border-black rounded-xl shadow-neo-sm tracking-wide`}
        >
          {title}
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="bg-gray-100 hover:bg-custom-yellow px-3.5 py-1.5 rounded-full border-2 border-black text-xs sm:text-sm font-bold transition-colors cursor-default flex items-center gap-2 text-black shadow-[2px_2px_0_rgba(0,0,0,1)]"
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-custom-purple border-4 border-black rounded-3xl shadow-neo my-4"
    >
      <div className="bg-custom-yellow text-black px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo">
        <h2 className="text-3xl font-shrikhand tracking-wide">SKILLS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCategory
          title="Backend Engineering"
          color="bg-custom-green"
          textColor="text-black"
          skills={skillsData.backend}
        />
        <SkillCategory
          title="Frontend Development"
          color="bg-custom-blue"
          textColor="text-black"
          skills={skillsData.frontend}
        />
        <SkillCategory
          title="Databases & Storage"
          color="bg-custom-yellow"
          textColor="text-black"
          skills={skillsData.database}
        />
        <SkillCategory
          title="Developer Tools"
          color="bg-custom-pink"
          textColor="text-black"
          skills={skillsData.tools}
        />
      </div>
    </section>
  );
}
