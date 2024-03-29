import { useRef } from 'react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { skills } from './data';

export const Skills = () => {
  const firstRow = skills.slice(0, 20);
  const secondRow = skills.slice(5, 25);
  const thirdRow = skills.slice(3, 30);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 2], [3, -1000]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0.2, 1]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] dark:bg-darkmode"
    >
      <span className="absolute -top-[8rem]" id="skills" />
      <div className="container">
        <h1 className="font-Satoshi font-black text-5xl md:text-6xl dark:text-white mt-10">
          Skills
        </h1>
      </div>

      <motion.div
        style={{
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 mb-20 pt-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row1-${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-16 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`row2-${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 pb-20">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row3-${product.title}-${index}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        scale: 1.12,
      }}
      key={product.title}
      className="group/product h-[4.5rem] w-[4rem] relative flex-shrink-0"
    >
      <div>{product.img()}</div>
    </motion.div>
  );
};
