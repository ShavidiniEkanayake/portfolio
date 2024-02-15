import React from "react";
import Shavi from "../Assets/Logos/Shavi ..svg";
import heart from "../Assets/Logos/mingcute_heart-fill.svg";

export const Footer = () => {
  return (
    <div>
      <hr className="border-[#E6E6E6]" />
      <div className="bg-white dark:bg-darkmode text-black p-4 flex justify-center items-center">
        <div className="flex items-center">
          <a className="font-Satoshi font-medium text-lg">Made with</a>
          <img src={heart} alt="Shavi Logo" className="h-5 w-auto mx-2" />
        </div>
        <a className="font-Satoshi font-medium text-lg">by</a>
        <img src={Shavi} alt="Shavi Logo" className="h-6 w-auto ml-2" />
      </div>
    </div>
  );
};
