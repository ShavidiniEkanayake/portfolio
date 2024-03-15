import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import fooddelivery from '../../public/assets/images/food-delivery.png';
import herbland from '../../public/assets/images/herbland.png';
import loanapplication from '../../public/assets/images/loan-application.png';
import todolist from '../../public/assets/images/todo-list.png';
import { CardBody, CardContainer, CardItem } from './core/project-grid';

export const Projects = () => {
  return (
    <motion.section className="relative">
      <span className="absolute -top-[8rem]" id="projects" />
      <h1 className="font-Satoshi font-black text-5xl md:text-6xl text-center mb-14 mt-10">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container gap-9 custom-grid">
        <CardContainer className="inter-var flex flex-col">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="100"
              className="w-full grayscale hover:grayscale-0 contrast-125 hover:contrast-100"
            >
              <img
                src={todolist}
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl"
                alt="thumbnail"
              />
              <a
                href="https://github.com/ShavidiniEkanayake/todo-list-manager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white py-4"
                >
                  Todo List Manager Application
                </CardItem>
              </a>

              <a className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Frontend application for Todo list manager with Next.js
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var flex flex-col">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="100"
              className="w-full grayscale hover:grayscale-0 contrast-[3] hover:contrast-100"
            >
              <img
                src={fooddelivery}
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl"
                alt="thumbnail"
              />
              <a
                href="https://github.com/ShavidiniEkanayake/foodlabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white py-4"
                >
                  Food Delivery Application - Frontend
                </CardItem>
              </a>

              <a className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                React-based web app for seamless food delivery
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var flex flex-col">
          <CardBody className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="100"
              className="w-full grayscale hover:grayscale-0 contrast-125 hover:contrast-100"
            >
              <img
                src={herbland}
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl"
                alt="thumbnail"
              />
              <a
                href="https://gitlab.com/sliit-ds-project-y03s02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white py-4"
                >
                  Collaborative Shopping Platform
                </CardItem>
              </a>
              <a className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Using Restful Services and Microservice Architecture.
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var flex flex-col">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="100"
              className="w-full grayscale hover:grayscale-0 contrast-125 hover:contrast-100"
            >
              <img
                src={loanapplication}
                height="1000"
                width="1000"
                className="h-48 w-full object-cover rounded-xl"
                alt="thumbnail"
              />
              <a
                href="https://www.figma.com/file/6bHiZtNd7J886HEKj33E88/Loan-Application?type=design&node-id=0%3A1&mode=design&t=c6oCN8KKaI6YiCSA-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white py-4"
                >
                  Loan Application UI Design - Figma
                </CardItem>
              </a>

              <a className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                UI designs using Figma, complemented by interactive prototypes.
              </a>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <div className="text-center font-Satoshi font-medium text-lg hover:text-orange py-10">
        <Link to="/projects" target="_blank" rel="noopener noreferrer">
          More Projects
        </Link>
      </div>
    </motion.section>
  );
};
