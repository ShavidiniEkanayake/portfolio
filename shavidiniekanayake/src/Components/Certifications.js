import React from "react";

export const Certifications = () => {
  return (
    <div className={`bg-white dark:bg-darkmode text-black p-4`}>
      <div className="mx-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold dark:text-white text-textBlue">
              Certification and Awards
          </h1>

          <div className="overflow-hidden">
  <div className="flex animate-marquee">
    {/* Your certification items */}
    <span className="px-4">Certification 1</span>
    <span className="px-4">Certification 2</span>
    <span className="px-4">Certification 3</span>
    {/* Add more spans for other certifications */}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};