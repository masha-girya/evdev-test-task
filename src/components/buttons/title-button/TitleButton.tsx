import styles from './title-button.module.scss';

interface IProps {
  text: string;
  link: string;
}

export const TitleButton = (props: IProps) => {
  const { text, link } = props;

  return (
    <button className={styles.titleButton}>
      <a href={link} className={styles.titleButton__text}>
        {text}
      </a>
    </button>
  )
}