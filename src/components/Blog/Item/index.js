import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Item.module.sass";
import { useTranslation } from "react-i18next";


const Item = ({ item, className }) => {
  const { i18n } = useTranslation();

  let default_date = new Date();
  default_date = ((default_date.getMonth() > 8) ? (default_date.getMonth() + 1) : ('0' + (default_date.getMonth() + 1))) + '/' + ((default_date.getDate() > 9) ? default_date.getDate() : ('0' + default_date.getDate())) + '/' + default_date.getFullYear();

  return (
    <Link className={cn(styles.item, className)} to={{
      pathname: `/article/${item.id}`,
    }}>
      <div className={styles.preview}>
        <img src={item.image || "https://media.istockphoto.com/id/1182489122/photo/every-time-you-open-a-book-you-learn-something.jpg?b=1&s=170667a&w=0&k=20&c=y1gZ1_vM8BWevnAjgU-0oEI3_bfjUo7Vrosd_msxMvo="} alt={item.status} />
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
        <div className={styles.date}>{item.date || default_date}</div>
      </div>
    </Link>
  );
};

export default Item;
