import { Banner, Header, Services } from '@/components';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <Banner cursorTitle="Explore" />
        <Services />
      </main>
    </div>
  );
}
