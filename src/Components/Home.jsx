import React from "react";
import "../App.css";

export const Home = () => {
  return (
    <div className="">
      <div
        className={`bg-bgorange dark:bg-darkmode text-black h-screen flex items-center justify-center relative`}
      >
        <div className="relative animate-fade-in">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[38rem] h-[38rem] bg-black dark:bg-gray-800 rounded-full flex items-center justify-center"></div>
          </div>
          <div className="text-center">
            <h1 className="text-[5rem] font-Satoshi font-black bg-bgorange p-4">
              Creative Developer
            </h1>
            <h1 className="text-8xl font-Satoshi font-normal bg-bgorange p-4 uppercase">
              Based in Sri Lanka
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
