import { useEffect, useState } from 'react';

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

    window.addEventListener('scroll', handleScroll);
    updateRotation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div id="aboutMe">
      <div className="container max-w-3xl">
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 py-20">
          <div className="flex flex-col gap-6 text-center">
            <span className="text-xl font-Satoshi font-semibold">
              Hi!, I am <span className="text-red-500">Shavi</span>
            </span>
            <span className="text-lg font-Satoshi">
              I have vast knowledge offull-stack application development and am
              well-experienced in all aspects of the software development
              lifecycle and end-to-end project management from concept to
              practice.
            </span>
          </div>
          <div className="w-60 rounded-full outline outline-orange/10 outline-offset-8 aspect-square overflow-hidden">
            <img src="./images/profile.png" alt="" className="bg-cover" />
          </div>
        </div>
      </div>
      <div class="relative flex justify-end">
        <div class="h-[0.15rem] w-1/2 bg-gradient-to-r from-white via-orange to-orange mb"></div>
      </div>
    </div>
  );
};
