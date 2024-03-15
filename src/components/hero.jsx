import { motion } from 'framer-motion';
import { BackgroundGradient } from './core/background-gradient';
import { CardBody, CardContainer, CardItem } from './core/hero-grid';
import {SparklesCore} from './core/sparkles'

export const Hero = () => {
  return (
    <motion.div
      id="home"
      className="box "
      initial={{ opacity: 0.5, scale: 0.999 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: 'linear',
        duration: 1,
        x: { duration: 0 },
        y: { duration: 0 },
      }}
    >

      <BackgroundGradient>
        <div className="h-[calc(100vh-5rem)] overflow-hidden w-full absolute z-10">
          <CardContainer>
            <CardBody className="h-[calc(100vh-5rem)] w-full min-w-[100vw] flex justify-center items-center">
              <CardItem
                translateZ="10"
                className="absolute inset-0 flex justify-center items-center"
              >
                <div className="aspect-square h-[min(calc(100%-8rem),calc(100vw-8rem))] bg-gradient-to-b from-[black_30%] via-[transparent_30%_70%] to-[black_70%] rounded-full">
                </div>
              </CardItem>
              <CardItem
                translateZ="60"
                className={
                  'absolute inset-0 text-center py-3 flex flex-col gap-1 sm:gap-2 '
                }
              >
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="container  text-center py-3 flex flex-col gap-1 sm:gap-2 ">
                    <h1 className="text-3xl sm:text-6xl md:text-7xl font-black font-Satoshi tracking-tighter ">
                      Creative Developer
                    </h1>
                    <h1 className="text-3xl sm:text-6xl md:text-7xl font-Satoshi -tracking-tight uppercase ">
                      Based in Sri Lanka
                    </h1>
                  </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </BackgroundGradient>
    </motion.div>
  );
};
