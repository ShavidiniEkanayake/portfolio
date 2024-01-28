import React, { useState } from "react";
import ReactIconDark from "../Assets/Logos/skill-icons_react-dark.svg";
import FigmaIconDark from "../Assets/Logos/skill-icons_figma-dark.svg";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export const Skills = () => {
  const allTools = [
    {
        name:"React",
        category: "dev",
      img: ReactIconDark,
    },
    {
        name: "Figma",
      category: "design",
      img: FigmaIconDark,
    },
    // Add more tools as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState("dev");

  const filteredTools = allTools.filter(
    (tool) => tool.category === selectedCategory
  );

  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <div className="text-center">
        <h1 className="text-5xl font-bold dark:text-white font-inter font-">
          My Skills
        </h1>
        <p className="font-inter font-medium text-black dark:text-white p-4">
          TOOLS & TECHNOLOGIES
        </p>
      </div>
      <div className="text-center p-5">
        <button
          className={`py-2 px-8 rounded-l-full ${
            selectedCategory === "dev" ? "bg-black text-white font-inter font-medium" : "bg-[#ffffff] border border-[#7b7b7b] text-black font-iter font-medium"
          }`}
          onClick={() => setSelectedCategory("dev")}
        >
          Development
        </button>
        <button
          className={`py-2 px-8 rounded-r-full ${
            selectedCategory === "design" ? "bg-black text-white font-inter font-medium" : "bg-[#c3c3c3] text-black font-iter font-medium"
          }`}
          onClick={() => setSelectedCategory("design")}
        >
          Design
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {filteredTools.map((tool, index) => (
          <div key={index} data-tip data-for={`tooltip-${index}`}>
            <img
              src={tool.img}
              alt={`${tool.category} Logo`}
              className="mx-4 h-20"
            />
            <ReactTooltip id={`tooltip-${index}`} effect="solid">
              {tool.category} Tooltip
            </ReactTooltip>
          </div>
        ))}
      </div>
    </div>
  );
};
