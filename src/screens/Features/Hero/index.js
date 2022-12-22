import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";
import { useTranslation } from "react-i18next";
import { APP_LINK } from "../../../config";

const Hero = ({ scrollToRef }) => {
  const { i18n, t } = useTranslation("features");

  return (
    <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            {t("hero.stage")}
          </div>
          <h1 className={cn("h1", styles.title)}>
            {t("hero.title")}
          </h1>
          <div className={styles.text}>
            {t("hero.text")}
          </div>
          <div className={styles.btns}>
            <a
              className={cn("button", i18n.resolvedLanguage !== "ar" ? styles.button : styles.buttonRtl)} to="/download"
              href={APP_LINK}
              rel="noreferrer" target="_blank">
              {t("hero.donwload_app")}
            </a>
            <a
              className={cn("button-stroke", styles.button)}
              href={APP_LINK} rel="noreferrer" target="_blank">
              {t("hero.book_class")}
            </a>
          </div>
        </div>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={cn(i18n.resolvedLanguage !== "ar" ? styles.gallery : styles.galleryRtl)}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/main-miran.png"
              srcSetDark="/images/content/main-miran.png"
              src="/images/content/main-miran.png"
              srcDark="/images/content/main-miran.png"
              alt="Main"
            />
          </div>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={300}
          >
            <img
              srcSet="/images/content/dumbbell.png"
              src="/images/content/dumbbell.png"
              alt="Dumble"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/apple@2x.png"
              src="/images/content/apple@2x.png"
              alt="Ball"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Hero;
