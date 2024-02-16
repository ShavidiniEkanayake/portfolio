import React, { useState } from "react";
import ReactIconDark from "../Assets/Logos/skill-icons_react-dark.svg";
import FigmaIconDark from "../Assets/Logos/skill-icons_figma-dark.svg";
import FigmaAsh from "../Assets/Logos/solar_figma-bold-duotone.svg"
import AdobePS from "../Assets/Logos/devicon_photoshop.svg";
import AdobePsAsh from "../Assets/Logos/PSAsh.svg"
import AdobeAI from "../Assets/Logos/skill-icons_illustrator.svg";
import AdobeXD from "../Assets/Logos/skill-icons_xd.svg";
import XDDark from "../Assets/Logos/skill-icons_xdDark.svg"
import WebFlow from "../Assets/Logos/skill-icons_webflowAsh.svg";
import WebFlowDark from "../Assets/Logos/skill-icons_webflow.svg"
import Bootstrap from "../Assets/Logos/devicon_bootstrap.svg";
import Mysql from "../Assets/Logos/Mysqlash.svg";
import MysqlDark from "../Assets/Logos/Mysql.svg"
import CSS from "../Assets/Logos/skill-icons_css.svg";
import MongoDB from "../Assets/Logos/skill-icons_mongodb.svg";
import NextJs from "../Assets/Logos/skill-icons_nextjs-dark.svg";
import Node from "../Assets/Logos/skill-icons_nodejs-ash.svg";
import NodeDark from "../Assets/Logos/skill-icons_nodejs-dark.svg"
import SASS from "../Assets/Logos/skill-icons_sass.svg"
import Tailwind from "../Assets/Logos/skill-icons_tailwindcss-dark.svg"
import ExpressJs from "../Assets/Logos/skill-icons_expressjs-dark.svg";
import ExpressAsh from "../Assets/Logos/skill-icons_expressjs-ash.svg";
import HTML from "../Assets/Logos/skill-icons_html.svg";
import JavaDark from "../Assets/Logos/skill-icons_java-dark.svg";
import JavaAsh from "../Assets/Logos/skill-icons_java-ash.svg"
import Js from "../Assets/Logos/skill-icons_javascriptAsh.svg"
import JsDark from "../Assets/Logos/skill-icons_javascript.svg"
import ColoredMongodb from "../Assets/Logos/Colored_Mogodb.svg"
import Colored_logos_react from "../Assets/Logos/Colored_logos_react.svg"
import Colored_logos_tailwindcssicon from "../Assets/Logos/Colored_logos_tailwindcss-icon.svg"
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

export const Skills = () => {
  const allTools = [
    {
      name: "React",
      category: "dev",
      img: ReactIconDark,
     colorimg:Colored_logos_react
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
      colorimg: MysqlDark
    },
    {
      name: "Express js",
      category: "dev",
      img: ExpressAsh,
      colorimg: ExpressJs
    },
    {
      name: "HTML",
      category: "dev",
      img: HTML,
    },
    {
      name: "Java",
      category: "dev",
      img: JavaAsh,
      colorimg: JavaDark
    },
    {
      name: "JavaScript",
      category: "dev",
      img: Js,
      colorimg: JsDark
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
      colorimg: ColoredMongodb
    },
    {
      name: "Node",
      category: "dev",
      img: Node,
      colorimg: NodeDark
    },
    {
      name: "Tailwind",
      category: "dev",
      img: Tailwind,
      colorimg:Colored_logos_tailwindcssicon
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
      img: FigmaAsh,
      colorimg: FigmaIconDark
    },
    {
      name: "Adobe Photoshop",
      category: "design",
      img: AdobePS,
      colorimg: AdobePS,
      className: "brightness-125 contrast-50 hover:brightness-100 hover:contrast-100"
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
      colorimg: XDDark
    },
    {
      name: "WebFlow",
      category: "design",
      img: WebFlow,
      colorimg: WebFlowDark
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="my-10">
      <div className={`bg-bgorange dark:bg-darkmode text-black py-3`}>
      <div className=" mx-20">
        <div className="text-center">
          <h1 className="font-Satoshi font-black text-6xl dark:text-white my-10">
            Skills
          </h1>
        </div>
        
        <div className="text-center gap-4 flex flex-wrap justify-center">
          {allTools.map((tool, index) => (
            <div
              key={index}
              data-tip
              data-for={`tooltip-${index}`}
              className={`relative border-[#EDDCD4] transform object-cover grayscale transition-all duration-300 ease-in-out hover:grayscale-0 origin-center ${tool.className ? tool.className : ""} ${
                hoveredIndex === index ? "scale-105" : "scale-100"
              }`}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                 src={tool.img}
                 alt={`${tool.category} Logo`}
                 className="h-24 p-5"
              />
              <ReactTooltip id={`tooltip-${index}`} effect="solid" place="bottom">
                {tool.name} Tooltip
              </ReactTooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
