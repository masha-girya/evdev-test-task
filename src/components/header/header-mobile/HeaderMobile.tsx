'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BurgerButton, Nav } from '@/components';
import { ROUTES_CONSTANTS } from '@/constants';
import LogoImage from '@/styles/images/logo.png';
import { CallIcon } from '@/components/icons';
import styles from './header-mobile.module.scss';

export const HeaderMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    const htmlEl = document.documentElement;

    if (isNavOpen) {
      body.style.overflowY = 'hidden';
      htmlEl.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'visible';
      htmlEl.style.overflowY = 'visible';
    }
  }, [isNavOpen]);

  return (
    <>
      <a href="tel:8882192787" className={styles.headerMobile__phone}>
        <CallIcon />
      </a>
      <a href={ROUTES_CONSTANTS.home.link} className={styles.headerMobile__logoBox}>
        <Image
          src={LogoImage}
          alt="Logo"
          className={styles.headerMobile__logoBox__logo}
        />
      </a>
      <BurgerButton
        menuOpen={isNavOpen}
        handleMobileMenu={() => setIsNavOpen(!isNavOpen)}
      />
      {isNavOpen && (
        <div className={styles.headerMobile__navBox}>
          <Nav />
        </div>
      )}
    </>
  );
};
