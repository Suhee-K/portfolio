import React from "react";
import AwardCard from "../components/AwardCard";
import { sortedAward } from "../data/AwardData";

const Awards = () => {
  return (
    <div>
      <hr />
      <div className="my-16 mx-10">
        <h1 className="heading text-center">Awards</h1>
        <div className="grid grid-cols-2 gap-10">
          {sortedAward.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
