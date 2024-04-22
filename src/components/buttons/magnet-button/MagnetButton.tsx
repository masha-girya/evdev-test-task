'use client';

import { useCallback, useRef } from 'react';
import styles from './magnet-button.module.scss';

interface IProps {
  handleClick: () => void;
  text: string;
}

export const MagnetButton = (props: IProps) => {
  const { handleClick, text } = props;

  const parentRef = useRef<any | null>(null);
  const titleRef = useRef<any | null>(null);
  const buttonRef = useRef<any | null>(null);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!parentRef.current) {
        return;
      }

      if (titleRef.current && buttonRef.current) {
        const { width, height, top, left } =
          parentRef.current.getBoundingClientRect();

        const moveCoef = 0.1;

        const moveX = (clientX - left - width / 2) * moveCoef;
        const moveY = (clientY - top - height / 2) * moveCoef;

        titleRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        buttonRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }
    },
    [parentRef, titleRef, buttonRef],
  );

  const handleMouseLeave = useCallback(() => {
    if (titleRef.current && buttonRef.current) {
      titleRef.current.style.transform = `translate3d(0px, 0px, 0)`;
      buttonRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    }
  }, [titleRef, buttonRef]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={parentRef}
    >
      <button
        type="button"
        onClick={() => handleClick}
        className={styles.magnetButton}
        ref={buttonRef}
      >
        <p ref={titleRef}>{text}</p>
      </button>
    </div>
  );
};
