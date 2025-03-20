import saitHackathon from "../images/SaitHackathon.jpg";
import yycHacks from "../images/YYCHackathon.jpg";

export const awards = [
  {
    id: 1,
    title: "First place at SAIT Hack Hackathon",
    date: "December 2023",
    image: saitHackathon,
  },
  {
    id: 2,
    title: "First place at YYC Hacks",
    date: "February 2024",
    image: yycHacks,
    link: "https://livewirecalgary.com/2024/02/05/yyc-hacks-2024-hackathon-winner-gives-newcomers-info-right-after-they-land-in-calgary/",
  },
];

export const sortedAward = awards.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});
