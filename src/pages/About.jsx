import { useState } from 'react';
import { Github } from '../components/Github';
import { LinkedIn } from '../components/LinkedIn';

const staticText = {
  projects: {
    boat: {
      title: 'boat',
      time: '2023-2024',
      description:
        'a playground version of my portfolio. progress has been inconsistent but it is fun to mess around with!',
      image: 'boat.png',
      link: 'https://otaeotay.com/',
    },
    bopify: {
      title: 'bopify',
      time: '2021',
      description:
        'convert a playlist to itz Kidz Bop alternative. a project i worked on when first learning how to code!',
      image: 'bopify.png',
      link: 'https://github.com/tae-hwan-lee/bopify',
    },
    bubble: {
      title: 'bubble pomodoro',
      time: '2021',
      description:
        'a chrome extension that helps users stay productive.  a project i worked on when first learning how to code!',
      image: 'bubble.png',
      link: 'https://github.com/tae-hwan-lee/bubble-pomodoro-chrome-extension',
    },
  },
};

const LazyLoadedImage = ({ src, alt }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const path = '/images/projects/' + src;
  return (
    <div className='flex items-center justify-center'>
      {!isImageLoaded && <div className='h-36 text-center'>...</div>}
      <img
        src={path}
        alt={alt}
        className={`w-96 ${isImageLoaded ? 'block' : 'hidden'}`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};
const { projects } = staticText;
const ProjectsList = () =>
  Object.keys(staticText.projects).map((projectName) => {
    const project = projects[projectName];
    return (
      <div
        key={project.title}
        className='flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4'
      >
        <div className='order-last lg:order-first'>
          <h2 className='text-xl'>{project.title}</h2>
          <div>{project.description}</div>
        </div>
        <LazyLoadedImage
          src={project.image}
          alt={project.title}
        ></LazyLoadedImage>
      </div>
    );
  });

export const About = () => {
  return (
    <main className='mx-12 sm:mx-48'>
      <div className='my-20 flex flex-col gap-12'>
        <h1 className='text-3xl'>experiences</h1>
        <div>
          <p>✩ō͡≡o</p>
          <h2 className='text-xl'>smartcar</h2>
          <p>2022-present</p>
          <p>software engineer</p>
          <p>react/node</p>
        </div>
        <div>
          <p>(⌐▀͡ ̯ʖ▀)</p>
          <h2 className='text-xl'>critchfield mechanical, inc.</h2>
          <p>2019-2021</p>
          <p>mechanical engineer</p>
          <p>designed hvac systems for commercial buildings</p>
        </div>
        <div>
          <p>૮ ・ﻌ・ა</p>
          <h2 className='text-xl'>cal poly, slo</h2>
          <p>2015-2019</p>
          <p>mechanical engineering student</p>
        </div>
      </div>
      <div className='w-3/5 border-b right-0'></div>
      <div className='my-20 flex flex-col gap-12'>
        <h1 className='text-3xl'>misc</h1>
        <div className='flex flex-col mr-12 gap-8'>
          <ProjectsList />
        </div>
      </div>
      <div className='flex justify-center gap-16 my-8'>
        <a
          href='https://github.com/tae-hwan-lee'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github fillColor='var(--text-primary)' className='w-16' />
        </a>
        <a
          href='https://www.linkedin.com/in/tae-hwan-lee/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedIn fillColor='var(--text-primary)' className='w-16' />
        </a>
      </div>
    </main>
  );
};
