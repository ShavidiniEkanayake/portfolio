import React from "react";
import "../App.css";

export const Home = () => {
  return (
    <div>
      <div
        className={`bg-bgorange dark:bg-darkmode text-black h-[calc(100vh-90px-46px)]  xs:h-[calc(100vh-90px-46px)] flex items-center justify-center relative `}
      >
        <div className="relative animate-fade-in">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="bg-black dark:bg-white rounded-full flex items-center justify-center w-[90vw] h-[90vw] sm:w-[65vw] sm:h-[65vw] xsm:w-[80vw] xsm:h-[80vw] md:w-[52vw] md:h-[52vw] lg:w-[37vw] lg:h-[37vw] py-10"
            ></div>
          </div>
          <div className="text-center">
            <h1 className="text-[8vw] md:text-[7vw] lg:text-[5vw] px-10 font-Satoshi font-black bg-bgorange py-2 sm:py-4 md:pt-6 lg:pt-8 lg:pb-4 md:pb-3 sm:pb-1">
              Creative Developer
            </h1>
            <h1 className="text-[9vw] md:text-[8vw] lg:text-[6svw] px-20 font-Satoshi font-normal bg-bgorange py-2 sm:py-4 md:pb-6 lg:pb-8 uppercase">
              Based in Sri Lanka
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
