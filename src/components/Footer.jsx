import { useState } from 'react';

export const Footer = () => {
  const [footerContent, setFooterContent] = useState('૮ ・ﻌ・ა');
  const changeFooter = () => {
    const texts = [
      '໒( ̿･ ᴥ ̿･ )ʋ',
      'why is the footer changing',
      '૮ ˙ ﻌ˙ ა',
      '૮ ⚆ﻌ⚆ა',
      'footér',
      '૮ ºﻌºა',
      'my back hurts',
      'INSERT FOOTER HERE',
    ];
    const currentIndex = texts.indexOf(footerContent);
    const nextIndex = (currentIndex + 1) % texts.length;
    setFooterContent(texts[nextIndex]);
  };

  return (
    <footer onMouseEnter={changeFooter}>
      <div className='h-12 text-sm sm:text-xl text-center tracking-widerest pointer-events-none'>
        {footerContent}
      </div>
    </footer>
  );
};
