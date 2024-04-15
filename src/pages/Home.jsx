import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import useThemeStore from '../utils/zustand/useThemeStore';
import epicConsoleLogger from '../utils/epicConsoleLogger';
import dood from '../images/dood.png';

export const Home = () => {
  const { theme, setTheme } = useThemeStore();
  const doodRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      const doodWidth = doodRef.current.offsetWidth;
      const windowWidth = window.innerWidth;
      const leftRightConstraint = (windowWidth - doodWidth) / 2 - 50;

      setConstraints({
        top: -200,
        bottom: 200,
        left: -leftRightConstraint,
        right: leftRightConstraint,
      });
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);

    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  useEffect(() => {
    epicConsoleLogger();
  }, []);

  const handleThemeChange = () => {
    const colors = [
      'red',
      'der',
      'green',
      'neerg',
      'blue',
      'eulb',
      'dark',
      'light',
    ];
    const currentIndex = colors.indexOf(theme);
    const nextIndex = (currentIndex + 1) % colors.length;
    setTheme(colors[nextIndex]);
  };

  return (
    <div className='main-container'>
      <div
        id='intro'
        className='flex justify-center items-center h-almost-screen'
      >
        {/* <div className=''>art</div> */}
        <motion.div
          drag
          dragConstraints={constraints}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 0, 0, 0, 1, -1, 0],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          ref={doodRef}
        >
          <img
            src={dood}
            alt='dood'
            className='dood h-72'
            id='dood'
            onClick={handleThemeChange}
          ></img>
        </motion.div>
      </div>
      <div className='w-4/5 border-b right-0'></div>
      <div className='my-20 ml-48 flex flex-col gap-12'>
        <div>
          <p>✩ō͡≡o</p>
          <p>smartcar</p>
          <p>2022-present</p>
          <p>software engineer</p>
          <p>react/node</p>
        </div>
        <div>
          <p>(⌐▀͡ ̯ʖ▀)</p>
          <p>critchfield mechanical, inc.</p>
          <p>2019-2021</p>
          <p>mechanical engineer</p>
          <p>designed hvac systems for commercial buildings</p>
        </div>
        <div>
          <p>૮ ・ﻌ・ა</p>
          <p>cal poly, slo</p>
          <p>2015-2019</p>
          <p>mechanical engineering student</p>
        </div>
      </div>
    </div>
  );
};
