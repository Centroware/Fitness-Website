import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Intro.module.sass";
import ScrollParallax from "../ScrollParallax";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { i18n, t } = useTranslation("features");
  return (
    <div className={cn("section-bg", styles.section)} >
      <div className={cn("container", styles.container)}>
        <div className={i18n.resolvedLanguage !== "ar" ? styles.gallery : styles.galleryRtl}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              // srcSet="/images/content/bag@2x.png 2x"
              src="/images/content/front-female.png"
              alt="Bag"
            />
          </ScrollParallax>
          {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/gloves@2x.png 2x"
              src="/images/content/gloves.png"
              alt="Gloves"
            />
          </ScrollParallax>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <img
              srcSet="/images/content/bottle-1@2x.png 2x"
              src="/images/content/bottle-1.png"
              alt="Bottle"
            />
          </ScrollParallax> */}
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h1", styles.title)}>
            {t("intro.title")}
          </h2>
          <div className={styles.text}>
            {t("intro.desc")}
          </div>
          <a href="https://miranapp.app.link/Eoqt0wlsJub" rel="noreferrer" target="_blank" className={cn("button", styles.button)}>
            {t("intro.start_trial")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
