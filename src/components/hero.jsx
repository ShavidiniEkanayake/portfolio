import { motion } from 'framer-motion';

import herbland from '../../public/images/herbland.png';
import { BackgroundGradient } from './core/background-gradient';
import { CardBody, CardContainer, CardItem } from './core/hero-grid';
import { Meteors } from './core/meteors';

export const Hero = () => {
  return (
    <motion.div
      className="box bg-bgorange"
      initial={{ opacity: 0.5, scale: 0.999 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: 'linear',
        duration: 1,
        x: { duration: 0 },
        y: { duration: 0 },
      }}
    >
      <div className="h-[calc(100vh-5rem)] relative overflow-hidden w-full">
        <CardContainer className="">
          <CardBody className="h-[calc(100vh-5rem)] w-full min-w-[100vw] flex justify-center items-center">
            <CardItem translateZ="10" className="absolute inset-0 flex justify-center items-center">
              <div className="aspect-square h-[min(calc(100%-8rem),calc(100vw-8rem))] bg-black rounded-full" />
            </CardItem>
            <CardItem
              translateZ="60"
              className={
                'absolute inset-0 text-center py-3 flex flex-col gap-1 sm:gap-2 '
              }
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="container  text-center py-3 flex flex-col gap-1 sm:gap-2 bg-bgorange">
                  <h1 className="text-3xl sm:text-6xl md:text-7xl font-black font-Satoshi tracking-tighter">
                    Creative Developer
                  </h1>
                  <h1 className="text-3xl sm:text-6xl md:text-7xl font-Satoshi -tracking-tight uppercase">
                    Based in Sri Lanka
                  </h1>
                </div>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
        <Meteors number={10} />
      </div>

      {/* dlldlksld */}
      {/* <div className="h-[calc(100vh-5rem)] bg-bgorange relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-black rounded-full aspect-square h-[min(calc(100%-8rem),calc(100vw-8rem))]" />
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="container  text-center py-3 flex flex-col gap-1 sm:gap-2 bg-bgorange">
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-black font-Satoshi tracking-tighter">
              Creative Developer
            </h1>
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-Satoshi -tracking-tight uppercase">
              Based in Sri Lanka
            </h1>
          </div>
        </div> */}
      {/* </div> */}
      {/* </Meteors > */}

      {/* <div className="bg-bgorange relative overflow-hidden w-full">
        <CardContainer>
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
            <div className="h-[calc(100vh-5rem)] bg-bgorange relative lg:w-[60rem] md:w-[50rem] w-96">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-black rounded-full aspect-square h-[min(calc(100%-8rem),calc(100vw-8rem))]" />
              </div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="container bg-bgorange text-center py-3 flex flex-col gap-1 sm:gap-2">
                  <h1 className="text-3xl sm:text-6xl md:text-7xl font-black font-Satoshi tracking-tighter">
                    Creative Developer
                  </h1>
                  <h1 className="text-3xl sm:text-6xl md:text-7xl font-Satoshi -tracking-tight uppercase">
                    Based in Sri Lanka
                  </h1>
                </div>
              </div>
            </div>{' '}
          </motion.div>
        </CardContainer>
        <Meteors number={10} />
      </div> */}
    </motion.div>
  );
};
