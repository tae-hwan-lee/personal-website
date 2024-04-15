import { useEffect, useRef } from 'react';

export const MCEscher = () => {
  const textPathRef = useRef();
  const lastTimeRef = useRef(performance.now());
  const offsetRef = useRef(-34);
  const repeatText = 'TAE LEE '.repeat(80);
  // const wavePathRef = useRef();
  useEffect(() => {
    // const pathLength = wavePathRef.current.getTotalLength();
    // console.log(`The total length of the wave path is: ${pathLength}`);
    const animate = (time) => {
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const speedFactor = 0.01;
      if (offsetRef.current > 0) {
        offsetRef.current = -34;
      }
      offsetRef.current =
        (offsetRef.current + (speedFactor * deltaTime) / 10) % 100; // Normalize speed based on a 60Hz refresh rate
      console.log(offsetRef.current);

      if (textPathRef.current) {
        textPathRef.current.setAttribute(
          'startOffset',
          `${offsetRef.current}%`
        );
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    // <svg width='100vw' height='400' xmlns='http://www.w3.org/2000/svg'>
    //   <path
    //     id='wavePath'
    //     fill='none'
    //     stroke='none'
    //     d='M10,200 Q 200,20 200,200 T 490,100'
    //     ref={wavePathRef}
    //   />
    <svg
      width='518'
      height='550'
      viewBox='0 0 600 600'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='wavePath'
        d='M220.219 1H297.242L517 372.46M220.219 1L1 372.46L40.3194 446M220.219 1L400.119 297.846H325.251M517 372.46L480.912 446H40.3194M517 372.46H149.121L192.211 297.846M40.3194 446L220.219 128.22L255.451 185.119M192.211 297.846H325.251M192.211 297.846L255.451 185.119M325.251 297.846L255.451 185.119'
        stroke='none'
      />
      <text fontSize='24' fill='#197B34'>
        <textPath href='#wavePath' ref={textPathRef}>
          {repeatText}
        </textPath>
      </text>
    </svg>
  );
};
