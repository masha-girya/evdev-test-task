import classNames from 'classnames';
import styles from './burger-button.module.scss';

interface IProps {
  handleMobileMenu: () => void;
  menuOpen: boolean;
}

export const BurgerButton = (props: IProps) => {
  const { handleMobileMenu, menuOpen } = props;

  return (
    <div
      className={classNames(styles.burger, { [styles.burger_open]: menuOpen })}
      onClick={handleMobileMenu}
    >
      {Array(3)
        .fill(0)
        .map((item, i) => (
          <div
            key={i}
            className={classNames(styles[`burger__${i + 1}`], {
              [styles[`burger__${i + 1}_open`]]: menuOpen,
            })}
          ></div>
        ))}
    </div>
  );
};
