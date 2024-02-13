import React, { useState, useEffect } from "react";

export const Contact = () => {
  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <div className="mx-10">
        <div className="mx-10">
          <h1 className="text-5xl font-Cabinet font-extrabold dark:text-white text-textBlue">
            Contact Me
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <p className="my-5">All projects widnvjkolp; djoljpo</p>
              <div className="card">
                <div className="text-textBlue font-medium text-lg">
                  Phone Number
                </div>
                <div className="text-textBlue">+94703009912</div>
                <div className="text-textBlue">+94766527407</div>
              </div>

              <div className="card mt-4">
                <div className="text-textBlue font-medium text-lg">Email</div>
                <div className="text-textBlue">shavidilunika10s@gail.com</div>
              </div>

              <div className="card mt-4">
                <div className="text-textBlue font-medium text-lg">Address</div>
                <div className="text-textBlue">New Kandy Road, Malabe</div>
              </div>
            </div>

            {/* <div className="col-span-1">
            <img
              src={ReactAsh}
              alt="Your Alt Text"
              className="w-full h-full object-cover"
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
