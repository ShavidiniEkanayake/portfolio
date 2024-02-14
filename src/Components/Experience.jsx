import React from "react";
import ExperienceBG from "../Assets/Logos/ExperienceBG.svg";
import "../App.css";

export const Experience = () => {
  const containerStyle = {
    backgroundImage: `url(${ExperienceBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className={`bg-white dark:bg-darkmode text-black mx-auto`}>
      <div className="font-Satoshi font-black text-6xl  flex justify-end container  px-28">
        Experience
      </div>

      <div className="w-full flex items-center">
        <div className="w-2/4"></div>
        <div className="w-3/4">
          <div className="font-Satoshi font-black text-[2.8rem] my-6">
            Education
          </div>

          <div className="mb-16">
            <div className="flex items-center">
              <div className="w-12 h-9 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-xl mr-4">
                01
              </div>
              <div className="font-Satoshi font-black text-3xl uppercase">
                Anuradhapura Central College
              </div>
            </div>

            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
              2010-2019
            </div>
          </div>

          <div className="pr-10">
            <div className="flex items-center">
              <div className="w-14 h-9 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-xl mr-4">
                02
              </div>
              <div className="font-Satoshi font-black text-3xl uppercase">
                Sri lanka institute of information technology
              </div>
            </div>

            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-[4.5rem]">
              2020- Present (4th year)
            </div>

            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-[4.5rem]">
              Bsc (Hons) in Information Technology Specializing inSoftware
              Engineering - SLIIT ( Malabe )
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center px-28">
        <div className="w-3/4">
          <div className="font-Satoshi font-black text-[2.8rem] my-6">Work</div>

          <div className="mb-16">
            <div className="flex items-center">
              <div className="w-12 h-9 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-xl mr-4">
                01
              </div>
              <div className="font-Satoshi font-black text-3xl uppercase">
                STEPHEN INNOVATIONS (PVT) LTD
              </div>
            </div>

            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
              Intern Full Stack Developer (MERN)
            </div>
            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
              2023 January - 2023 August
            </div>
            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
              Focused on frontend and backend development.
            </div>
            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
              Did integration of web applications.
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <div className="w-14 h-9 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-xl mr-4">
                02
              </div>
              <div className="font-Satoshi font-black text-3xl uppercase">
                itelasoft (pvt) ltd
              </div>
            </div>

            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-[4.5rem]">
              Intern UI/UX Engineer
            </div>
            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-[4.5rem]">
              2023 August - 2024 February
            </div>
            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-[4.5rem]">
              Mainly focus on frontend development with JavaScript.
            </div>
            <div className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-[4.5rem]">
              Styling web applications with CSS and frameworks
            </div>
          </div>
        </div>
        <div className="w-2/4"></div>
      </div>
    </div>
  );
};
