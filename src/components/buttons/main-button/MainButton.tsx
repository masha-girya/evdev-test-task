import classNames from 'classnames';
import styles from './main-button.module.scss';
import { ArrowRightIcon } from '@/components/icons';

interface IProps {
  text: string;
  variant?: 'black';
  handleClick?: () => void;
  link?: string;
  colors?: string[];
  withArrow?: boolean;
}

export const MainButton = (props: IProps) => {
  const { text, handleClick, link, variant = 'black', withArrow } = props;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        styles.mainButton,
        styles[`mainButton--${variant}`],
      )}
    >
      <div className={styles.mainButton__contentBox}>
        <>
          {link ? (
            <a
              href={link}
              target="_blank"
              className={classNames(
                styles.mainButton__text,
                styles.mainButton__text_link,
                styles[`mainButton__text--${variant}`],
              )}
            >
              {text}
            </a>
          ) : (
            <p
              className={classNames(
                styles.mainButton__text,
                styles[`mainButton__text--${variant}`],
              )}
            >
              {text}
            </p>
          )}
        </>

        {withArrow && (
          <div className={classNames(styles.mainButton__icon)}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
    </button>
  );
};
