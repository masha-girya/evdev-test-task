import classNames from 'classnames';
import styles from './lang-list.module.scss';
import { LANG_CONSTANTS, TLang } from '@/constants';

interface IProps {
  isOpenMenu?: boolean;
  activeLang: TLang;
  setActiveLang: React.Dispatch<React.SetStateAction<TLang>>;
}

export const LangList = (props: IProps) => {
  const { isOpenMenu, activeLang, setActiveLang } = props;

  return (
    <ul
      className={classNames(styles.dropdownMenu, {
        [styles.dropdownMenu_open]: isOpenMenu,
      })}
    >
      {Object.values(LANG_CONSTANTS).map((lang) => (
        <li
          key={lang}
          onClick={() => setActiveLang(lang)}
          className={classNames(styles.dropdownMenu__langItem, {
            [styles.dropdownMenu__langItem_active]: activeLang === lang,
          })}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
};
