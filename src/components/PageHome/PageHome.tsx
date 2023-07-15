import { FC, memo, useEffect, useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';

import css from './PageHome.module.scss';

import { PageProps } from '@/data/types';

import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Home from '@/components/Home/Home';
import Projects from '@/components/Projects/Projects';

import { useAppSelector } from '@/redux';

export interface PageHomeProps extends PageProps {
  className?: string;
}

const PageHome: FC<PageHomeProps> = ({ className }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const { isDarkMode } = useAppSelector((state) => state);

  useEffect(() => {
    const timeline = gsap
      .timeline()
      .fadeIn(titleRef.current, 0.2)
      .fadeIn(descriptionRef.current, 0.4)
      .fadeIn(listRef.current?.childNodes, { stagger: 0.1 }, 0.6);

    return () => {
      timeline?.kill();
    };
  }, []);

  return (
    <main
      className={classNames('PageHome', css.root, className)}
      style={{
        backgroundColor: isDarkMode ? '#252526' : '#FFF',
        color: isDarkMode ? 'white' : '#000',
        transition: '0.5s ease'
      }}
    >
      <section className={css.home}>
        <Home />
      </section>
      <section className={css.about}>
        <About />
      </section>
      <section className={css.experience}>
        <Experience />
      </section>
      <section className={css.projects}>
        <Projects />
      </section>
    </main>
  );
};

export default memo(PageHome);
