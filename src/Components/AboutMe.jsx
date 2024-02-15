import React, { useEffect, useState } from "react";
import "../App.css";
import ShaviLogoRed from "../Assets/Logos/Shavi-logo-red.svg";
import Shavi_1 from "../Assets/Images/shavidini_1.png";
import Shavi_2 from "../Assets/Images/Shavidini_2.png";
import Shavi_3 from "../Assets/Images/Shavidini_3.png";

export const AboutMe = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    let requestId;

    const updateRotation = () => {
      setScrollY(window.scrollY);
      requestId = requestAnimationFrame(updateRotation);
    };

    window.addEventListener("scroll", handleScroll);
    updateRotation();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);


  return (
    <div className="bg-white dark:bg-darkmode text-black py-2 px-4 lg:px-28 mb-20 flex rounded-lg overflow-hidden relative h-screen">
       <div className="w-2/4 pr-32 mt-48">
        <div className={`flex items-end`}>
          <a className="font-Satoshi font-medium text-3xl">Hello, I am</a>
          <img
            src={ShaviLogoRed}
            alt="Shavi Logo"
            className="h-9 w-auto ml-3"
          />
        </div>

        <div className="font-Satoshi font-medium text-3xl">
          I have vast knowledge of full-stack application development and am
          well-experienced in all aspects of the software development lifecycle
          and end-to-end project management from concept to practice.
        </div>
      </div>

      <div className="w-2/4 relative mt-8">
        <div className="font-Satoshi font-medium text-xl">
          <div
            className="rounded-3xl overflow-hidden absolute top-0 left-0 transform"
            style={{ transform: `rotate(-${scrollY / 40}deg)` }}
          >
            <img
              src={Shavi_3}
              alt="Shavi 1"
              className="w-80 h-auto object-cover grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
          <div
            className="rounded-3xl overflow-hidden absolute top-20 left-20 transform"
            style={{ transform: `rotate(-${scrollY / 80}deg)` }}
          >
            <img
              src={Shavi_2}
              alt="Shavi 2"
              className="w-80 h-auto object-cover grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
          <div
            className="rounded-3xl overflow-hidden absolute top-40 left-40 transform"
            style={{ transform: `rotate(${scrollY / 100}deg)` }}
          >
            <img
              src={Shavi_1}
              alt="Shavi 3"
              className="w-80 h-auto object-cover grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
