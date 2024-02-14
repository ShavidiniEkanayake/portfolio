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
      <div className=" mx-20">
        <div className="text-center">
          <h1 className="font-Satoshi font-black text-6xl dark:text-white text-textBlue">
            Skills
          </h1>
          <p className="font-inter font-medium text-black dark:text-white p-4">
            TOOLS & TECHNOLOGIES
          </p>
        </div>
        <div className="text-center p-5">
          <button
            className={`py-2 px-8 rounded-l-full ${
              selectedCategory === "dev"
              ? "bg-lightBlue text-white font-medium"
              : "bg-[#ffffff] text-textBlue font-medium"
            }`}
            onClick={() => setSelectedCategory("dev")}
          >
            Development
          </button>
          <button
            className={`py-2 px-8 rounded-r-full ${
              selectedCategory === "design"
              ? "bg-lightBlue text-white font-medium"
              : "bg-bglightBlue text-textBlue font-medium"
            }`}
            onClick={() => setSelectedCategory("design")}
          >
            Design
          </button>
        </div>
        <div className="text-center gap-5 flex flex-wrap justify-center">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              data-tip
              data-for={`tooltip-${index}`}
              className="relative rounded-xl border border-[#EDDCD4] shadow-[#ebebeb] shadow-lg hover:bg-bglightBlue hover:border-lightBlue"
              style={{ cursor: 'pointer' }}
            >
              <img
                src={tool.img}
                alt={`${tool.category} Logo`}
                className="h-24 transition-transform duration-300 ease-in-out transform hover:scale-110 p-5"
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
