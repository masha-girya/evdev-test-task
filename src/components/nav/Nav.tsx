import classNames from 'classnames';
import { NAV_CONSTANTS } from '@/constants';
import styles from './nav.module.scss';
import { Lang } from '../lang';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__navList}>
        <li
          className={classNames(styles.nav__navItem, styles.nav__navItem_forUa)}
        >
          <a href="/">for ukrainians</a>
        </li>

        {Object.values(NAV_CONSTANTS).map((nav) => (
          <li key={nav.title} className={styles.nav__navItem}>
            <a href={nav.link}>{nav.title}</a>
          </li>
        ))}

        <li className={styles.nav__navItem_lang}>
          <Lang />
        </li>
      </ul>
    </nav>
  );
};
