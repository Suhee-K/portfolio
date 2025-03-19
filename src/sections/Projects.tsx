import ProjectCard from "../components/ProjectCard";
import { sortedProjects } from "../data/ProjectData";

const Projects = () => {
  return (
    <div>
      <hr />
      <div className="my-16 mx-10 ">
        <h1 className="heading text-center">Projects</h1>
        {sortedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
