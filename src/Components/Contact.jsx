
import React, { useState, useEffect } from "react";

export const Contact = () => {
  return (
    <div className={`bg-[#F8F8F8] dark:bg-darkmode text-black p-4  flex justify-center items-center`}>
      <div className="mx-10">
        <div className="mx-10">
          <h1 className="text-3xl font-Satoshi font-bold dark:text-white text-textBlue">
            Contact Me
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="card">
                <div className="text-textBlue">+94703009912</div>
                <div className="text-textBlue">+94766527407</div>
              </div>

              <div className="card mt-4">
                <div className="text-textBlue">shavidilunika10s@gail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
