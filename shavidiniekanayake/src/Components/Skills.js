import React, { useState } from "react";
import ReactIconDark from "../Assets/Logos/skill-icons_react-dark.svg";
import FigmaIconDark from "../Assets/Logos/skill-icons_figma-dark.svg";
import AdobePS from "../Assets/Logos/devicon_photoshop.svg";
import AdobeAI from "../Assets/Logos/skill-icons_illustrator.svg";
import AdobeXD from "../Assets/Logos/skill-icons_xd.svg";
import WebFlow from "../Assets/Logos/skill-icons_webflow.svg";
import Bootstrap from "../Assets/Logos/devicon_bootstrap.svg";
import Mysql from "../Assets/Logos/Mysql.svg";
import CSS from "../Assets/Logos/skill-icons_css.svg";
import MongoDB from "../Assets/Logos/skill-icons_mongodb.svg";
import NextJs from "../Assets/Logos/skill-icons_nextjs-dark.svg";
import Node from "../Assets/Logos/skill-icons_nodejs-dark.svg";
import SASS from "../Assets/Logos/skill-icons_sass.svg"
import Tailwind from "../Assets/Logos/skill-icons_tailwindcss-dark.svg"
import ExpressJs from "../Assets/Logos/skill-icons_expressjs-dark.svg";
import HTML from "../Assets/Logos/skill-icons_html.svg";
import Java from "../Assets/Logos/skill-icons_java-dark.svg";
import Js from "../Assets/Logos/skill-icons_javascript.svg"
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const Skills = () => {
  const allTools = [
    {
      name: "React",
      category: "dev",
      img: ReactIconDark,
    },
    {
      name: "Bootstrap",
      category: "dev",
      img: Bootstrap,
    },
    {
      name: "Mysql",
      category: "dev",
      img: Mysql,
    },
    {
      name: "Express js",
      category: "dev",
      img: ExpressJs,
    },
    {
      name: "HTML",
      category: "dev",
      img: HTML,
    },
    {
      name: "Java",
      category: "dev",
      img: Java,
    },
    {
      name: "JavaScript",
      category: "dev",
      img: Js,
    },
    {
      name: "CSS",
      category: "dev",
      img: CSS,
    },
    {
      name: "MongoDB",
      category: "dev",
      img: MongoDB,
    },
    {
      name: "Node",
      category: "dev",
      img: Node,
    },
    {
      name: "Tailwind",
      category: "dev",
      img: Tailwind,
    },
    {
      name: "SASS",
      category: "dev",
      img: SASS,
    },
    {
      name: "NextJs",
      category: "dev",
      img: NextJs,
    },
    {
      name: "Figma",
      category: "design",
      img: FigmaIconDark,
    },
    {
      name: "Adobe Photoshop",
      category: "design",
      img: AdobePS,
    },
    {
      name: "Adobe Illustrator",
      category: "design",
      img: AdobeAI,
    },
    {
      name: "Adobe XD",
      category: "design",
      img: AdobeXD,
    },
    {
      name: "WebFlow",
      category: "design",
      img: WebFlow,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("dev");

  const filteredTools = allTools.filter(
    (tool) => tool.category === selectedCategory
  );

  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <div className=" mx-10">
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
              selectedCategory === "dev"
                ? "bg-black text-white font-inter font-medium"
                : "bg-[#ffffff] border border-[#7b7b7b] text-black font-iter font-medium"
            }`}
            onClick={() => setSelectedCategory("dev")}
          >
            Development
          </button>
          <button
            className={`py-2 px-8 rounded-r-full ${
              selectedCategory === "design"
                ? "bg-black text-white font-inter font-medium"
                : "bg-[#c3c3c3] text-black font-iter font-medium"
            }`}
            onClick={() => setSelectedCategory("design")}
          >
            Design
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              data-tip
              data-for={`tooltip-${index}`}
              className="mx-4 relative"
              style={{ cursor: 'pointer' }}
            >
              <img
                src={tool.img}
                alt={`${tool.category} Logo`}
                className="h-20 transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <ReactTooltip id={`tooltip-${index}`} effect="solid" place="bottom">
                {tool.name} Tooltip
              </ReactTooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
