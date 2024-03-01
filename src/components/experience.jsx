import { TracingBeam } from './core/tracing-beam';

export const Experience = () => {
  // return (
  //   // <BackgroundGradient>
  //   //   <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
  //   //     <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
  //   //       Gradients X Animations
  //   //     </p>
  //   //   </div>
  //   // </BackgroundGradient>
  //   <div className="container">
  //     <h1 className="font-Satoshi font-black text-6xl lg:flex lg:justify-end">
  //       Experience
  //     </h1>

  //     <div className="lg:ml-[40vw]">
  //       <h1 className="font-Satoshi font-black text-[2.8rem] my-6">
  //         Education
  //       </h1>

  //       <div className="flex gap-3">
  //         <h1 className="h-9 px-3 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-xl">
  //           01
  //         </h1>
  //         <h1 className="font-Satoshi font-black text-3xl uppercase">
  //           Anuradhapura Central College
  //         </h1>
  //       </div>
  //       <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //         {' '}
  //         2010-2019
  //       </h1>

  //       <div className="flex gap-3 mt-10">
  //         <h1 className="h-9 px-3 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-xl">
  //           02
  //         </h1>
  //         <h1 className="font-Satoshi font-black text-3xl uppercase">
  //           Sri lanka institute of information technology
  //         </h1>
  //       </div>
  //       <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //         2020- Present (4th year)
  //       </h1>
  //       <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //         Bsc (Hons) in Information Technology Specializing inSoftware
  //         Engineering - SLIIT ( Malabe )
  //       </h1>
  //     </div>

  //     <h1 className="font-Satoshi font-black text-[2.8rem] my-6">Work</h1>
  //     <div className="flex gap-3">
  //       <h1 className="h-9 px-3 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-xl">
  //         01
  //       </h1>
  //       <h1 className="font-Satoshi font-black text-3xl uppercase">
  //         STEPHEN INNOVATIONS (PVT) LTD
  //       </h1>
  //     </div>
  //     <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //       Intern Full Stack Developer (MERN)
  //     </h1>
  //     <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //       2023 January - 2023 August
  //     </h1>
  //     <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //       Focused on frontend and backend development.
  //     </h1>
  //     <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //       {' '}
  //       Did integration of web applications.
  //     </h1>

  //     <div className="flex gap-3 mt-10">
  //       <h1 className="h-9 px-3 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-xl">
  //         02
  //       </h1>
  //       <h1 className="font-Satoshi font-black text-3xl uppercase">
  //         iTelasoft (pvt) ltd
  //       </h1>
  //     </div>
  //     <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //       Intern UI/UX Engineer
  //     </h1>
  //     <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //       2023 August - 2024 February
  //     </h1>
  //     <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //       Mainly focus on frontend development with JavaScript.
  //     </h1>
  //     <h1 className="text-[#5A5A5A] font-Satoshi font-medium text-lg my-3 ml-16">
  //       Styling web applications with CSS and frameworks.
  //     </h1>
  //   </div>
  // );

  return (
    <div className="container mt-32">
      {/* <h1 className="font-Satoshi font-black text-6xl text-center mb-20 mt-10">Experience</h1> */}

      <div className="lg:flex items-start my-10">
        <h1 className="font-Satoshi font-black md:text-[2.8rem] text-4xl w-52 lg:mb-0 md:mb-10 mb-7">
          Education
        </h1>
        <TracingBeam className="">
          <div className=" antialiased relative">
            {education.map((item, index) => (
              <div key={`content-${index}`} className="mb-20">
                <div className="flex gap-3 mt-1">
                  <h1 className="h-9 px-3 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-sm md:text-xl">
                    {item.number}
                  </h1>
                  <h1 className="font-Satoshi font-black text-xl md:text-3xl uppercase">
                    {item.location}
                  </h1>
                </div>

                <h1 className="text-[#5A5A5A] font-Satoshi font-medium md:text-lg my-3 ml-16">
                  {' '}
                  {item.range}
                </h1>
                <h1 className="text-[#5A5A5A] font-Satoshi font-medium md:text-lg my-3 ml-16">
                  {item.other}
                </h1>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>

      <div className="lg:flex items-start my-10">
        <h1 className="font-Satoshi font-black md:text-[2.8rem] text-4xl w-52 lg:mb-0 md:mb-10 mb-7">
          Work
        </h1>
        <TracingBeam className="">
          <div className=" antialiased relative">
            {work.map((item, index) => (
              <div key={`content-${index}`} className="mb-20">
                <div className="flex gap-3 mt-1">
                  <h1 className="h-9 px-3 bg-black rounded-full flex items-center justify-center text-white font-Satoshi font-black text-sm md:text-xl">
                    {item.number}
                  </h1>
                  <h1 className="font-Satoshi font-black text-xl md:text-3xl uppercase">
                    {item.location}
                  </h1>
                </div>

                <h1 className="text-[#5A5A5A] font-Satoshi font-bold md:text-lg my-3 ml-16">
                  {item.occupation}
                </h1>
                <h1 className="text-[#939393]  font-Satoshi font-medium md:text-lg my-3 ml-16">
                  {' '}
                  {item.range}
                </h1>
                <h1 className="text-[#939393] font-Satoshi font-medium md:text-lg my-3 ml-16">
                  {item.other1}
                </h1>
                <h1 className="text-[#939393]  font-Satoshi font-medium md:text-lg my-3 ml-16">
                  {' '}
                  {item.other2}
                </h1>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

const education = [
  {
    location: 'Anuradhapura Central College',
    range: '2010-2019',
    number: '01',
  },
  {
    location: 'Sri lanka institute of information technology',
    range: ' 2020- Present (4th year)',
    number: '02',
    other:
      'Bsc (Hons) in Information Technology Specializing inSoftware Engineering - SLIIT ( Malabe )',
  },
];

const work = [
  {
    location: 'STEPHEN INNOVATIONS (PVT) LTD',
    range: '2023 January - 2023 August',
    number: '01',
    occupation: 'Intern Full Stack Developer (MERN)',
    other1: 'Focused on frontend and backend development.',
    other2: 'Did integration of web applications.',
  },
  {
    location: 'iTelasoft (pvt) ltd',
    range: ' 2023 August - 2024 February',
    number: '02',
    occupation: 'Intern UI/UX Engineer',
    other1: 'Mainly focus on frontend development with JavaScript.',
    other2: 'Styling web applications with CSS and frameworks.',
  },
];
