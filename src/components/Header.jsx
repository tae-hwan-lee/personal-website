import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BoingLink = ({ text, path, external }) => {
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
    <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
      <Link to={path} className='no-underline text-sm sm:text-lg'>
        {text}
      </Link>
    </motion.div>
  );
};

export const Header = () => {
  return (
    <header>
      <nav className='flex'>
        <div className='w-3/5 ml-4 mt-2'>
          <ul className='w-full flex justify-between border-b text-sm sm:text-lg mb-2'>
            <div className='flex gap-4 sm:gap-14'>
              <li className=''>
                <BoingLink text='ABOUT' path='/about' />
              </li>
              <li>
                <BoingLink text='PROJECTS' path='/projects' />
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
              <BoingLink text='HOROSCOPES' path='/about' />
            </li>
            <li>
              <BoingLink text='MS ESCHER' path='/random' />
            </li>
          </ul>
        </div>
        <Link to='/' className='w-2/5 text-7xl text-center mt-2'>
          TAE LEE
        </Link>
      </nav>
    </header>
  );
};
