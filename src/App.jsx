import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import useThemeStore from './utils/zustand/useThemeStore.js';
import { Header } from './components/Header';
import { MCEscher } from './pages/MCEscher';
import { Projects } from './pages/Projects';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import epicConsoleLogger from './utils/epicConsoleLogger.js';

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    epicConsoleLogger();
  }, []);

  useEffect(() => {
    document.body.setAttribute('theme', theme);
  }, [theme]);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/random' element={<MCEscher />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
