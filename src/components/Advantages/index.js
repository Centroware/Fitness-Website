import React from "react";
import cn from "classnames";
import styles from "./Advantages.module.sass";
import ScrollParallax from "../ScrollParallax";
import { useTranslation } from "react-i18next";

const items = [
  {
    title_en: "Free Plan For Everyone",
    title_ar: "خطة مجانية للجميع",
    image: "/images/content/hand-grip-circle.png",
    image2x: "/images/content/hand-grip-circle@2x.png",
  },
  {
    title_en: "Free gym exercise library",
    title_ar: "مكتبة تمارين رياضية مجانية",
    image: "/images/content/gloves-circle.png",
    image2x: "/images/content/gloves-circle@2x.png",
  },
  {
    title_en: "Free healthy food library",
    title_ar: "مكتبة طعام صحي مجانية",
    image: "/images/content/bottle-circle.png",
    image2x: "/images/content/bottle-circle@2x.png",
  },
];

const Advantages = ({ scrollToRef, className }) => {
  const { t, i18n } = useTranslation("features");

  return (
    <div ref={scrollToRef} className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("h2", styles.title)}>
            {t("advantages.title")}
          </div>
          <div className={styles.info}>
            {t("advantages.desc")}
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.preview}>
                <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Equipment" />
              </div>
              <div className={styles.subtitle}>
                {i18n.resolvedLanguage !== "ar" ? x.title_en : x.title_ar}
              </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
