import fooddelivery from '/images/food-delivery.png';
import herbland from '/images/herbland.png';
import loanapplication from '/images/loan-application.png';
import todolist from '/images/todo-list.png'
import { CardBody, CardContainer, CardItem } from './core/project-grid';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <motion.section id='projects'>
      <h1 className="font-Satoshi font-black text-5xl md:text-6xl text-center mb-14">
        Projects
      </h1>

      <div className="grid-cols-1 lg:grid md:grid-cols-4 md:container">
        <CardContainer className="inter-var flex flex-col">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mb-4">
              <img
                src={todolist}
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <a
              href="https://github.com/ShavidiniEkanayake/todo-list-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Todo List Manager Application
              </CardItem>
            </a>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Frontend application for Todo list manager with Next.js
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var flex flex-col">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mb-4">
              <img
                src={fooddelivery}
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <a
              href="https://github.com/ShavidiniEkanayake/foodlabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
               Food Delivery Application - Frontend
              </CardItem>
            </a>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             React-based web app for seamless food delivery
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var flex flex-col">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mb-4">
              <img
                src={herbland}
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <a
              href="https://gitlab.com/sliit-ds-project-y03s02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
               Collaborative Shopping Platform
              </CardItem>
            </a>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Using Restful Services and Microservice Architecture.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var flex flex-col">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mb-4">
              <img
                src={loanapplication}
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <a
              href="https://www.figma.com/file/6bHiZtNd7J886HEKj33E88/Loan-Application?type=design&node-id=0%3A1&mode=design&t=c6oCN8KKaI6YiCSA-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Loan Application UI Design
              </CardItem>
            </a>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             UI designs using Figma, complemented by interactive prototypes.
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <div className="text-center font-Satoshi font-bold text-lg hover:text-orange">
      <Link to="/projects" target="_blank" rel="noopener noreferrer">
        More Projects
      </Link>
    </div>
    </motion.section>
  );
};
