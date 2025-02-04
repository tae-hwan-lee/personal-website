import React, { useState, useEffect } from 'react';
import { Smile } from 'react-feather';

import useThemeStore from '../utils/zustand/useThemeStore';

const PuzzleTimer = () => {
  const { theme, setTheme } = useThemeStore();

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds
      .toString()
      .padStart(2, '0')}`;
  };

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
    <div className='min-h-screen flex flex-col'>
      <header className='z-10 mt-8 mx-8 flex items-end justify-end'>
        <button className='block py-1' onClick={handleThemeChange}>
          <Smile color='var(--text-primary)' size={48} />
        </button>
      </header>
      <div className='flex flex-col items-center justify-center gap-12 text-center flex-1'>
        <div className='puzzle-timer flex flex-col gap-4'>
          <div className='timer-display text-5xl sm:text-8xl'>
            {formatTime()}
          </div>
          <div className='timer-controls flex gap-8 text-xl sm:text-3xl'>
            {!isRunning ? (
              <button
                className='border-4 p-1 sm:p-2 transition-transform hover:-translate-y-1'
                onClick={startTimer}
              >
                Start
              </button>
            ) : (
              <button
                className='border-4 p-1 sm:p-2 transition-transform hover:-translate-y-1'
                onClick={stopTimer}
              >
                Stop
              </button>
            )}
            <button
              className='border-4 p-1 sm:p-2 transition-transform hover:-translate-y-1'
              onClick={resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleTimer;
