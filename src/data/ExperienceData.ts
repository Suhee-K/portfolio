export const companies = [
  {
    id: 1,
    title: "Health Information Management: 2nd Year Practicum (Remote)",
    companyName: "Provincial Addiction and Mental Health Department",
    startDate: "May 2022",
    endDate: "June 2022",
    address: "Edmonton, AB",
    descriptions: [
      "Developed expertise in SQL scripting by writing and executing SQL scripts to retrieve and manipulate data.",
      "Demonstrated proficiency in data management and database manipulation through SQL scripting techniques.",
      "Conducted parts of a literature review, collected data, and analyzed results using SQL scripts, contributing to the evaluation of research findings.",
    ],
  },
  {
    id: 2,
    title: "Front-end Developer Volunteer",
    companyName: "Empowered Futures",
    startDate: "May 2024",
    endDate: "Present",
    address: "Calgary, AB",
    descriptions: [
      "Developed and implemented the web application to help users find matching meteor-mentee.",
      "Took responsibility on a specific page, adjusting based on feedback throughout the agile process.",
      "Ensured the application was responsive and mobile-friendly.",
      "Participated in code reviews and contributed to the team’s best practices for maintainable, scalable code.",
      "Used React and Tailwind CSS to build components based on Figma designs.",
    ],
    website: "https://www.empoweredfutures.ca/",
  },
];

export const sortedCompanies = companies.sort((a, b) => {
  const dateA = new Date(a.startDate);
  const dateB = new Date(b.startDate);
  return dateB.getTime() - dateA.getTime();
});
