import ProjectCard from "../components/ProjectCard";
import { sortedProjects } from "../data/ProjectData";

const Projects = () => {
  return (
    <div>
      <hr />
      <div className="my-16 md:mx-10 2xl:mx-auto 2xl:w-1/2">
        <h1 className="heading text-center">Projects</h1>
        {sortedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
