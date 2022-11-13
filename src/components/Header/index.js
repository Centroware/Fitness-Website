import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Icon from "../Icon";
import Image from "../Image";
import { useTranslation } from "react-i18next";

const navLinks = [
  // {
  //   title: "Features",
  //   url: "/features",
  // },
  {
    title_en: "Blog",
    title_ar: "مقالات",
    url: "/article",
  },
  // {
  //   title: "Pricing",
  //   url: "/pricing",
  // },
  {
    title_en: "Download",
    title_ar: "تنزيل التطبيق",
    href: "https://miranapp.app.link/Eoqt0wlsJub",
  },
  // {
  //   title: "Class",
  //   content: {
  //     menu: [
  //       {
  //         title: "Program Videos",
  //         url: "/class01",
  //         image: "/images/menu-video.svg",
  //       },
  //       {
  //         title: "Premium Class",
  //         url: "/class02",
  //         image: "/images/menu-class.svg",
  //       },
  //     ],
  //     links: [
  //       {
  //         title: "Sweet and Tone",
  //         url: "/class01-details",
  //         image: "/images/content/header-pic-1.png",
  //         image2x: "/images/content/header-pic-1@2x.png",
  //         category: "black",
  //         categoryText: "featured class",
  //         avatar: "/images/content/avatar-1.png",
  //         trainer: "Zack Beier",
  //         content:
  //           "Sweet and Tone is a seven-day bodyweight training program designed to boost your strength and endurance over the course of a week.",
  //         level: "green",
  //         levelText: "beginner",
  //       },
  //       {
  //         title: "Sweet and Tone",
  //         url: "/class01-details",
  //         image: "/images/content/header-pic-2.png",
  //         image2x: "/images/content/header-pic-2@2x.png",
  //         category: "green",
  //         categoryText: "yoga",
  //         avatar: "/images/content/avatar-2.png",
  //         trainer: "Zack Beier",
  //       },
  //       {
  //         title: "Sweet and Tone",
  //         url: "/class01-details",
  //         image: "/images/content/header-pic-3.png",
  //         image2x: "/images/content/header-pic-3@2x.png",
  //         category: "purple",
  //         categoryText: "mindfulness",
  //         avatar: "/images/content/avatar-3.png",
  //         trainer: "Zack Beier",
  //       },
  //       {
  //         title: "Sweet and Tone",
  //         url: "/class01-details",
  //         image: "/images/content/header-pic-4.png",
  //         image2x: "/images/content/header-pic-4@2x.png",
  //         category: "red",
  //         categoryText: "fitness",
  //         avatar: "/images/content/avatar-4.png",
  //         trainer: "Zack Beier",
  //       },
  //     ],
  //     trainer: [
  //       {
  //         title: "Boyd Reinger",
  //         avatar: "/images/content/avatar-1.png",
  //         type: "Personal trainer",
  //       },
  //       {
  //         title: "Randal Jacobson",
  //         avatar: "/images/content/avatar-2.png",
  //         type: "Personal trainer",
  //       },
  //       {
  //         title: "Dwight Schamberger",
  //         avatar: "/images/content/avatar-3.png",
  //         type: "Personal trainer",
  //       },
  //       {
  //         title: "Omari Gulgowski",
  //         avatar: "/images/content/avatar-4.png",
  //         type: "Personal trainer",
  //       },
  //     ],
  //   },
  // },
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
];

const contact = [
  {
    title: "Montanachester",
    content: "06787 Block Estates",
  },
  {
    title: "Lake Gene",
    content: "167 Emard River",
  },
  {
    title: "North Hassiefort",
    content: "032 Leonora Spurs",
  },
];

const Headers = () => {
  const { t, i18n } = useTranslation("navbar");

  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={i18n.resolvedLanguage !== "ar" ? styles.logo : styles.logoRtl}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.pic}
            src="/images/Icon-light.jpg"
            srcDark="/images/Icon-dark.png"
            alt="Miran"
          />
          <h2 className={styles.miran}>{t("miran")}</h2>
        </Link>
        <div className={cn(i18n.resolvedLanguage !== "ar" ? styles.wrap : styles.wrapRtl, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            <>
              {navLinks.map((x, index) =>
                x.content ? (
                  <DropdownMenu
                    className={styles.group}
                    item={x}
                    key={index}
                    setValue={setVisibleNav}
                  />
                ) : x.href ?
                  <a key={index} className={styles.link} target="_blank" rel="noreferrer" href={x.href}>

                    {t("download")}
                  </a>
                  : (
                    <NavLink
                      className={styles.link}
                      activeClassName={styles.active}
                      to={x.url}
                      key={index}
                      onClick={() => setVisibleNav(false)}
                    >
                      {i18n.resolvedLanguage !== "ar" ? x.title_en : x.title_ar}
                    </NavLink>
                  )
              )}
            </>
          </nav>
          <div className={styles.details}>
            <div className={styles.contact}>
              {contact.map((x, index) => (
                <div className={styles.element} key={index}>
                  <div className={styles.category}>{x.title}</div>
                  <div className={styles.text}>{x.content}</div>
                </div>
              ))}
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
            <Link
              className={cn("button-stroke button-small", styles.button)}
              to="/"
            >
              {t("free_trial")}
            </Link>
          </div>
        </div>
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/download"
        >
          {t("free_trial")}
        </Link>
        <button
          className={cn(" button-small", styles.lang)}
          onClick={() =>
            i18n.changeLanguage(i18n.resolvedLanguage !== "ar" ? "ar" : "en")
          }
        >
          {t("lang")}
        </button>
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
