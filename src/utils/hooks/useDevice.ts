import { useCallback, useEffect, useState } from 'react';

export const useDevice = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const handleResize = useCallback(() => {
    const { innerWidth } = window;

    setDevice({
      isMobile: innerWidth <= 680,
      isTablet: innerWidth > 680 && innerWidth <= 960,
      isDesktop: innerWidth > 960,
    });
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return { device };
};
