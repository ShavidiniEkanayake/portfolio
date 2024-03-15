import { useState } from 'react';

import { Dribble, Facebook, Github, LinkedIn } from '../icons';

export const Contact = () => {
  const emailAddress = 'shavidilunika10s@gmail.com';
  const phoneNumber = '+94703009912';
  const [isToastVisible, setToastVisible] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  return (
    <div
      className={`bg-[#F8F8F8] dark:bg-darkmode p-4 flex justify-center items-center text-center`}
      id="contact-me"
    >
      <div>
        <h1 className="text-xl font-Satoshi font-semibold dark:text-white text-textBlue mb-6 mt-3 md:text-3xl">
          Contact Me
        </h1>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/shavidini-ekanayake/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="w-6 h-6 cursor-pointer transition-transform duration-300 transform hover:scale-110" />
          </a>
          <a
            href="https://github.com/ShavidiniEkanayake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 cursor-pointer transition-transform duration-300 transform hover:scale-110" />
          </a>
          <a
            href="https://facebook.com/shavi.dilunika/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 cursor-pointer transition-transform duration-300 transform hover:scale-110" />
          </a>
          <a
            href="https://dribbble.com/shavidiniekanayake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dribble className="w-6 h-6 cursor-pointer transition-transform duration-300 transform hover:scale-110" />
          </a>
        </div>

        <div className="mt-4 ">
          <div className="font-Satoshi font-medium m-3 text-lg cursor-pointer transition-transform duration-300 transform hover:scale-95 hover:text-[#9F9F9F]">
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </div>
          <div
            className="font-Satoshi font-medium mb-2 cursor-pointer transition-transform duration-300 transform hover:scale-95 hover:text-[#9F9F9F]"
            onClick={copyPhoneNumber}
          >
            {phoneNumber}
            {isToastVisible && (
              <span className="text-orange ml-2">Number copied!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
