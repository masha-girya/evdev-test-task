'use server';

import styles from './services.module.scss';
import ServicesImgBig from '@/styles/images/services1.png';
import ServicesImgSmall from '@/styles/images/services2.png';
import Image from 'next/image';
import { MagnetButton } from '../buttons';

export const Services = () => {
  const handleClick = () => {
    'use server';

    console.log('click');
  };

  return (
    <section className={styles.services}>
      <div className={styles.services__images}>
        <div className={styles.services__images__bigImg}>
          <Image src={ServicesImgBig.src} alt="Villa Terrace" fill />
        </div>
        <div className={styles.services__images__smallImgAbsoluteBox}>
          <div className={styles.services__images__smallImg}>
            <Image src={ServicesImgSmall.src} alt="Villa Bathroom" fill />
          </div>
        </div>
      </div>

      <article className={styles.services__text}>
        <h3 className={styles.services__text__title}>
          <span>What</span> We Offer
        </h3>
        <p className={styles.services__text__desc}>
          Our architecture encourages co-existence. So does our business
          philosophy. We have abolished barriers of hierarchy and
          departmentalization to work as a single team. We believe in full
          transparency — and of course, that entails our clients.
        </p>
      </article>

      <div className={styles.services__learnMoreBtn}>
        <MagnetButton handleClick={handleClick} text="Learn More" />
      </div>
    </section>
  );
};
