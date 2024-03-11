import { motion } from 'framer-motion';

import { TypewriterEffectSmooth } from './core/typewriter-effect';

export const Splash = () => {
  const words = [
    {
      text: 'Shavidini',
    },
    {
      text: 'Ekanayake',
    },
    {
      text: 'is',
      className: 'text-orange font-SatoshiItalic font-bold',
    },
    {
      text: 'a',
    },
  ];

  return (
    <motion.div
      className="box"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0.6 }}
      transition={{
        ease: 'linear',
        duration: 5,
        x: { duration: 0 },
        y: { duration: 0 },
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <TypewriterEffectSmooth
          words={words}
          className={'flex items-center justify-center h-screen'}
        />
      </div>
    </motion.div>
  );
};
