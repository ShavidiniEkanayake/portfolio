import React from 'react';

import { Logo } from '../../icons';
import { Heart } from '../../icons';

export const Footer = () => {
  return (
    <div>
      <hr className="border-[#E6E6E6]" />
      <div className="bg-white dark:bg-darkmode p-4 flex justify-center items-center">
        <div className="flex items-center">
          <a className="font-Satoshi font-medium text-lg">Made with</a>
          <Heart className="h-5 w-auto mx-2" />
        </div>
        <a className="font-Satoshi font-medium text-lg">by</a>
        <Logo className="lg:w-12 lg:h-12 h-7 w-auto ml-2" />
      </div>
    </div>
  );
};
