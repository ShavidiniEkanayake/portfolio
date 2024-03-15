import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return React.createElement(
    motion.div,
    {
      ref: ref,
      className: cn(
        'relative w-full max-w-4xl mx-auto h-full tracingBeam ',
        className,
      ),
    },
    React.createElement(
      'div',
      { className: 'absolute lg:-left-20 md:-left-3 -left-4 top-3' },
      React.createElement(
        motion.div,
        {
          transition: {
            duration: 0.2,
            delay: 0.5,
          },
          animate: {
            boxShadow:
              scrollYProgress.get() > 0
                ? 'none'
                : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          },
          className:
            'ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center',
        },
        React.createElement(motion.div, {
          transition: {
            duration: 0.2,
            delay: 0.5,
          },
          animate: {
            backgroundColor: scrollYProgress.get() > 0 ? 'white' : '#FF2E00',
            borderColor: scrollYProgress.get() > 0 ? 'white' : '#FF2E00',
          },
          className: 'h-2 w-2  rounded-full border border-neutral-300 bg-white',
        }),
      ),
      React.createElement(
        'svg',
        {
          viewBox: `0 0 20 ${svgHeight}`,
          width: '20',
          height: svgHeight,
          className: 'ml-4 block',
          'aria-hidden': 'true',
        },
        React.createElement(motion.path, {
          d: `M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`,
          fill: 'none',
          stroke: '#9091A0',
          strokeOpacity: '0.16',
          transition: {
            duration: 10,
          },
        }),
        React.createElement(motion.path, {
          d: `M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`,
          fill: 'none',
          stroke: 'url(#gradient)',
          strokeWidth: '3',
          className: 'motion-reduce:hidden',
          transition: {
            duration: 10,
          },
        }),
        React.createElement(
          'defs',
          null,
          React.createElement(
            motion.linearGradient,
            {
              id: 'gradient',
              gradientUnits: 'userSpaceOnUse',
              x1: '0',
              x2: '0',
              y1: y1, // set y1 for gradient
              y2: y2, // set y2 for gradient
            },
            React.createElement('stop', {
              stopColor: '#FF2E00',
              stopOpacity: '0',
            }),
            React.createElement('stop', { stopColor: '#FF2E00' }),
            React.createElement('stop', {
              offset: '0.325',
              stopColor: '#FF2E00',
            }),
            React.createElement('stop', {
              offset: '1',
              stopColor: '#ffffff',
              stopOpacity: '0',
            }),
          ),
        ),
      ),
    ),
    React.createElement('div', { ref: contentRef }, children),
  );
};
