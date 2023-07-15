import { FC } from 'react';
import { BsEnvelope, BsGithub, BsPersonVcard } from 'react-icons/bs';
import Switch from 'react-switch';
import classNames from 'classnames';

import css from './Nav.module.scss';

import { setIsDarkMode, useAppDispatch, useAppSelector } from '@/redux';

export interface NavProps {
  className?: string;
}

const Nav: FC<NavProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state) => state);

  const handleChange = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };
  return (
    <nav
      className={classNames('Nav', css.root, className)}
      style={{ backgroundColor: isDarkMode ? '#1e1e1e' : 'white', transition: '0.5s ease' }}
    >
      <div className={css.wrapper}>
        <ul>
          <li style={{ color: isDarkMode ? 'white' : 'black', transition: '0.5s ease' }}>
            <a className={css.navIcon} href="/raymond-chu-resume.pdf" target="_blank" rel="noopener noreferrer">
              <BsPersonVcard className={css.navImage} />
              <span className={css.navText}>Resume</span>
            </a>
          </li>
          <li style={{ color: isDarkMode ? 'white' : 'black', transition: '0.5s ease' }}>
            <a
              className={css.navIcon}
              href="https://www.github.com/raymondchuu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className={css.navImage} />
              <span className={css.navText}>GitHub</span>
            </a>
          </li>
          <li style={{ color: isDarkMode ? 'white' : 'black', transition: '0.5s ease' }}>
            <a className={css.navIcon} href="mailto:raymondchu1996@gmail.com" target="_blank" rel="noopener noreferrer">
              <BsEnvelope className={css.navImage} />
              <span className={css.navText}>Mail</span>
            </a>
          </li>
        </ul>
        <ul className={css.links}>
          <label htmlFor="small-radius-switch">
            <Switch
              checked={isDarkMode}
              onChange={() => handleChange()}
              handleDiameter={28}
              offColor="#f9f9f9"
              onColor="#f9f9f9"
              offHandleColor="#FFF"
              onHandleColor="#1e1e1e"
              height={40}
              width={70}
              borderRadius={6}
              activeBoxShadow="0px 0px 1px 2px #fffc35"
              uncheckedIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 15,
                    color: 'orange',
                    paddingRight: 2
                  }}
                ></div>
              }
              checkedIcon={
                <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
                  {/* <circle r={3} cx={5} cy={5} /> */}
                </svg>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 20
                  }}
                >
                  🌞
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    color: 'red',
                    fontSize: 18
                  }}
                >
                  🌙
                </div>
              }
              className="react-switch"
              id="small-radius-switch"
            />
          </label>
        </ul>
      </div>

      <section aria-hidden="true" id="start-of-content"></section>
    </nav>
  );
};

export default Nav;
