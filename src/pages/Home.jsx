import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import useThemeStore from '../utils/zustand/useThemeStore';
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
    <main>
      <div
        id='intro'
        className='flex justify-center items-center h-almost-screen overflow-hidden'
      >
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
    </main>
  );
};
