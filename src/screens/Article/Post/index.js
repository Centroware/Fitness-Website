import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Post = () => {
  const { i18n, t } = useTranslation("article");

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", i18n.resolvedLanguage == "en" ? styles.title : styles.titleRtl)}>
            {t("header")}
          </h1>
          <button className={cn("button-circle-stroke", styles.button)}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={i18n.resolvedLanguage === "en" ? styles.col : styles.colRtl}>
            <div className={styles.preview}>
              <img src="/images/content/diet-food.jpg" alt="diet" />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>{t("post.title")}</h2>
            <div className={styles.info}>{t("post.desc")}</div>
            {/* <div className={styles.preview}>
              <img src="/images/content/post-pic.png" alt="Post pic" />
            </div>
            <div className={styles.content}>
              <p>
                The Stacks series of products: Stacks: Landing Page Kit, Stacks:
                Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                production-ready library of stackable content blocks built in
                React Native.
              </p>
              <p>
                Mix-and-match dozens of responsive elements to quickly configure
                your favorite landing page layouts or hit the ground running
                with 10 pre-built templates, all in light or dark mode."
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
