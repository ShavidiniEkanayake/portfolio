import React, { useState, useEffect } from "react";

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
      <div className="mx-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold dark:text-white text-textBlue">
            Projects
          </h1>
        </div>

        <div className="text-center p-5">
          <button
            className={`py-2 px-8 rounded-l-full ${
              selectedCategory === "dev"
                ? "bg-lightBlue text-white font-medium"
                : "bg-[#ffffff]  text-textBlue font-medium"
            }`}
            onClick={() => setSelectedCategory("dev")}
          >
            Development
          </button>
          <button
            className={`py-2 px-8 rounded-r-full ${
              selectedCategory === "design"
                ? "bg-lightBlue text-white font-medium"
                : "bg-[#c3c3c3]  text-textBlue font-medium"
            }`}
            onClick={() => setSelectedCategory("design")}
          >
            Design
          </button>
        </div>
      </div>
    </div>
  );
};
