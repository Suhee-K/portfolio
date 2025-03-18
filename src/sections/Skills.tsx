import React from "react";
import devexpress from "../images/devexpress.png";
import "./Skills.css";
import SkillIcon from "../components/SkillIcon";

const Skills = () => {
  return (
    <div>
      <h1 className="heading">Skills</h1>
      <div id="skills_icons" className="flex flex-col gap-5">
        <div className="flex gap-5">
          <SkillIcon
            name="React"
            icon="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
          />
          <SkillIcon
            name="C#"
            icon="https://img.icons8.com/color/48/c-sharp-logo.png"
          />
          <SkillIcon
            name="MySQL"
            icon="https://img.icons8.com/fluency/48/mysql-logo.png"
          />
          <SkillIcon
            name="Microsoft SQL Server"
            icon="https://img.icons8.com/color/48/microsoft-sql-server.png"
          />
        </div>
        <div className="flex gap-5">
          <div id="devexpress">
            <SkillIcon name="Devextreme" icon={devexpress} />
          </div>
          <SkillIcon
            name="JavaScript"
            icon="https://img.icons8.com/color/48/javascript--v1.png"
          />
          <SkillIcon
            name="HTML"
            icon="https://img.icons8.com/color/48/html-5--v1.png"
          />
          <SkillIcon
            name="CSS"
            icon="https://img.icons8.com/color/48/css3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
