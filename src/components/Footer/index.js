import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";
import { useTranslation } from "react-i18next";

const menu = [
  {
    title_en: "Lifestyle",
    title_ar: "نمط حياة",
    url: "/lifestyle",
  },
  {
    title_en: "Privacy",
    title_ar: "الخصوصية",
    url: "/privacy",
  },
  // {
  //   title: "Pricing",
  //   url: "/pricing",
  // },
  // {
  //   title: "Class",
  //   url: "/class01",
  // },
  // {
  //   title: "Features",
  //   url: "/features",
  // },
  {
    title_en: "Download",
    title_ar: "تنزيل التطبيق",
    href: "https://miranapp.app.link/Eoqt0wlsJub",
  },
];

const socials = [
  // {
  //   title: "facebook",
  //   size: "16",
  //   url: "https://www.facebook.com/ui8.net/",
  // },
  {
    title: "twitter",
    size: "18",
    url: "https://twitter.com/miranapp",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/miranapp/",
  },
  // {
  //   title: "dribbble",
  //   size: "16",
  //   url: "https://dribbble.com/ui8",
  // },
  // {
  //   title: "behance",
  //   size: "20",
  //   url: "https://www.behance.net/ui8",
  // },
];

const Footer = () => {
  const { i18n, t } = useTranslation("footer");

  const [visible, setVisible] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <div className={i18n.resolvedLanguage !== "ar" ? styles.box : styles.boxRtl}>
              <Link className={i18n.resolvedLanguage !== "ar" ? styles.logo : styles.logoRtl} to="/">
                <Image
                  className={styles.pic}
                  src="/images/Icon-light.jpg"
                  srcDark="/images/Icon-dark.png"
                  alt="Miran"
                />
                <h2 className={styles.miran}>{t("miran")}</h2>
              </Link>
              <Theme className={styles.theme} />
            </div>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div
                className={i18n.resolvedLanguage !== "ar" ? styles.category : styles.categoryRtl}
                onClick={() => setVisible(!visible)}
              >
                {t("footer_nav")}
                <Icon name="arrow-bottom" size="9" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  x.href ?
                    <a key={index} className={styles.link} target="_blank" rel="noreferrer" href={x.href}>

                      {t("download")}
                    </a> :
                    <NavLink
                      className={styles.link}
                      activeClassName={styles.active}
                      to={x.url}
                      key={index}
                    >
                      {i18n.resolvedLanguage !== "ar" ? x.title_en : x.title_ar}
                    </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}><p>{t("sections.contact.title")}</p></div>
            <div className={styles.info}>
              <p>{t("sections.contact.address.p1")}</p>
              <p>{t("sections.contact.address.p2")}</p>
              <p>{t("sections.contact.address.p3")}</p>
              <p>{t("sections.contact.address.p4")}</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>{t("sections.newsletter.title")}</div>
            <div className={styles.info}>
              {t("sections.newsletter.desc")}
            </div>
            <Subscription
              className={styles.subscription}
              placeholder={t("sections.newsletter.email_placeholder")}
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
            {t("copyright")}
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Icon name={x.title} size={x.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
