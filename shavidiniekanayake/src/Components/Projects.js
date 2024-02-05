import React, { useState, useEffect } from "react";
import ReactAsh from "../Assets/Logos/React-ash.svg";
import ExpressAsh from "../Assets/Logos/Express-ash.svg";

export const Projects = () => {
  const allProjects = [
    {
      name: "React",
      category: "dev",
    },
    {
      name: "Figma",
      category: "design",
    },
    // Add more tools as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState("dev");

  const filteredTools = allProjects.filter(
    (tool) => tool.category === selectedCategory
  );

  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <div className="mx-32">
        <div className="">
          {/* <div className="py-5">
            <button
              className={`py-2 px-8 rounded-full mr-3 ${
                selectedCategory === "dev"
                  ? "bg-lightBlue text-white font-medium"
                  : "bg-[#ffffff]  text-textBlue font-medium"
              }`}
              onClick={() => setSelectedCategory("dev")}
            >
              Development
            </button>
            <button
              className={`py-2 px-8 rounded-full mr-3 ${
                selectedCategory === "design"
                  ? "bg-lightBlue text-white font-medium"
                  : "bg-[#c3c3c3]  text-textBlue font-medium"
              }`}
              onClick={() => setSelectedCategory("design")}
            >
              UI UX
            </button>
            <button
              className={`py-2 px-8 rounded-full ${
                selectedCategory === ""
                  ? "bg-lightBlue text-white font-medium"
                  : "bg-[#c3c3c3]  text-textBlue font-medium"
              }`}
              onClick={() => setSelectedCategory("")}
            >
              Flyers Designs
            </button>
          </div> */}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <img
              src={ReactAsh}
              alt="Your Alt Text"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1">
            <h1 className="text-5xl  font-Cabinet font-extrabold dark:text-white text-textBlue my-7">
              Projects
            </h1>

            <div>
              <p className="my-5 text-textBlue font-semibold">
                I showcase my expertise in three distinct areas: Development,
                UI/UX, and Flyers Designs. Each project reflects my dedication
                to excellence and creativity.
              </p>
              {/* <p className="my-5 font-medium text-textBlue">
                For a more comprehensive view of my work, feel free to click on
                "View More"
              </p> */}
            </div>

            <div className="card">
              <a
                className="text-textBlue font-bold text-lg"
                href="#"
                onClick={() =>
                  handleLinkClick("https://gitlab.com/sliit-ds-project-y03s02")
                }
              >
                Hospital Management System
              </a>
              <div className="text-textBlue">
                Collaborative Shopping Platform Using Restful Services and
                Microservice Architecture.
              </div>
              <div className="text-[#9C9C9C] text-sm">
                React JS, Express.js, MongoDB, Node.js
              </div>
            </div>

            {/* <div className="card mt-4">
              <a
                className="text-textBlue font-bold text-lg"
                href="#"
                onClick={() =>
                  handleLinkClick(
                    "https://github.com/IT2080-ITP-2022-Feb/itp_project_group_b1-wd_b01_itp_g02"
                  )
                }
              >
                Hospital Management System
              </a>
              <div className="text-textBlue">
                Description of the second project.
              </div>
              <div className="text-[#9C9C9C] text-sm">
                React JS, Express.js, MongoDB, Node.js
              </div>
            </div> */}

            <div className="card mt-4">
              <a
                className="text-textBlue font-bold text-lg"
                href="#"
                onClick={() =>
                  handleLinkClick(
                    "https://www.figma.com/file/zfHWGNoGgl7ILOgZRowX0l/FoodLabs?type=design&node-id=0%3A1&mode=design&t=fbsY84JmrIhInQkB-1"
                  )
                }
              >
                Food Delivery Application
              </a>
              <div className="text-textBlue">
                Description of the second project.
              </div>
              <div className="text-[#9C9C9C] text-sm">Figma</div>
            </div>

            <div className="card mt-4">
              <a
                className="text-textBlue font-bold text-lg"
                href="#"
                onClick={() =>
                  handleLinkClick(
                    "https://dribbble.com/shots/21854556-What-we-do?utm_source=Clipboard_Shot&utm_campaign=shavidiniekanayake&utm_content=What%20we%20do&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=shavidiniekanayake&utm_content=What%20we%20do&utm_medium=Social_Share"
                  )
                }
              >
                What we do flyer template
              </a>
              <div className="text-textBlue">
                Description of the second project.
              </div>
              <div className="text-[#9C9C9C] text-sm">Photoshop</div>
            </div>

            <div>
              <a href="#">View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
