'use client';

import classNames from 'classnames';
import styles from './ukraine-button.module.scss';
import { UaGradientIcon, UaIcon } from '@/components/icons';
import { useDevice } from '@/utils/hooks';

export const UkraineButton = () => {
  const { device } = useDevice();

  return (
    <button type="button" className={classNames(styles.uaButton)}>
      <div className={styles.uaButton__contentBox}>
        {device.isTablet || device.isMobile ? (
          <UaGradientIcon className={styles.uaButton__icon} />
        ) : (
          <UaIcon className={styles.uaButton__icon} />
        )}
        <a
          href="/"
          target="_blank"
          className={classNames(styles.uaButton__text)}
        >
          Support Ukraine
        </a>
      </div>
    </button>
  );
};
