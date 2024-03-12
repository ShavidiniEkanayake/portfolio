import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Meteors } from './core/meteors';
import { BackgroundBeams } from './core/background-beams';

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
    <div id="aboutMe" className='relative border-b border-black/10'>
      <div className="container max-w-3xl z-10">
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 py-20">
          <div className="flex flex-col gap-6 text-center">
            <span className="text-xl font-Satoshi font-semibold">
              Hi!, I am <span className="text-red-500 z-50 relative">Shavi</span>
            </span>
            <span className="text-lg font-Satoshi z-50 relative">
              I have vast knowledge offull-stack application development and am
              well-experienced in all aspects of the software development
              lifecycle and end-to-end project management from concept to
              practice.
            </span>
          </div>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="w-60 rounded-full outline outline-orange/10 outline-offset-8 aspect-square overflow-hidden">
              <img src="./assets/images/profile.png" alt="" className="bg-cover z-50 relative" />
            </div>
          </motion.div>
        </div>
      </div>
      <BackgroundBeams/>
      {/* <Meteors number={10} /> */}
    </div>
  );
};
