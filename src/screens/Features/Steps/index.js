import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";
import { useTranslation } from "react-i18next";

const items = [
  {
    title_en: "Download",
    title_ar: "حمل التطبيق",
    color: "#3772FF",
    images: "/images/content/download.svg",
    content_en: "Fitness Pro tracks your workouts, get better results, and be the best version of you.",
    content_ar: "مع ميران تتبع تدريباتك واحصل على نتائج أفضل وكوَّن أفضل نسخة من نفسك.",
  },
  {
    title_en: "Choose your trainner",
    title_ar: "اختر مدربك الخاص",
    color: "#9757D7",
    images: "/images/content/whistle.svg",
    content_en: "Fitness Pro tracks your workouts, get better results, and be the best version of you.",
    content_ar: "مع ميران تتبع تدريباتك واحصل على نتائج أفضل وكوَّن أفضل نسخة من نفسك.",

  },
  {
    title_en: "Set the goals",
    title_ar: "ضع أهدافك",
    color: "#EF466F",
    images: "/images/content/medal.svg",
    content_en: "Fitness Pro tracks your workouts, get better results, and be the best version of you.",
    content_ar: "مع ميران تتبع تدريباتك واحصل على نتائج أفضل وكوَّن أفضل نسخة من نفسك.",

  },
  {
    title_en: "Workout time",
    title_ar: "وقت التمرين",
    color: "#45B26B",
    images: "/images/content/stopwatch.svg",
    content_en: "Fitness Pro tracks your workouts, get better results, and be the best version of you.",
    content_ar: "مع ميران تتبع تدريباتك واحصل على نتائج أفضل وكوَّن أفضل نسخة من نفسك.",
  },
];

const Steps = ({ scrollToRef }) => {
  const { i18n, t } = useTranslation("features");

  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>{t("intro.title")}</h2>
          <div className={styles.info}>{t("intro.desc")}</div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={i18n.resolvedLanguage === "en" ? styles.item : styles.itemRtl} key={index}>
              <div
                className={i18n.resolvedLanguage === "en" ? styles.preview : styles.previewRtl}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.images} alt={`Step ${index}`} />
              </div>
              <div className={styles.number}>{t("intro.step")} {index + 1}</div>
              <div className={styles.subtitle}>
                {i18n.resolvedLanguage === "en" ? x.title_en : x.title_ar}
              </div>
              <div className={styles.content}>
                {i18n.resolvedLanguage === "en" ? x.content_en : x.content_ar}
              </div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
