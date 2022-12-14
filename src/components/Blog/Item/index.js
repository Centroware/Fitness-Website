import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Item.module.sass";
import { useTranslation } from "react-i18next";
import { getFormattedDate } from "../../../helpers";
import { DEFAULT_IMAGE } from "../../../config";


const Item = ({ item, className }) => {
  const { i18n } = useTranslation();

  return (
    <Link className={cn(styles.item, className)} to={{
      pathname: `/article/${item.id}`,
    }}>
      <div className={styles.preview}>
        <img src={item.image || DEFAULT_IMAGE} alt={item.status} />
      </div>
      <div>
        {item.tags.map(tag => {
          return <div key={tag.id} className={cn("status", styles.category)} style={{ background: `#${tag.hex_color}` }}>
            {tag.title}
          </div>;
        })}
      </div>
      <div className={styles.title}>{i18n.resolvedLanguage !== "ar" ? item.title_en : item.title_ar}</div>
      <div className={styles.foot}>
        <div className={i18n.resolvedLanguage !== "ar" ? styles.user : styles.userRtl}>
          <div className={styles.avatar}>
            <img src={"/images/content/avatar-5.png"} alt="Avatar" />
          </div>
          <div className={styles.author}>{item.created_by.full_name || "Unknown"}</div>
        </div>
        <div className={styles.date}>{item.date || getFormattedDate()}</div>
      </div>
    </Link>
  );
};

export default Item;
