import styles from './circle-puls.module.scss';

export const CirclePuls = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.circle__1} style={{ animationDelay: '0s' }}></div>
      <div
        className={styles.circle__2}
        style={{ animationDelay: '0.5s' }}
      ></div>
      <div
        className={styles.circle__3}
        style={{ animationDelay: '0.6s' }}
      ></div>
    </div>
  );
};
