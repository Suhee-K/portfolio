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
    <div className="flex xl:justify-around mt-14 md:gap-10 lg:gap-20 flex-wrap lg:flex-nowrap justify-center mx-10 lg:mx-0">
      <img
        src={imageUrl}
        alt="project"
        className="rounded-lg w-full lg:w-1/2 lg:ml-20 xl:ml-0"
        // className="rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
      />
      <div className="w-full space-y-5 flex flex-col justify-center mt-7 md:mt-0">
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
      </div>
      <div>
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
