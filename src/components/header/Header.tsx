'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { HeaderMobile } from './header-mobile';
import { Nav } from '@/components';
import { ROUTES_CONSTANTS } from '@/constants';
import { useDevice } from '@/utils/hooks';
import LogoImage from '@/styles/images/logo.png';
import styles from './header.module.scss';

export const Header = () => {
  const [onScrollDown, setOnScrollDown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { device } = useDevice();

  useEffect(() => {
    let lastScrollTop = 0;

    const listener = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      setOnScrollDown(scrollTop > lastScrollTop);

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <header
      className={classNames(styles.header, {
        [styles.header_onScrollDown]: onScrollDown,
      })}
    >
      {device.isDesktop && (
        <a href={ROUTES_CONSTANTS.home.link} className={styles.header__logo} >
          <Image src={LogoImage} alt="Logo"/>
        </a>
      )}

      {(device.isTablet || device.isMobile) && <HeaderMobile />}
      {device.isDesktop && <Nav />}
    </header>
  );
};
