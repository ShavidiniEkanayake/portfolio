import React from "react";
import "../App.css";

export const Home = () => {
  return (
    <div>
      <div
        className={`bg-bgorange dark:bg-darkmode text-black h-svh flex items-center justify-center relative`}
      >
        <div className="relative animate-fade-in">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              style={{ width: "38vw", height: "38vw" }}
              className="bg-black dark:bg-gray-800 rounded-full flex items-center justify-center"
            ></div>
          </div>
          <div className="text-center">
            <h1 className="text-[5vw] font-Satoshi font-black bg-bgorange p-2 sm:p-4 md:pt-6 lg:pt-8 lg:pb-4 md:pb-3 sm:pb-1">
              Creative Developer
            </h1>
            <h1 className="text-[7vw] font-Satoshi font-normal bg-bgorange p-2 sm:p-4 md:pb-6 lg:pb-8 uppercase">
              Based in Sri Lanka
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
