import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <hr />
      <div className="my-16 mx-10">
        <h1 className="heading text-center">Projects</h1>
        <ProjectCard
          name="Project 1"
          skills={["JavaScript", "TypeScript"]}
          imageUrl="https://www.greengeeks.com/tutorials/wp-content/uploads/2020/07/news-blog-stylish-news-theme.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores aspernatur quae unde dolorem deleniti at doloremque, repudiandae ab saepe cumque dignissimos possimus eum veritatis autem nemo illum consectetur nesciunt?"
          link="https://www.google.com"
        />
        <ProjectCard
          name="Project 1"
          skills={["JavaScript", "TypeScript"]}
          imageUrl="https://www.greengeeks.com/tutorials/wp-content/uploads/2020/07/news-blog-stylish-news-theme.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores aspernatur quae unde dolorem deleniti at doloremque, repudiandae ab saepe cumque dignissimos possimus eum veritatis autem nemo illum consectetur nesciunt?"
          link="https://www.google.com"
        />
        <ProjectCard
          name="Project 1"
          skills={["JavaScript", "TypeScript"]}
          imageUrl="https://www.greengeeks.com/tutorials/wp-content/uploads/2020/07/news-blog-stylish-news-theme.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores aspernatur quae unde dolorem deleniti at doloremque, repudiandae ab saepe cumque dignissimos possimus eum veritatis autem nemo illum consectetur nesciunt?"
          link="https://www.google.com"
        />
        <ProjectCard
          name="Project 1"
          skills={["JavaScript", "TypeScript"]}
          imageUrl="https://www.greengeeks.com/tutorials/wp-content/uploads/2020/07/news-blog-stylish-news-theme.png"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores aspernatur quae unde dolorem deleniti at doloremque, repudiandae ab saepe cumque dignissimos possimus eum veritatis autem nemo illum consectetur nesciunt?"
          link="https://www.google.com"
        />
      </div>
    </div>
  );
};

export default Projects;
