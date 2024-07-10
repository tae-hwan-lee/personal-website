import React, { useState } from 'react';
import horoscopes from '../utils/horoscopes.json';

export const Horoscopes = () => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  // Get today's date
  const today = new Date();
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  console.log(formattedDate); // e.g., "Dec 20, 2024"

  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );

  // Get the mood based on the day of the year
  const moods = Object.keys(horoscopes);
  const moodIndex = dayOfYear % moods.length;
  const mood = moods[moodIndex];
  const { filename, horoscope, emote } = horoscopes[mood];

  const photoPath = '/images/archie/' + filename;

  return (
    <div className='flex flex-col items-center gap-12 text-center'>
      <div className='flex flex-col sm:flex-row justify-center gap-1 sm:gap-48'>
        <div className='text-lg'>today is {formattedDate}</div>
        <div className='text-lg'>today's emote: {emote}</div>
      </div>
      <h1 className='text-3xl sm:text-4xl'>today's mood: {mood}</h1>
      {!isImageLoaded && (
        <div className='w-full h-96'>Archie is on the way...</div>
      )}
      <img
        src={photoPath}
        alt={`archie's mood today is: ${mood}`}
        className={`h-72 sm:h-96 ${isImageLoaded ? 'block' : 'hidden'}`}
        onLoad={() => setImageLoaded(true)}
      />
      <div className='text-lg'>{horoscope}</div>
    </div>
  );
};
