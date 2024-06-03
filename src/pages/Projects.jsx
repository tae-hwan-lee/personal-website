import { useEffect, useRef } from 'react';

const staticText = {
  projects: [
    {
      title: 'boat',
      key: 'boat',
      time: '2023-2024',
      description:
        'A playground version of my portfolio. Progress has been inconsistent but it is fun to mess around with!',
      image: 'https://picsum.photos/seed/1234/300/200?blur',
      link: 'https://otaeotay.com/',
    },
    {
      title: 'Bopify',
      key: 'bopify',
      time: '2021',
      description:
        'Convert a playlist to its Kidz Bop alternative. A project I worked on when first learning how to code!',
      image: 'https://picsum.photos/seed/123/300/200?blur',
      link: 'https://github.com/tae-hwan-lee/bopify',
    },
    {
      title: 'Bubble Pomodoro',
      key: 'bubble',
      time: '2021',
      description:
        'A Chrome extension that helps users stay productive.  A project I worked on when first learning how to code!',
      image: 'https://picsum.photos/seed/12/300/200?blur',
      link: 'https://github.com/tae-hwan-lee/bubble-pomodoro-chrome-extension',
    },
  ],
};

export const Projects = () => {
  const ProjectsList = () =>
    staticText.projects.map((project) => (
      <div key={project.key} className='flex'>
        <div>
          <h1 className='text-2xl'>{project.title}</h1>
          <div>{project.description}</div>
        </div>
        <img src={project.image} alt={project.key}></img>
      </div>
    ));

  return (
    <main>
      <ProjectsList />
    </main>
  );
};
