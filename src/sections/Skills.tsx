import "./Skills.css";
import SkillIcon from "../components/SkillIcon";
import { skillsData } from "../data/SkillData";

const Skills = () => {
  return (
    <div>
      <hr />
      <div className="flex flex-col items-center mx-10 my-16 ">
        <h1 className="heading text-center">Skills</h1>
        <div id="skills_icons" className="flex flex-col gap-5">
          {/* <div className="flex gap-5 flex-wrap"> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 flex-wrap 2xl:grid-cols-5 mt-5">
            {skillsData.map((skill) => (
              <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
