import { useEffect, useState } from "react";
import Shavi_1 from "../Assets/Images/shavidini_1.png";

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
    <div className="container max-w-3xl">
      <div className="flex flex-col items-center justify-center min-h-screen gap-10 py-20">
        <div className="flex flex-col gap-6 text-center">
          <span className="text-lg font-Satoshi">Hi!, I am Shavi</span>
          <span className="text-lg font-Satoshi">
            I have vast knowledge offull-stack application development and am
            well-experienced in all aspects of the software development
            lifecycle and end-to-end project management from concept to
            practice.
          </span>
        </div>
        <div className="w-60 rounded-full outline outline-orange/10 outline-offset-8 aspect-square overflow-hidden">
          <img
            src={Shavi_1}
            alt=""
            className="bg-cover -rotate-45"
            style={{ transform: `rotate(${scrollY * -0.01}deg)` }}
          />
        </div>
      </div>
    </div>
  );
};
