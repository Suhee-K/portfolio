import React from "react";
import { Button } from "devextreme-react/button";

interface SkillIconProps {
  icon: string;
  name: string;
}

const SkillIcon = ({ icon, name }: SkillIconProps) => {
  return (
    <div
      className="py-2 px-4 bg-gray-50 rounded-lg flex items-center hover:scale-110 cursor-pointer md:w-48 w-40"
      // className="opacity: 1; transform: none;"
    >
      <Button
        type="normal"
        icon={icon}
        stylingMode="text"
        width={80}
        height={50}
        disabled={true}
      />
      <h4 className="text-sm ml-4">{name}</h4>
    </div>
    // <div
    //   className="group bg-transparent w-[90px] h-[90px] "
    //   style={{ perspective: "1000px" }}
    // >
    //   <div
    //     className="relative w-full h-full text-center transition-transform duration-1000 group-hover:[transform:rotateY(180deg)]"
    //     style={{ transformStyle: "preserve-3d" }}
    //   >
    //     {/* Front Side */}
    //     <div
    //       className="absolute w-full h-full text-black flex items-center justify-center"
    //       style={{
    //         WebkitBackfaceVisibility: "hidden",
    //         backfaceVisibility: "hidden",
    //       }}
    //     >
    //       <Button
    //         type="normal"
    //         icon={icon}
    //         stylingMode="text"
    //         width={90}
    //         height={90}
    //       />
    //     </div>

    //     {/* Back Side */}
    //     <div
    //       className="border border-primary absolute w-full h-full text-primary flex items-center justify-center rounded-lg"
    //       style={{
    //         WebkitBackfaceVisibility: "hidden",
    //         backfaceVisibility: "hidden",
    //         transform: "rotateY(180deg)",
    //       }}
    //     >
    //       <h1>{name}</h1>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SkillIcon;
