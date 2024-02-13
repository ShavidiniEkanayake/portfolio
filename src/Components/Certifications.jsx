import React, { useState, useEffect } from "react";
import "./Certifications.css";
import Microsoft from "../Assets/Logos/logos_microsoft-icon.svg";
import Postman from "../Assets/Logos/Postman - Postman API Fundamentals Student Expert - 2022-12-24.png";
import Scrum from "../Assets/Logos/CertiProf-Scrum-Foundation.png";
import Oracle from "../Assets/Logos/50_Oracle_Cloud_Infrastructure.png";
import RemoteWork from "../Assets/Logos/rwvcpc-download_300x300.avif";
import OracleData from "../Assets/Logos/OCDMF2022.png";

export const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      date: "July 15, 2022",
      image: Microsoft,
    },
    {
      name: "Postman API Fundamentals Student Expert",
      date: "December 24, 2022",
      image: Postman,
    },
    {
      name: "Scrum Foundation Professional (SFPC)",
      date: "July 24, 2021",
      image: Scrum,
    },
    {
      name: "Oracle Foundations Associate",
      date: "November 22, 2021",
      image: Oracle,
    },
    {
      name: "Remote Work and Virtual Collaboration Professional",
      date: "December 07, 2021",
      image: RemoteWork,
    },
    {
      name: "Oracle Cloud Data Management Foundations Associate",
      date: "December 05, 2022",
      image: OracleData,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleArrowClick = (direction) => {
    const newStartIndex =
      direction === "left"
        ? Math.max(0, startIndex - 1)
        : Math.min(certifications.length - 3, startIndex + 1);

    setStartIndex(newStartIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStartIndex = Math.min(certifications.length - 3, startIndex + 1);
      setStartIndex(newStartIndex);
    }, 2500);

    return () => clearInterval(intervalId); 

  }, [startIndex, certifications.length]);

  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <div className="mx-10">
        <div className="text-center">
          <h1 className="text-5xl font-Cabinet font-extrabold dark:text-white text-textBlue">
            Certification and Awards
          </h1>

          <div className="overflow-hidden mx-10 my-14 relative">
            <div className="flex items-center space-x-4">
              {certifications.slice(startIndex, startIndex + 3).map((certification, index) => (
                <div
                  key={index}
                  className={`card bg-white p-4 border border-[#EDDCD4] hover:bg-bglightBlue hover:border-lightBlue rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-95`}
                >
                  <div className="flex items-start">
                    <img
                      src={certification.image}
                      className="rounded-xl h-full w-20 mr-2"
                      alt="Certification"
                    />

                    <div className="ml-4 w-[20rem]">
                      <div className="font-bold text-lg text-left text-textBlue">
                        {certification.name}
                      </div>

                      <div className="text-[#989898] text-left">
                        {certification.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-darkmode text-black dark:text-white p-2 rounded-full shadow-md hover:bg-bglightBlue hover:text-lightBlue focus:outline-none"
              onClick={() => handleArrowClick("left")}
            >
              {"<"}
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-darkmode text-black dark:text-white p-2 rounded-full shadow-md hover:bg-bglightBlue hover:text-lightBlue focus:outline-none"
              onClick={() => handleArrowClick("right")}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
