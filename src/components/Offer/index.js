import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./Offer.module.sass";
import { APP_LINK } from "../../config";

const Offer = ({ className }) => {
  const { t } = useTranslation("features");
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          {t("offer.free_trial")}
        </div>
        <h2 className={cn("h1", styles.title)}>
          {t("offer.title.p1")}
          {t("offer.title.p2")}
        </h2>
        <div className={styles.text}>
          {t("offer.desc")}
        </div>
        <a className={cn("button", styles.button)} href={APP_LINK} target="_blank" rel="noreferrer">
          {t("offer.start_free_trial")}
        </a>
      </div>
    </div>
  );
};

export default Offer;
