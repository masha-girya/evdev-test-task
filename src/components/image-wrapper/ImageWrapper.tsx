'use client';

import { useDevice } from '@/utils/hooks';
import Image from 'next/image';
import { useCallback } from 'react';

interface IProps {
  srcDesk: string;
  srcMob: string;
  alt: string;
  styles?: string;
  priority?: boolean;
}

export const ImageWrapper = (props: IProps) => {
  const { srcDesk, srcMob, alt, styles, priority } = props;
  const { device } = useDevice();

  const switchDevice = useCallback(() => {
    switch (true) {
      case device.isDesktop || device.isTablet:
        return srcDesk;
      case device.isMobile:
        return srcMob;
      default:
        return '';
    }
  }, [device]);

  return (
    <>
      {device.isMobile || device.isDesktop || device.isTablet ? (
        <Image
          src={switchDevice()}
          alt={alt}
          className={styles}
          priority={priority}
          fill
        />
      ) : (
        <div style={{ width: '100%', height: '100%' }}></div>
      )}
    </>
  );
};
