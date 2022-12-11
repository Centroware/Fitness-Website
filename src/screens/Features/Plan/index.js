import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Plan.module.sass";
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";
import { API_URL, PLAN_AUTH_TOKEN, PROXY_SERVER_URL } from "../../../config";
import { useTranslation } from "react-i18next";

const options = [
  {
    title: "Main features",
    items: [
      {
        title_en: "Tailored programs designed by elite coaches",
        title_ar: "برامج رياضية معدة من قبل مدربين محترفين",
        description: "Some Text",
      },
      {
        title_en: "Our expert system can create a totally individualize program",
        title_ar: "تمارين مخصصة حسب أهدافك.",
        description: "Some Text",
      },
      {
        title_en: "Exercise selections based on your specific need with thousands of variations",
        title_ar: "تمارين متنوعة وخيارات حسب الأدوات المتوفرة عندك.",
        description: "Some Text",
      },
      {
        title_en: "A customized diet based on your caloric intake and your preferences",
        title_ar: "نظام غذائي مخصص لك، حسب احتياجك وتفضيلك.",
        description: "Some Text",
      },
      {
        title_en: "Chat to trainers",
        title_ar: "التحدث إلى المدربين",
        description: "Some Text",
      }
    ],
  },
];


const Plan = () => {
  const { i18n, t } = useTranslation("features");
  const [plan, setPlan] = useState(0);
  const [more, setMore] = useState([false, false, false]);
  const [plans, setPlans] = useState({});

  useEffect(() => {
    async function getPlans() {
      try {
        const req = await fetch(`${PROXY_SERVER_URL}/${API_URL}/v1/miran-plan/plan-price`, {
          headers: {
            "Content-Type": "application/json",
            // "Authorization": ``,
            "App-version": "2.2.9"
          }
        });
        const res = await req.json();

        const plans = {};
        if (res.status) {
          res.result.forEach(p => {
            if (!p.prime_trainer_included && p.period === "1")
              plans["1monthPrime"] = {
                price: p.price
              };
            else if (!p.prime_trainer_included && p.period === "3")
              plans["3monthPrime"] = {
                price: p.price
              };
            else if (p.prime_trainer_included && p.period === "1")
              plans["1monthPrime+"] = {
                price: p.price
              };
            else if (p.prime_trainer_included && p.period === "3")
              plans["3monthPrime+"] = {
                price: p.price
              };
          });
          setPlans(plans);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPlans();
  }, []);

  const data = [
    // {
    //   title: t("plan.free.title"),
    //   color: "#23262F",
    //   description: t("plan.free.desc"),
    //   price: "0",
    //   note: plan === 0 ? t("plan.per_month") : t("plan.per_3month"),
    //   button: t("plan.btns.get_started"),
    //   options: [
    //     "true",
    //     "true",
    //     "true",
    //     "false",
    //     "true",
    //     "true",
    //     "false",
    //     "false",
    //     "false",
    //     "false",
    //   ],
    // },
    {
      title: t("plan.prime.title"),
      color: "#23262F",
      description: t("plan.prime.desc"),
      price: plan === 0 ? plans["1monthPrime"]?.price : plans["3monthPrime"]?.price,
      note: plan === 0 ? t("plan.per_month") : t("plan.per_3month"),
      button: t("plan.btns.get_started"),
      options: [
        "true",
        "true",
        "true",
        "true",
        "false"
      ],
    },
    {
      title: t("plan.prime+.title"),
      color: "#23262F",
      tag: t("plan.prime.popular"),
      description: t("plan.prime+.desc"),
      price: plan === 0 ? plans["1monthPrime+"]?.price : plans["3monthPrime+"]?.price,
      note: plan === 0 ? t("plan.per_month") : t("plan.per_3month"),
      button: t("plan.btns.get_started"),
      options: [
        "true",
        "true",
        "true",
        "true",
        "true"
      ],
    },
  ];

  const handleClick = (index) => {
    let newMore = [...more];
    newMore[index] = !more[index];

    setMore(newMore);
  };

  const renderContent = (content) => {
    if (content === "true") {
      return <Icon className={styles.check} name="check" size="16" />;
    }
    if (content === "false") {
      return <div className={styles.minus} size="16">×</div>;
    }
    return <div className={styles.minus}>{content}</div>;
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          {t("plan.title")}
        </div>
        <h1 className={cn(styles.title)}>
          {t("plan.desc")}
        </h1>

        <div className={styles.btns}>
          <div className={styles.selector}>
            <button
              onClick={() => setPlan(0)}
              className={cn({ [styles.planButtonActive]: plan == 0 }, styles.planButton)}
            >
              {t("plan.btns.1month")}
            </button>
            <button
              onClick={() => setPlan(1)}
              className={cn({ [styles.planButtonActive]: plan == 1 }, styles.planButton)}
            >
              {t("plan.btns.3month")}
            </button>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.row}>
            {data.map((type, index) => (
              <div className={styles.col} key={index}>
                <div className={styles.head}>
                  <div className={styles.package}>
                    <h3> {type.title} {type.tag ? <span className={styles.tag}>{type.tag}</span> : null}</h3>
                  </div>
                  <div className={styles.description}>{type.description}</div>
                  <div className={styles.divider}></div>
                  {type.price && (
                    <>
                      <div className={i18n.resolvedLanguage !== "ar" ? styles.cost : styles.costRtl}>
                        <span className={i18n.resolvedLanguage !== "ar" ? styles.sign : styles.signRtl}>SR</span>{" "}
                        <span className={styles.price}>{type.price}<span className={styles.usd}> SAR</span></span>
                      </div>
                      <div className={styles.note}>{type.note}</div>
                    </>
                  )}
                </div>
                <div className={styles.body}>
                  <div
                    className={cn(styles.more, {
                      [styles.active]: more[index],
                    })}
                    onClick={() => handleClick(index)}
                  >
                    {t("plan.see_features")}
                    <Icon className={i18n.resolvedLanguage !== "ar" ? "" : styles.arrowRtl} name="arrow-bottom" size="9" />
                  </div>

                  <div
                    className={cn(styles.list, {
                      [styles.visible]: more[index],
                    })}
                  >
                    {options.map((option, optionIndex) => (
                      <div className={styles.item} key={optionIndex}>
                        {option.items.map((item, itemIndex) => (
                          <div className={styles.parameter} key={itemIndex}>
                            <div className={styles.option}>{i18n.resolvedLanguage !== "ar" ? item.title_en : item.title_ar}</div>
                            {renderContent(type.options[itemIndex])}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <a target="_blank" rel="noreferrer" href="https://miranapp.app.link/Eoqt0wlsJub">
                    <button
                      className={cn("button", styles.button)}
                    >
                      {type.button}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
