import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Smile } from 'react-feather';

const BoingLink = ({ text, path, external, customTypography, onClick }) => {
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
    if (onClick && !isActive) onClick();
  };

  if (external) {
    return (
      <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
        <a
          href={path}
          target='_blank'
          rel='noopener noreferrer'
          className='no-underline text-2xl'
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
        className={`${customTypography ? customTypography : 'text-2xl'} ${
          isActive ? 'border-custom' : 'no-underline'
        }`}
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
            className='absolute text-lg'
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

export const HamburgerHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='z-10 mt-4 mx-4'>
      <nav className='flex items-center justify-between'>
        <BoingLink
          path='/'
          text='TAE LEE'
          customTypography='text-5xl sm:text-7xl text-center mt-2'
        />
        <button className='block py-1' onClick={toggleMenu}>
          <Smile color='var(--text-primary)' size={48} />
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              className='fixed top-0 right-0 w-full h-full bg-transparent'
              onClick={toggleMenu}
            >
              <div
                className='w-3/5 h-full right-0 fixed border-l-8 border-double'
                id='menu'
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className='absolute text-4xl right-4 top-8'
                  onClick={toggleMenu}
                >
                  <Smile color='var(--text-primary)' size={48} />
                </button>
                <ul className='flex flex-col text-lg gap-2 mt-24 ml-4'>
                  <li>
                    <BoingLink
                      path='/'
                      text='TAE LEE'
                      customTypography=''
                      onClick={toggleMenu}
                    />
                  </li>
                  <li>
                    <BoingLink
                      text='ABOUT'
                      path='/about'
                      onClick={toggleMenu}
                    />
                  </li>
                  <li>
                    <BoingLink
                      text='HOROSCOPES'
                      path='/archie'
                      onClick={toggleMenu}
                    />
                  </li>
                  <li>
                    <BoingLink
                      text='MC ESCHER'
                      path='/random'
                      onClick={toggleMenu}
                    />
                  </li>
                  <li>
                    <BoingLink
                      path='https://www.linkedin.com/in/tae-hwan-lee/'
                      text='LINKEDIN'
                      external
                    />
                  </li>
                  <li>
                    <BoingLink
                      path='https://github.com/tae-hwan-lee'
                      text='GITHUB'
                      external
                    />
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
