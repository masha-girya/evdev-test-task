'use client';

import { useCallback, useState } from 'react';
import styles from './cursor.module.scss';

interface ICursorProps {
  cursorTitle: string;
}

const withCursor = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  return (props: P & ICursorProps) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [visibleScale, setVisibleScale] = useState(0);

    const transformStyles = {
      transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0px) scale(${visibleScale})`,
      opacity: visibleScale,
    };

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const cursorRadius = 90;

        setCursorPosition({
          x: e.clientX - cursorRadius,
          y: e.clientY - cursorRadius,
        });

        if (!visibleScale) {
          setVisibleScale(1);
        }
      },
      [visibleScale],
    );

    const handleMouseLeave = useCallback(() => {
      setVisibleScale(0);
    }, []);

    return (
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...props} />

        <span className={styles.cursor} style={{ ...transformStyles }}>
          <p>{props.cursorTitle}</p>
        </span>
      </div>
    );
  };
};

export default withCursor;
