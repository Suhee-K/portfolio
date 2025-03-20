import React from "react";

interface AwardCardProps {
  id: number;
  title: string;
  date: string;
  image?: string;
  link?: string;
}

const AwardCard = ({ id, title, date, image, link }: AwardCardProps) => {
  return (
    <div>
      <div className="flex justify-center mt-14 gap-20 h-96">
        <img src={image} alt="project" width={600} className="rounded-lg" />
      </div>
      <div className="mt-4 flex flex-col items-center gap-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">{date}</p>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="link">
            News
          </a>
        )}
      </div>
    </div>
  );
};

export default AwardCard;
