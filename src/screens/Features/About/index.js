import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";
import { getContent } from "../../../helpers.js";
import { useTranslation } from "react-i18next";


const About = () => {
  const { i18n, t } = useTranslation("features");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getAboutContent() {
      try {
        const content = await getContent("about-miran");
        setContent(content);
      } catch (error) {
        console.log(error);
      }
    }
    getAboutContent();
  }, []);

  const items = [
    {
      title_en: "About Miran",
      title_ar: "عن مران",
      content,
      color: "#9757D7",
    }
  ];
  return (
    <div className={cn("section", styles.book)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn("stage", styles.stage)}>{t("about.miran")}</div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>
              {t("about.title.p1")}
              <br></br>
              {t("about.title.p2")}
            </h2>
            <div className={styles.info}>
              {t("about.desc")}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.list}>
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div
                    className={styles.number}
                    style={{ backgroundColor: x.color }}
                  >
                    00
                  </div>
                  <div className={styles.subtitle}>
                    {i18n.resolvedLanguage !== "ar" ? x.title_en : x.title_ar}
                  </div>
                  <div className={styles.content}>{x.content}</div>
                </ScrollParallax>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.bg}>
              <img
                srcSet="/images/content/about-pic-1@2x.png 2x"
                src="/images/content/about-pic-1.png"
                alt="About pic"
              />
              <div>
                <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                  <Image
                    srcSet="/images/content/racket@2x.png 2x"
                    srcSetDark="/images/content/racket-dark@2x.png 2x"
                    src="/images/content/racket.png"
                    srcDark="/images/content/racket-dark.png"
                    alt="Rocket"
                  />
                </ScrollParallax>
                <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                  <img
                    srcSet="/images/content/ball-red@2x.png 2x"
                    src="/images/content/ball-red.png"
                    alt="Ball"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
