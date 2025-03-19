export const awards = [
  {
    id: 1,
    title: "First place at SAIT Hack Hackathon",
    date: "December 2023",
  },
  {
    id: 2,
    title: "First place at YYC Hacks",
    date: "February 2024",
  },
];

export const sortedAward = awards.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});
