import React from "react";
import "../App.css";
import ShaviLogoRed from "../Assets/Logos/Shavi-logo-red.svg";

export const AboutMe = () => {
  return (
    <div className="bg-white dark:bg-darkmode text-black py-2 px-4 lg:px-28 my-20 flex">
      <div className="w-1/3 pr-8">
        <div className={`flex items-end`}>
          <a className="font-Satoshi font-medium text-3xl">Hello, I am</a>
          <img src={ShaviLogoRed} alt="Shavi Logo" className="h-9 w-auto ml-3 my-2" />
        </div>

        <div className="font-Satoshi font-medium text-3xl">
          I have vast knowledge of full-stack application development and am
          well-experienced in all aspects of the software development lifecycle
          and end-to-end project management from concept to practice.
        </div>
      </div>

      <div className="w-2/3">
        <div className="font-Satoshi font-medium text-xl">
          s
        </div>
      </div>
    </div>
  );
};
