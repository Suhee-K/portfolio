import React from "react";
import SkillTag from "./SkillTag";

interface ProjectCardProps {
  name: string;
  skills: string[];
  description: string;
  imageUrl: string;
  link?: string;
}

const ProjectCard = ({
  name,
  skills,
  description,
  imageUrl,
  link,
}: ProjectCardProps) => {
  return (
    <div className="flex justify-between mt-14 gap-20">
      <img src={imageUrl} alt="project" width={600} />
      <div className="w-full space-y-5 flex flex-col justify-center">
        <h1 className="font-semibold text-2xl">{name}</h1>

        <div className="flex gap-2">
          {skills?.map((skill, index) => (
            <SkillTag skill={skill} key={index} />
          ))}
        </div>
        <p className="pb-5">{description}</p>
        {link && (
          <a
            href={link}
            className="text-primary hover:underline inline-block self-start"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
