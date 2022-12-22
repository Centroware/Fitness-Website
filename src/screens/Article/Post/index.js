import React, { useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { AiOutlineCheck } from "react-icons/ai";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";
import { toast } from "react-hot-toast";

const Post = () => {
  const { i18n, t } = useTranslation("article");

  function shareStory() {
    navigator.clipboard.writeText(window.location.href);
    toast.success(t("copied"));
  }

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("h1", i18n.resolvedLanguage !== "ar" ? styles.title : styles.titleRtl)}>
            {t("header")}
          </h1>
          <button className={cn("button-circle-stroke", styles.button)} onClick={shareStory}>
            <Icon name="download" size="22" />
          </button>
        </div>
        <div className={styles.row}>
          <div className={i18n.resolvedLanguage !== "ar" ? styles.col : styles.colRtl}>
            <div className={styles.preview}>
              <img src="/images/content/diet-food.jpg" alt="diet" />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>{t("post.title")}</h2>
            <div className={styles.info}>{t("post.desc")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
