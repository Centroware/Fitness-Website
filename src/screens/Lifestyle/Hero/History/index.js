import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./History.module.sass";
import { getStories } from "../../../../helpers";
import { useTranslation } from "react-i18next";
import Spinner from "../../../../components/Spinner";

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

  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);

  async function getData() {
    try {
      setLoading(true);
      const stories = await getStories();

      setStories(stories);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Spinner />;
  if (!stories.length) return null;

  return (
    <div className={styles.history}>
      <div className={styles.wrap}>
        <Slider className="history-slider" {...settings}>
          {stories.map((x, index) => (
            <div className={styles.slide} key={index}>
              <div className={cn("history-item", styles.item)}>
                <div
                  className={styles.preview}
                  style={{ backgroundImage: x.user_image ? `url(${x.user_image})` : "url('/images/content/history-pic-2.png')" }}
                ></div>
                <div className={styles.details}>
                  <div
                    className={cn(
                      "status-green",
                      styles.status
                    )}
                  >
                    {x.statusContent || "new"}
                  </div>
                  <div className={styles.title}>{x.title || "Stories From Our Community: Kohaku & Moyo Shiro"}</div>
                  <div className={styles.content}>{i18n.resolvedLanguage !== "ar" ? x.content_en : x.content_ar}</div>
                  <Link
                    to={x.url || "#"}
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
