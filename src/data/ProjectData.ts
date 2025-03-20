import careerAssessment from "../images/CareerAssessmentTool.png";
import autoBlog from "../images/AutoBlog.png";

export const projects = [
  {
    id: 1,
    name: "AutoBlog",
    startDate: "December 2024",
    endDate: "December 2024",
    skills: ["React", "Express", "Node.js", "MongoDB"],
    imageUrl: autoBlog,
    descriptions: [
      "Developed an auto-generated blog based on current trends.",
      "Implemented real-time data processing using Bing and OpenAI API.",
      "Used Bing API to identify and retrieve current trends and popular topics.",
      "ChatGPT uses the result from Bing API and generates blog posts based on those trends.",
      "API: ChatGPT 4o-mini, and Azure Bing API.",
    ],
    // link: "https://www.google.com",
  },
  {
    id: 2,
    name: "Career Assessment Tool (Captsone Project)",
    startDate: "September 2024",
    endDate: "April 2025",
    skills: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
    imageUrl: careerAssessment,
    descriptions: [
      "A career success assessment tool for Uvaro users to evaluate their progress, where they are today, and where they want to go.",
      "Developed a user-friendly web application designed to offer a guided experience for assessing and tracking educational progress helping participants to evaluate their academic growth.",
    ],
  },
];

export const sortedProjects = projects.sort((a, b) => {
  const endDateA = new Date(a.endDate);
  const endDateB = new Date(b.endDate);
  return endDateB.getTime() - endDateA.getTime();
});
