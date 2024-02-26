import React, { useState, useRef, useCallback } from "react";

export const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      date: "July 15, 2022",
      image: "./images/microsoft.png",
    },
    {
      name: "Postman API Fundamentals Student Expert",
      date: "December 24, 2022",
      image: "./images/postman-student-expert.png",
    },
    {
      name: "Scrum Foundation Professional (SFPC)",
      date: "July 24, 2021",
      image: "./images/scrum.png",
    },
    {
      name: "Oracle Foundations Associate",
      date: "November 22, 2021",
      image: "./images/oracle-cloud.png",
    },
    {
      name: "Remote Work and Virtual Collaboration Professional",
      date: "December 07, 2021",
      image: "./images/rwvcpc.avif",
    },
    {
      name: "Oracle Cloud Data Management Foundations Associate",
      date: "December 05, 2022",
      image: "./images/oracle-cloud-data.png",
    },
  ];

  return (
    <div className="">
      <div className="container mt-20">
        <h1 className="font-Satoshi font-black text-6xl">Certifications</h1>
      </div>

      <div className="flex overflow-x-auto my-10 no-scrollbar">
        {certifications.map((certification, index) => (
          <div key={index} className="mx-4">
            <div className="bg-white p-4 rounded-md shadow-md w-96 h-56 hover:bg-[#FFF0F0] border hover:border-[#FFC4C4]  transition-transform duration-300 transform object-cover grayscale hover:grayscale-0">
              <img
                src={certification.image}
                alt={certification.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <p className="font-Satoshi font-semibold text-lg text-center">
                {certification.name}
              </p>
              <p className="text-gray-500 text-center">{certification.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
