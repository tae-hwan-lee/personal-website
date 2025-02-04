import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import './App.css';
import useThemeStore from './utils/zustand/useThemeStore.js';
import { Header } from './components/Header';
import { HamburgerHeader } from './components/HamburgerHeader';
import { MCEscher } from './pages/MCEscher';
import { About } from './pages/About.jsx';
import { Horoscopes } from './pages/Horoscopes';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import epicConsoleLogger from './utils/epicConsoleLogger.js';
import PuzzleTimer from './pages/PuzzleTimer.jsx';

function App() {
  const theme = useThemeStore((state) => state.theme);
  const isMobile = useMediaQuery({ maxWidth: 890 });
  const location = useLocation();

  useEffect(() => {
    epicConsoleLogger();
  }, []);

  useEffect(() => {
    document.body.setAttribute('theme', theme);
  }, [theme]);

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      {location.pathname !== '/puzzle' &&
        (isMobile ? <HamburgerHeader /> : <Header />)}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/random' element={<MCEscher />} />
        <Route path='/about' element={<About />} />
        <Route path='/archie' element={<Horoscopes />} />
        <Route path='/puzzle' element={<PuzzleTimer />} />
      </Routes>
      {location.pathname !== '/puzzle' && <Footer />}
    </div>
  );
}

export default App;
