import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../components/Icon";
import ScrollParallax from "../../../../components/ScrollParallax";
import { useTranslation } from "react-i18next";

const Item = ({ item, index }) => {
  const { i18n, t } = useTranslation("features");

  const [visible, setVisible] = useState(index === 0 ? true : false);

  return (
    <ScrollParallax className={styles.item}>
      <div
        className={cn(styles.head, { [styles.active]: visible })}
        onClick={() => setVisible(!visible)}
      >
        <div className={styles.title}>
          {i18n.resolvedLanguage !== "ar" ? item.title_en : item.title_ar}
        </div>
        <div className={styles.arrow}>
          <Icon name="arrow-bottom" size="10" />
        </div>
      </div>
      <div className={cn(styles.body, { [styles.visible]: visible })}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img
                srcSet="/images/content/faq-pic@2x.png 2x"
                src="/images/content/faq-pic.png"
                alt="About pic"
              />
              <button className={cn("play-small", styles.play)}>
                <div className={styles.wrapper}>
                  <Icon name="play" size="14" />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.info}>
              {t("faq.q.nothing")}
            </div>
            <div className={styles.content}>
              {!item.content_en ?
                <>
                  <p>
                    {t("faq.q.desc.p1")}
                  </p>
                  <p>
                    {t("faq.q.desc.p2")}
                  </p>
                </>
                :
                <p>
                  {i18n.resolvedLanguage !== "ar" ? item.content_en : item.content_ar}
                </p>
              }
            </div>
            <button className={cn("button-stroke button-small", styles.button)}>
              {t("faq.q.learn_more")}
            </button>
          </div>
        </div>
      </div>
    </ScrollParallax>
  );
};

export default Item;
