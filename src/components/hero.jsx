import { motion } from 'framer-motion';

import herbland from '../../public/images/herbland.png';
import { BackgroundGradient } from './core/background-gradient';
import { CardBody, CardContainer, CardItem } from './core/hero-grid';
import { Meteors } from './core/meteors';

export const Hero = () => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0.5, scale: 0.999 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: 'linear',
        duration: 1,
        x: { duration: 0 },
        y: { duration: 0 },
      }}
    >
      {/* <div className="h-[calc(100vh-5rem)] bg-bgorange relative">
        <Meteors number={20} /> */}

      {/* <CardContainer className="">
          <CardBody className="h-[calc(100vh-5rem)] w-[20rem] lg:w-[35rem]">
            <CardItem translateZ="100" className="absolute w-full mb-4">
              <div className='mt-16'>
              <div className="aspect-square h-[min(calc(100%-8rem),calc(100vw-8rem))] bg-black rounded-full" />
              </div>
            </CardItem>
            <a className=''>
              <CardItem
                translateZ="50"
                className={
                  ' text-center py-3 flex flex-col gap-1 sm:gap-2 bg-bgorange '
                }
              >
                <div className="">
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
            </a>
          </CardBody>
        </CardContainer> */}

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

      <div className="bg-bgorange">
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
                <div className="container bg-bgorange text-center py-3 flex flex-col gap-1 sm:gap-2  shadow-md shadow-bgorange">
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
      </div>
      <Meteors number={10} className={`absolute`} />
    </motion.div>
  );
};
