import { FC, memo, useEffect, useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';

import css from './Projects.module.scss';

import Card from '@/components/Card/Card';

import data from '@/assets/static';
export type ProjectsProps = {
  className?: string;
};

const Projects: FC<ProjectsProps> = ({ className }) => {
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: titleRef.current,
      opacity: 0,
      y: 20,
      duration: 1
    });
  }, []);
  return (
    <div className={classNames('Projects', css.root, className)}>
      <p className={css.title} ref={titleRef}>
        PROJECTS
      </p>
      <div className={css.projectContainer}>
        {data.projects.personal.map(({ title, media, description, link }, i) => {
          return (
            <div key={title}>
              <Card
                title={title}
                description={description}
                image={media.source.url}
                link={link}
                key={title}
                delay={i / 4}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Projects);
