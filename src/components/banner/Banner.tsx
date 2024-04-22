'use client';

import { ImageWrapper, TitleButton } from '@/components';
import { TitleBlock } from './title-block';
import { CirclePuls } from './circle-puls';
import withCursor from '../cursor';
import { NAV_CONSTANTS } from '@/constants';
import BannerImg from '@/styles/images/banner-image.png';
import BannerImgMob from '@/styles/images/banner-image-mob.png';
import styles from './banner.module.scss';

interface IProps {
  cursorTitle: string;
}

export const Banner = withCursor(({ cursorTitle }: IProps) => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__linkBox}>
        <TitleButton text="Rent" link={NAV_CONSTANTS.catalog.link} />
        <span>/</span>
        <TitleButton text="Buy" link={NAV_CONSTANTS.buy.link} />
      </div>

      <TitleBlock />

      <div className={styles.banner__imageBox}>
        <div className={styles.banner__imageBox__circleBox}>
          <CirclePuls />
        </div>

        <div className={styles.banner__imageBox__villaImg}>
          <ImageWrapper
            srcDesk={BannerImg.src}
            srcMob={BannerImgMob.src}
            alt="Banner Villa Image"
            priority
          />
        </div>
      </div>
    </section>
  );
});
