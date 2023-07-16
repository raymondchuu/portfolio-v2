import { FC, memo, useEffect, useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import classNames from 'classnames';
import gsap from 'gsap';

import css from './Card.module.scss';

import { useAppSelector } from '@/redux';

export type CardProps = {
  className?: string;
  image: string;
  title: string;
  description: string;
  delay: number;
  link: string;
};

const Card: FC<CardProps> = ({ className, image, title, description, delay, link }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useAppSelector((state) => state);

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: cardRef.current,
      y: 40,
      opacity: 0,
      skewY: 4,
      ease: 'easeTwo',
      duration: 0.5,
      delay
    });
  }, [delay]);

  return (
    <div
      className={classNames('Card', css.root, className)}
      ref={cardRef}
      style={{ backgroundColor: isDarkMode ? '#1e1e1e' : '#FFF', transition: '0.5s ease' }}
    >
      <div className={css.imageContainer}>
        <img src={image} className={css.image} alt="Portrait of a project" />
      </div>
      <div className={css.textContainer}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.description}>{description}</p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <BsGithub className={css.githubLogo} />
      </a>
    </div>
  );
};

export default memo(Card);
