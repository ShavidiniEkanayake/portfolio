import { Footer } from '@/components/layout/footer';
import { NavBar } from '@/components/layout/navbar';
import { motion } from 'framer-motion';

import { BentoGrid, BentoGridItem } from '../components/core/project-grid';
import { TypewriterEffectSmooth } from '../components/core/project-typewritten-effect';

export const ProjectsList = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const items = [
    {
      title: 'FoodLab Delivery Apllication UI Design',
      description: 'Explore the birth of groundbreaking ideas and inventions.',
      url: 'https://www.figma.com/file/zfHWGNoGgl7ILOgZRowX0l/FoodLabs?type=design&node-id=0%3A1&mode=design&t=Z1MrIPw48JDy9Nxj-1'
    },
    {
      title: 'The Digital Revolution',
      description: 'Dive into the transformative power of technology.',
      url: 'https://example.com/project1',
      header: <Skeleton />,
    },
    {
      title: 'The Art of Design',
      description: 'Discover the beauty of thoughtful and functional design.',
      url: 'https://example.com/project1',
      header: <Skeleton />,
    },
    {
      title: 'The Postman Designs',
      description:'Postman design crafted with precision using Figma tool',
      url: 'https://www.figma.com/file/zpALCbsp5Vvl3FsxH82jDJ/Postman?type=design&node-id=0%3A1&mode=design&t=7p7eeUxC65ZmWKHf-1'
    },
    {
      title: 'The Pursuit of Knowledge',
      description: 'Join the quest for understanding and enlightenment.',
      header: <Skeleton />,
    },
    {
      title: 'The Joy of Creation',
      description: 'Experience the thrill of bringing ideas to life.',
      url: 'https://example.com/project1',
      header: <Skeleton />,
    },
    {
      title: 'The Spirit of Adventure',
      description: 'Embark on exciting journeys and thrilling discoveries.',
      url: 'https://example.com/project1',
      header: <Skeleton />,
    },
    {
      title: 'The Pursuit of Knowledge',
      description: 'Join the quest for understanding and enlightenment.',
      header: <Skeleton />,
    },
    {
      title: 'The Joy of Creation',
      description: 'Experience the thrill of bringing ideas to life.',
      url: 'https://example.com/project1',
      header: <Skeleton />,
    },
    {
      title: 'The Spirit of Adventure',
      description: 'Embark on exciting journeys and thrilling discoveries.',
      url: 'https://example.com/project1',
      header: <Skeleton />,
    },
  ];

  return (
    <div>
      {/* <NavBar /> */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-14 ">
        <div className="flex justify-center">
          <ol className="ml-10 list-decimal w-full">
            {items.map((project, index) => (
              <li key={index} className="my-6">
                <div className="flex flex-col lg:flex-row items-start">
                  <div className="mb-2 lg:mb-0 w-1/3">
                    <TypewriterEffectSmooth
                      words={[{ text: project.title }]}
                      className="text-base md:text-lg font-semibold"
                    />
                  </div>
                  <div className="w-2/3">
                    <TypewriterEffectSmooth
                      words={[{ text: project.description }]}
                      className="text-sm md:text-base text-gray-600 overflow-hidden"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div> */}

      <div className="container my-16">
        <div className="flex justify-center">
          <ol className="list-decimal">
            {items.map((project, index) => (
              <li key={index} className="my-4 font-Satoshi ">
                <div className="lg:flex items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <TypewriterEffectSmooth
                      words={[{ text: project.title }]}
                      className={`text-base font-semibold font-Satoshi`}
                    />
                  </a>
                  <p className="text-base font-Satoshi text-gray-600 flex md:hidden">
                    {project.description}
                  </p>
                  <div className="hidden md:flex">
                    <TypewriterEffectSmooth
                      words={[{ text: project.description }]}
                      className="text-base font-Satoshi text-gray-600 flex"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};
