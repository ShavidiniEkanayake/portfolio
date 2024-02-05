import React, { useState, useEffect } from "react";
import SliitLogo from "../Assets/Logos/SLIIT_Logo_Crest.png";
import ACC from "../Assets/Logos/ACC.jpeg";
import iTelasoft from "../Assets/Logos/iTelasoft.png";
import SI from "../Assets/Logos/SI.png";

export const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState("edu");
  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <div className="mx-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold dark:text-white text-textBlue">
            My Experience
          </h1>

          <div className="text-center p-5">
            <button
              className={`py-2 px-8 rounded-l-full ${
                selectedCategory === "edu"
                  ? "bg-lightBlue text-white font-medium"
                  : "bg-[#ffffff] text-textBlue font-medium"
              }`}
              onClick={() => setSelectedCategory("edu")}
            >
              Education
            </button>
            <button
              className={`py-2 px-8 rounded-r-full ${
                selectedCategory === "work"
                  ? "bg-lightBlue text-white font-medium"
                  : "bg-bglightBlue text-textBlue font-medium"
              }`}
              onClick={() => setSelectedCategory("work")}
            >
              work
            </button>
          </div>

          {/* Education */}
          {selectedCategory === "edu" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-20">
              <div className="card p-5 border rounded-xl border-[#EDDCD4] hover:bg-bglightBlue dark:hover:bg-darkmode hover:border-lightBlue transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div className="">
                    <img
                      src={SliitLogo}
                      alt="Sliit Logo"
                      className="h-full w-20"
                    />
                  </div>
                  <div className="ml-5 text-left">
                    <div className="text-textBlue text-xl font-bold dark:text-white">
                      BSc (Hons) in Information Technology Specialising in
                      Software Engineering
                    </div>
                    <div className="text-textBlue text-lg font-medium dark:text-white">
                      Sri Lanka Institute of Information Technology
                    </div>
                    <div className="text-[#989898]">2020 - Present</div>
                  </div>
                </div>
              </div>

              <div className="card p-5 border rounded-xl border-[#EDDCD4] hover:bg-bglightBlue dark:hover:bg-darkmode hover:border-lightBlue transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div className="">
                    <img src={ACC} alt="Sliit Logo" className="h-full w-20" />
                  </div>

                  <div className="ml-5 text-left">
                    <div className="text-textBlue text-xl font-bold dark:text-white">
                      Grade 6 to Advance level
                    </div>
                    <div className="text-textBlue text-lg font-medium dark:text-white">
                      Anuradhapura Central College
                    </div>
                    <div className="text-[#989898]">2010 - 2018</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Work */}
          {selectedCategory === "work" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-20">
              <div className="card p-5 border rounded-xl border-[#EDDCD4] hover:bg-bglightBlue dark:hover:bg-darkmode hover:border-lightBlue transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div className="">
                    <img
                      src={iTelasoft}
                      alt="Sliit Logo"
                      className="h-full w-20"
                    />
                  </div>
                  <div className="ml-5 text-left">
                    <div className="text-textBlue text-xl font-bold dark:text-white">
                      UI/UX Engineer - Intern
                    </div>
                    <div className="text-textBlue text-lg font-medium dark:text-white">
                      iTelasoft
                    </div>
                    <div className="text-[#989898]">
                      2023 August - 2024 February
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-5 border rounded-xl border-[#EDDCD4] hover:bg-bglightBlue dark:hover:bg-darkmode hover:border-lightBlue transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div className="">
                    <img src={SI} alt="Sliit Logo" className="h-full w-20" />
                  </div>

                  <div className="ml-5 text-left">
                    <div className="text-textBlue text-xl font-bold dark:text-white">
                      Fullstack Developer (MERN) - Intern
                    </div>
                    <div className="text-textBlue text-lg font-medium dark:text-white">
                      STEPHEN INNOVATIONS
                    </div>
                    <div className="text-[#989898]">
                      2023 Feb 06 - 2023 August - 06
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
