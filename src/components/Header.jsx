import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BoingLink = ({ text, path, external, customTypography }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  const [youAlreadyHereDude, setYouAlreadyHereDude] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(0);
  }, [location.pathname]);

  const handleClick = () => {
    if (isActive) {
      setYouAlreadyHereDude(true);
      setCounter(counter + 1);
    }
  };

  if (external) {
    return (
      <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
        <a
          href={path}
          target='_blank'
          rel='noopener noreferrer'
          className='no-underline text-sm sm:text-lg'
        >
          {text}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={customTypography}
      whileHover={{ y: -3 }}
      whileTap={{ y: 0 }}
    >
      <Link
        to={path}
        className={`${
          customTypography ? customTypography : 'text-sm sm:text-lg'
        } ${isActive ? 'border-custom' : 'no-underline'}`}
        onClick={handleClick}
      >
        {text}
      </Link>

      <AnimatePresence>
        {youAlreadyHereDude && isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1 }}
            className='absolute text-sm sm:text-lg'
            onAnimationComplete={() => setYouAlreadyHereDude(false)}
          >
            <svg width='200' height='100' className='curve-text'>
              <path id='curve' d='M10,80 Q100,10 190,80' fill='none' />
              <text width='200' fill='var(--text-primary)'>
                <textPath href='#curve'>You're already here!</textPath>
              </text>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Header = () => {
  return (
    <header className='z-10 mt-4'>
      <nav className='flex'>
        <div className='w-3/5 ml-4 mt-2'>
          <ul className='w-full flex justify-between border-b text-sm sm:text-lg mb-2'>
            <div className='flex gap-4 sm:gap-14'>
              <li className=''>
                <BoingLink text='ABOUT' path='/about' />
              </li>
            </div>
            <div className='flex  gap-4 sm:gap-14'>
              <li className='self-end'>
                <BoingLink
                  path='https://www.linkedin.com/in/tae-hwan-lee/'
                  text='LINKEDIN'
                  external
                />
              </li>
              <li className='self-end mr-12'>
                <BoingLink
                  path='https://github.com/tae-hwan-lee'
                  text='GITHUB'
                  external
                />
              </li>
            </div>
          </ul>

          <ul className='w-full flex gap-4 sm:gap-x-24 border-b-2'>
            <li>
              <BoingLink text='HOROSCOPES' path='/archie' />
            </li>
            <li>
              <BoingLink text='MS ESCHER' path='/random' />
            </li>
          </ul>
        </div>
        <BoingLink
          path='/'
          text='TAE LEE'
          customTypography='w-2/5 text-7xl text-center mt-2'
        ></BoingLink>
      </nav>
    </header>
  );
};
