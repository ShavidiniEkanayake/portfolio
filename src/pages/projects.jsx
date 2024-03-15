import { Footer } from '@/components/layout/footer';

import { TypewriterEffectSmooth } from '../components/core/project-typewritten-effect';

export const ProjectsList = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const items = [
    {
      title: 'FoodLab Delivery Application UI Design',
      description: 'Designed in Figma tool.',
      url: 'https://www.figma.com/file/zfHWGNoGgl7ILOgZRowX0l/FoodLabs?type=design&node-id=0%3A1&mode=design&t=Z1MrIPw48JDy9Nxj-1',
    },
    {
      title: 'Bashaway Event Designs',
      description:
        'Include web UI and flyer designs for Bashaway events. Designed in Figma.',
      url: 'https://www.figma.com/file/6Pg3NEAY5hLXnr05e3x6rs/SeenD-Creations---Flyers%2FPosts?type=design&node-id=250%3A76647&mode=design&t=01uT58E7zQEf8LgY-1',
    },
    {
      title: 'SORA- Employee Management System',
      description:
        'Backend development - Java using the Spring Boot framework.',
      url: 'https://github.com/ShavidiniEkanayake/SORA-employee-management-system',
    },
    {
      title: 'SORIS Event Planing',
      description: 'Online Event Planning System - Java with servlets and JSP.',
      url: 'https://github.com/ShavidiniEkanayake/SORIS-Event-Planing-1',
    },
    {
      title: 'The Postman Designs',
      description: 'Postman design, including event flyers, by Figma.',
      url: 'https://www.figma.com/file/zpALCbsp5Vvl3FsxH82jDJ/Postman?type=design&node-id=0%3A1&mode=design&t=7p7eeUxC65ZmWKHf-1',
    },
    {
      title: 'Online Learning Platform - Landing page',
      description: 'Designed in Figma to accommodate various screen sizes.',
      url: 'https://www.figma.com/file/0mxoqIrLdusjXNOxO4gJ22/Online-learning-platform---Landing-page?type=design&node-id=0%3A1&mode=design&t=IQOEw0N8LIYFLl0I-1',
    },
    {
      title: 'Online Help Desk for University Students',
      description: 'It was develop using HTML, PHP, CSS',
      url: 'https://github.com/susithrupasinghe/SORIS-help-desk',
    },
    {
      title: 'SLIIT FOSS Designs',
      description: 'Included all designs for the SLIIT FOSS community.',
      url: 'https://www.figma.com/file/6Pg3NEAY5hLXnr05e3x6rs/SeenD-Creations---Flyers%2FPosts?type=design&node-id=17%3A845&mode=design&t=iBmOkf45IGclCyhc-1',
    },
    {
      title: 'DNJ Transport Designs',
      description:
        'It is business related designs for DNJ Transport company. Designed in Figma.',
      url: 'https://www.figma.com/file/6Pg3NEAY5hLXnr05e3x6rs/SeenD-Creations---Flyers%2FPosts?type=design&node-id=246%3A74959&mode=design&t=iBmOkf45IGclCyhc-1',
    },
    {
      title: 'Consultant Management System - UI Design',
      description:
        'UI Designs for a consultant management system. Designed in Figma.',
      url: 'https://www.figma.com/file/DfFStbiUyJln7BXHqlLqdt/Consultant-MGT-System?type=design&node-id=0%3A1&mode=design&t=18aVKhg8SK4XplcQ-1',
    },
    {
      title: 'Consultant Management System - Frontend',
      description:
        'Frontend development for a consultant management system using ReactJS.',
      url: 'https://github.com/SasinduNanayakkara/af-frontend',
    },
    {
      title: 'Consultant Management System - Backend',
      description: 'Developed using Java with Spring Boot framework.',
      url: 'https://github.com/SasinduNanayakkara/AF-Backend',
    },
    {
      title: 'Seedevi Ltd Designs',
      description:
        'Sinhala related designs for Seedevi Ltd. Designed in Figma.',
      url: 'https://www.figma.com/file/6Pg3NEAY5hLXnr05e3x6rs/SeenD-Creations---Flyers%2FPosts?type=design&node-id=0%3A1&mode=design&t=01uT58E7zQEf8LgY-1',
    },
    {
      title: 'DIVAMP Mobile Application',
      description:
        'It is mobile application developed using Java with Android Studio.',
      url: 'https://github.com/susithrupasinghe/DIVAMP',
    },
  ];

  return (
    <div>
      <div className="container my-16">
        <div className="lg:ml-80 md:ml-20 ml-4">
          <ul className="list-disc">
            {items.map((project, index) => (
              <li key={index} className="my- font-Satoshi ">
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
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};
