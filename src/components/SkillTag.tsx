import React from "react";

interface SkillTagProps {
  skill: string;
}

const SkillTag = ({ skill }: SkillTagProps) => {
  return (
    <div className="bg-secondary rounded-lg w-24 text-center">{skill}</div>
  );
};

export default SkillTag;
