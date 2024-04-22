import classNames from 'classnames';
import { MainButton, UkraineButton } from '@/components';
import styles from './title-block.module.scss';

export const TitleBlock = () => {
  return (
    <>
      <div className={styles.titleBlock}>
        <UkraineButton />
        <h1 className={styles.titleBlock__title}>
          Real{' '}
          <span className={styles.titleBlock__title_firstTitleMob}>Estate</span>
        </h1>
      </div>

      <div
        className={classNames(styles.titleBlock, styles.titleBlock_subtitleBox)}
      >
        <div>
          <h2 className={styles.titleBlock__title}>With Svoy</h2>
          <h5 className={styles.titleBlock__subtitle}>Real Estate Agency</h5>
        </div>

        <div className={styles.titleBlock__mainButton}>
          <MainButton text="Whole Collection" withArrow />
        </div>
      </div>
    </>
  );
};
