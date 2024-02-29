import { useRef } from 'react';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { skills } from './data';

export const Skills = () => {
  const firstRow = skills.slice(0, 20);
  const secondRow = skills.slice(10, 20);
  const thirdRow = skills.slice(10, 15);
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
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  //   const rotateX = useSpring(
  //     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
  //     springConfig
  //   );
  //   const opacity = useSpring(
  //     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
  //     springConfig
  //   );
  //   const rotateZ = useSpring(
  //     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
  //     springConfig
  //   );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] py-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="container">
        <h1 className="font-Satoshi font-black text-5xl md:text-6xl">Skills</h1>
      </div>

      <motion.div
        style={{
          //   rotateX,
          //   rotateZ,
          translateY,
          //   opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row1-${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`row2-${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
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
        y: -20,
      }}
      key={product.title}
      className="group/product h-20 w-20 relative flex-shrink-0 "
    >
      <div>{product.img()}</div>
    </motion.div>
  );
};
