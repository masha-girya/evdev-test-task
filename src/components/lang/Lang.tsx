'use client';

import React, { useCallback, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';
import { DropDownArrowIcon } from '@/components/icons';
import { LANG_CONSTANTS, TLang } from '@/constants';
import styles from './lang.module.scss';
import { LangList } from './lang-list/LangList';
import { useDevice } from '@/utils/hooks';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Lang = () => {
  const nodeRef = useRef<null | any>(null);

  const [activeLang, setActiveLang] = useState<TLang>(LANG_CONSTANTS.eng);
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const { device } = useDevice();

  const handleAppearance = useCallback(() => {
    setisOpenMenu(true);
  }, []);

  const handleClose = useCallback(() => {
    setisOpenMenu(false);
  }, []);

  return (
    <div
      className={styles.langBox}
      onMouseEnter={handleAppearance}
      onMouseLeave={handleClose}
    >
      <div className={styles.langBox__dropdown}>
        <p>{activeLang}</p>
        <DropDownArrowIcon className={styles.langBox__dropdown__icon} />
      </div>

      <Transition
        nodeRef={nodeRef}
        in={isOpenMenu || device.isTablet}
        timeout={duration}
      >
        {(state) => (
          <div
            ref={device.isDesktop ? nodeRef : ''}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div
              className={classNames(styles.dropdownMenuWrapper, {
                [styles.dropdownMenuWrapper_open]: isOpenMenu,
              })}
              onMouseLeave={handleClose}
            >
              <LangList
                isOpenMenu={isOpenMenu}
                activeLang={activeLang}
                setActiveLang={setActiveLang}
              />
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};
