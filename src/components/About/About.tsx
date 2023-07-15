import { FC, memo, useEffect, useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';

import css from './About.module.scss';

import BaseImage from '@/components/BaseImage/BaseImage';

import data from '@/assets/static';

export type AboutProps = {
  className?: string;
};

const About: FC<AboutProps> = ({ className }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const paragraph3Ref = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { about } = data;

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: titleRef.current,
      opacity: 0,
      y: 20,
      duration: 1
    });
    gsap.from(paragraph1Ref.current, {
      scrollTrigger: titleRef.current,
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.33
    });
    gsap.from(paragraph2Ref.current, {
      scrollTrigger: titleRef.current,
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.66
    });
    gsap.from(paragraph3Ref.current, {
      scrollTrigger: titleRef.current,
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1
    });
    gsap.from(imageRef.current, {
      scrollTrigger: imageRef.current,
      y: 40,
      opacity: 0,
      skewY: 4,
      ease: 'easeTwo',
      duration: 1,
      delay: 1
    });
  }, []);

  return (
    <div className={classNames('About', css.root, className)} ref={aboutRef} id="aboutSection">
      <p className={css.title} ref={titleRef}>
        ABOUT ME
      </p>
      <div className={css.descriptionContainer}>
        <div className={css.description}>
          <p ref={paragraph1Ref}>{about.paragraph1}</p>
          <p ref={paragraph2Ref}>{about.paragraph2}</p>
          <p ref={paragraph3Ref}>{about.paragraph3}☕</p>
        </div>
        <div className={css.imageContainer} ref={imageRef}>
          <BaseImage className={css.image} data={require('@/assets/images/selfie.jpg').default} />
        </div>
      </div>
    </div>
  );
};

export default memo(About);
