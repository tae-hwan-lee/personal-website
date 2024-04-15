import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav className='flex'>
        <div className='w-3/5 ml-4 mt-2'>
          <ul className='w-full flex justify-between border-b text-sm sm:text-lg mb-2'>
            <div className='flex gap-4 sm:gap-14'>
              <li className=''>
                <Link to='/about' className='no-underline text-sm sm:text-lg'>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to='/about' className='no-underline text-sm sm:text-lg'>
                  PROJECTS
                </Link>
              </li>
            </div>
            <div className='flex  gap-4 sm:gap-14'>
              <li className='self-end'>
                <Link
                  href='https://www.linkedin.com/in/tae-hwan-lee/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='no-underline text-sm sm:text-lg'
                >
                  LINKEDIN
                </Link>
              </li>
              <li className='self-end mr-12'>
                <Link
                  href='https://github.com/tae-hwan-lee'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='no-underline text-sm sm:text-lg'
                >
                  GITHUB
                </Link>
              </li>
            </div>
          </ul>

          <ul className='w-full flex gap-4 sm:gap-x-24 border-b-2'>
            <li>
              <Link to='/about' className='no-underline text-sm sm:text-lg'>
                HOROSCOPES
              </Link>
            </li>
            <li>
              <Link to='/about' className='no-underline text-sm sm:text-lg'>
                MS ESCHER
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-2/5 text-7xl text-center mt-2'>TAE LEE</div>
      </nav>
    </header>
  );
};
