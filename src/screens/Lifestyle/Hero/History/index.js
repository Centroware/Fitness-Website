import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./History.module.sass";
import { getFormattedDate } from "../../../../helpers";
import { useTranslation } from "react-i18next";
import Spinner from "../../../../components/Spinner";
import useBlogs from "../../../../components/Blog/useBlogs";

const items = [
  {
    url: "/article",
    title: "Stories From Our Community: Kohaku & Moyo Shiro",
    content:
      "Track your workouts, get better results, and be the best version of you. Less thinking",
    image: "url('/images/content/history-pic-2.png')",
    status: "pink",
    statusContent: "new",
  },
  {
    url: "/article",
    title: "Stories From Our Community: Kohaku & Moyo Shiro",
    content:
      "Track your workouts, get better results, and be the best version of you. Less thinking",
    image: "url('/images/content/history-pic-2.png')",
    status: "green",
    statusContent: "yoga",
  },
  {
    url: "/article",
    title: "Stories From Our Community: Kohaku & Moyo Shiro",
    content:
      "Track your workouts, get better results, and be the best version of you. Less thinking",
    image: "url('/images/content/history-pic-2.png')",
    status: "pink",
    statusContent: "new",
  },
  {
    url: "/article",
    title: "Stories From Our Community: Kohaku & Moyo Shiro",
    content:
      "Track your workouts, get better results, and be the best version of you. Less thinking",
    image: "url('/images/content/history-pic-2.png')",
    status: "green",
    statusContent: "yoga",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const History = () => {
  const { i18n, t } = useTranslation("lifestyle");

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
  };

  const { loading, blogs } = useBlogs();

  if (loading) return <Spinner />;
  if (!blogs.length) return null;

  return (
    <div className={styles.history}>
      <div className={styles.wrap}>
        <Slider className="history-slider" {...settings}>
          {blogs.map((x, index) => (
            <div className={styles.slide} key={index}>
              <div className={cn("history-item", styles.item)}>
                <div
                  className={styles.preview}
                  style={{ backgroundImage: x.image ? `url(${x.image})` : "url('/images/content/history-pic-2.png')" }}
                ></div>
                <div className={styles.details}>
                  <div>
                    <div
                      className="flex flex-wrap gap-3"
                    >
                      {x.tags.map(t => {
                        let tag_bg_color = `bg-[#${t.hex_color}]`;
                        return <p key={t.id} className={"py-1 px-3 rounded-lg " + tag_bg_color}>
                          {i18n.resolvedLanguage !== "ar" ? t.title_en : t.title_ar}
                        </p>;
                      })}
                    </div>
                    <div className={styles.user}>
                      <img src={x.user_image} alt={x.user_name} />
                    </div>
                  </div>
                  <div className={styles.title}> {i18n.resolvedLanguage !== "ar" ? x.title_en : x.title_ar}</div>
                  <div className={styles.content}>{i18n.resolvedLanguage !== "ar" ? x.content_en : x.content_ar}</div>
                  <div className={styles.content + " text-[14px]"} >{getFormattedDate(x.updated_at)}</div>
                  <Link
                    to={`/article/${x.id}`}
                    className={cn("button-small", styles.button)}
                  >
                    {t("read_story")}
                  </Link>
                </div>
                <div className={styles.position}>{x.position}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default History;
