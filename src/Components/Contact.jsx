import React, { useState } from "react";
import FacebookIcon from "../Assets/Logos/Facebook-ash.svg";
import FacebookIconRed from "../Assets/Logos/Facebook-orgsvg.svg";
import GithubIcon from "../Assets/Logos/Github-ash.svg";
import GithubOrg from "../Assets/Logos/Github-org.svg"
import DribbbleIcon from "../Assets/Logos/Dribble-ash.svg";
import DribbleOrg from "../Assets/Logos/Dribble-org.svg"

export const Contact = () => {
  const emailAddress = "shavidilunika10s@gmail.com";
  const phoneNumber = "+94703009912";
  const [isFacebookHovered, setFacebookHovered] = useState(false);
  const [isGithubHovered, setGithubHovered] = useState(false);
  const [isDribbleHovered, setDribbleHovered] = useState(false);
  const [isToastVisible, setToastVisible] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setToastVisible(true);

    // Hide the toast after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  return (
    <div className={`bg-[#F8F8F8] dark:bg-darkmode text-black p-4 flex justify-center items-center text-center`}>
      <div>
        <h1 className="text-3xl font-Satoshi font-semibold dark:text-white text-textBlue mb-6 mt-3">
          Contact Me
        </h1>

        <div className="flex justify-center space-x-4 mt-4">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setFacebookHovered(true)}
            onMouseLeave={() => setFacebookHovered(false)}
          >
            <img
              src={isFacebookHovered ? FacebookIconRed : FacebookIcon}
              alt="Facebook"
              className="w-6 h-6 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setGithubHovered(true)}
            onMouseLeave={() => setGithubHovered(false)}
          >
            <img
              src={isGithubHovered ?GithubOrg : GithubIcon }
              alt="GitHub"
              className="w-6 h-6 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
          </a>

          {/* Dribbble Icon */}
          <a
            href="https://dribbble.com/your-dribbble-profile"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setDribbleHovered(true)}
            onMouseLeave={() => setDribbleHovered(false)}
          >
            <img
              src={isDribbleHovered ? DribbleOrg : DribbbleIcon}
              alt="Dribbble"
              className="w-6 h-6 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
          </a>
        </div>

        <div className="mt-4 font-Satoshi font-medium">
          <div className="m-3 text-lg cursor-pointer transition-transform duration-300 transform hover:scale-95 hover:text-[#9F9F9F]">
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </div>
          <div
            className="mb-2 cursor-pointer transition-transform duration-300 transform hover:scale-95 hover:text-[#9F9F9F]"
            onClick={copyPhoneNumber}
          >
            {phoneNumber}
            {isToastVisible && (
              <span className="text-green-500 ml-2">Number copied!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
