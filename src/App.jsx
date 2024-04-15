import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import useThemeStore from './utils/zustand/useThemeStore.js';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className='App' theme={theme}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
