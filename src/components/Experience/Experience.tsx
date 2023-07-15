import { FC, memo, useEffect, useReducer, useRef } from 'react';
import { Chrono } from 'react-chrono';
import classNames from 'classnames';
import gsap from 'gsap';

import css from './Experience.module.scss';

import { useAppSelector } from '@/redux';

import data from '@/assets/static';

export type ExperienceProps = {
  className?: string;
};

const Experience: FC<ExperienceProps> = ({ className }) => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const { isDarkMode } = useAppSelector((state) => state);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: titleRef.current,
      opacity: 0,
      y: 20,
      duration: 1
    });
  }, []);

  useEffect(() => {
    console.log('test');
    forceUpdate();
  }, [isDarkMode]);

  return (
    <div className={classNames('Experience', css.root, className)}>
      <p className={css.title} ref={titleRef}>
        EXPERIENCE
      </p>
      <div className={css.timelineContainer}>
        {!isDarkMode && (
          <Chrono
            items={data.experience.workHistory}
            mode="VERTICAL_ALTERNATING"
            cardHeight={300}
            cardWidth={400}
            mediaHeight={200}
            scrollable={{ scrollbar: false }}
            fontSizes={{
              title: '1.25rem',
              cardTitle: '2rem',
              cardSubtitle: '1.5rem',
              cardDetailedText: '2rem'
            }}
            theme={{
              primary: 'black',
              secondary: 'white',
              cardBgColor: 'white',
              titleColor: 'black',
              titleColorActive: 'black'
            }}
          />
        )}

        {isDarkMode && (
          <Chrono
            items={data.experience.workHistory}
            mode="VERTICAL_ALTERNATING"
            cardHeight={300}
            cardWidth={400}
            mediaHeight={200}
            scrollable={{ scrollbar: false }}
            fontSizes={{
              title: '1.25rem',
              cardTitle: '2rem',
              cardSubtitle: '1.5rem',
              cardDetailedText: '2rem'
            }}
            theme={{
              primary: 'white',
              secondary: '#252526',
              cardBgColor: 'white',
              titleColor: 'white',
              titleColorActive: 'white'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default memo(Experience);
