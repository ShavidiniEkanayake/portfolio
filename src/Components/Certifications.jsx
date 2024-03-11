import React, { useState, useRef, useCallback } from "react";
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

  const [selectedCertification, setSelectedCertification] = useState(
    certifications[0]
  );
  const [visibleCertifications, setVisibleCertifications] = useState(
    certifications.slice(0, 3)
  );

  const observer = useRef();

  const lastCertificationRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleCertifications((prevCertifications) =>
              certifications.slice(0, prevCertifications.length + 3)
            );
          }
        },
        { threshold: 0.5 }
      );

      if (node) observer.current.observe(node);
    },
    [certifications]
  );

  const handleCertificationClick = (certification) => {
    setSelectedCertification(certification);
  };

  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <h1 className="font-Satoshi font-black text-6xl dark:text-white text-textBlue ml-28">
        Certifications
      </h1>

      <div className="flex">
        <div className="overflow-y-auto mx-28 my-14 max-h-[400px]">
          {visibleCertifications.map((certification, index) => (
            <div
              key={index}
              ref={
                index === visibleCertifications.length - 1
                  ? lastCertificationRef
                  : null
              }
              className={`card bg-white mb-6 p-4 w-[29rem] border border-[#EDDCD4] hover:bg-bglightBlue hover:border-lightBlue rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 ${
                certification === selectedCertification ? "selected" : ""
              }`}
              onClick={() => handleCertificationClick(certification)}
            >
              <div className="flex items-start">
                <img
                  src={certification.image}
                  className="rounded-xl h-full w-20 mr-2"
                  alt="Certification"
                />

                <div className="ml-4">
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

        <div className="ml-4 w-[20rem]">
          <div className="font-bold text-lg text-left text-textBlue">
            {selectedCertification.name}
          </div>
          <div className="text-[#989898] text-left">
            {selectedCertification.date}
          </div>
        </div>
      </div>
    </div>
  );
};
