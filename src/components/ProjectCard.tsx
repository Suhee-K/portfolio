import SkillTag from "./SkillTag";

interface ProjectCardProps {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  skills: string[];
  descriptions: string[];
  imageUrl: string;
  link?: string;
}

const ProjectCard = ({
  id,
  name,
  startDate,
  endDate,
  skills,
  descriptions,
  imageUrl,
  link,
}: ProjectCardProps) => {
  return (
    <div className="flex justify-between mt-14 gap-20">
      <img src={imageUrl} alt="project" width={600} />
      <div className="w-full space-y-5 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          {id === 2 ? (
            <h1 className="font-semibold text-xl">{name}</h1>
          ) : (
            <h1 className="font-semibold text-2xl">{name}</h1>
          )}
          {startDate === endDate ? (
            <p>{startDate}</p>
          ) : (
            <p>
              {startDate} - {endDate}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          {skills?.map((skill, index) => (
            <SkillTag skill={skill} key={index} />
          ))}
        </div>
        {/* <p className="pb-5">{description}</p> */}
        {descriptions && (
          <ul className="list-disc ml-5">
            {descriptions.map((description, index) => (
              <li key={index} className="text-base">
                {description}
              </li>
            ))}
          </ul>
        )}

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
