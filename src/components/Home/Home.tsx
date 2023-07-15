import { FC, memo, useEffect, useRef } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import { Canvas } from '@react-three/fiber';
import classNames from 'classnames';
import gsap, { Bounce } from 'gsap';

import css from './Home.module.scss';

import ThreeExperience from '@/components/ThreeExperience/ThreeExperience';

import { useAppSelector } from '@/redux';
export type HomeProps = {
  className?: string;
};

const Home: FC<HomeProps> = ({ className }) => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useAppSelector((state) => state);

  useEffect(() => {
    gsap.from(arrowRef.current, {
      ease: Bounce.easeOut,
      y: -200,
      duration: 1
    });
  });

  const handleScroll = () => {
    arrowRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classNames('Home', css.root, className)}>
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: isDarkMode ? '#252526' : '#FFF',
          transition: '0.5s ease'
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [4, -2, 6]
        }}
      >
        <ThreeExperience />
      </Canvas>
      <div className={css.downArrowContainer} ref={arrowRef} onClick={() => handleScroll()}>
        <BsArrowDownCircle className={css.downArrow} />
      </div>
    </div>
  );
};

export default memo(Home);
