import React, { useEffect } from 'react';
import './App.css';
import linkedin from './images/underconstruction/linkedin.png';
import github from './images/underconstruction/github.png';
import epicConsoleLogger from './utils/epicConsoleLogger';

function App() {
  useEffect(() => {
    epicConsoleLogger();
  }, []);

  return (
    <div className='App'>
      <a
        href='https://www.linkedin.com/in/tae-hwan-lee/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={linkedin}
          alt='LinkedIn'
          className='logos'
          id='linked-in'
        ></img>
      </a>
      <a
        href='https://github.com/tae-hwan-lee'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={github} alt='Github' className='logos' id='github'></img>
      </a>
    </div>
  );
}

export default App;
