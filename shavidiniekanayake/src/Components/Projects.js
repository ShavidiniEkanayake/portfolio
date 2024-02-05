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
  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <div className="mx-32">
        <div className="">
          <h1 className="text-5xl font-bold dark:text-white text-textBlue">
            Projects
          </h1>
          
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
          <p className="my-5">All projects widnvjkolp; djoljpo</p>
            <div className="card">
              <div className="text-textBlue font-medium text-lg">
                Collaborative Shopping Platform
              </div>
              <div className="text-textBlue">
                Collaborative Shopping Platform Using Restful Services and
                Microservice Architecture.
              </div>
              <div className="text-[#9C9C9C] text-sm my-3">
                React JS, Express.js, MongoDB, Node.js
              </div>
            </div>

            <div className="card mt-4">
              <div className="text-textBlue font-medium text-lg">
                Another Project Title
              </div>
              <div className="text-textBlue">
                Description of the second project.
              </div>
              <div className="text-[#9C9C9C] text-sm my-3">
                Technologies used in the second project
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <img
              src={ReactAsh}
              alt="Your Alt Text"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
