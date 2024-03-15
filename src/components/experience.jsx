import { TracingBeam } from './core/tracing-beam';

export const Experience = () => {
  return (
    <div className="container relative mt-32">
      <span className="absolute -top-[10rem]" id="experience" />
      <div className="lg:flex items-start mb-10">
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

      <div className="lg:flex items-start">
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
