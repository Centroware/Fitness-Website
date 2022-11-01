import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Plan.module.sass";
import Icon from "../../../components/Icon";
import { Link } from "react-router-dom";
import { API_URL, PROXY_SERVER_URL } from "../../../config";
import { useTranslation } from "react-i18next";

const options = [
  {
    title: "Main features",
    items: [
      {
        title: "Time-Trackers",
        description: "Some Text",
      },
      {
        title: "Exclusive Music",
        description: "Some Text",
      },
      {
        title: "E-books",
        description: "Some Text",
      },
      {
        title: "Documents",
        description: "Some Text",
      },
      {
        title: "Premium Tutorial",
        description: "Some Text",
      },
      {
        title: "Client Support",
        description: "Some Text",
      },
      {
        title: "Premium Courses",
        description: "Some Text",
      },
      {
        title: "User support",
        description: "Some Text",
      },
      {
        title: "Chat to trainers",
        description: "Some Text",
      },
      {
        title: "Unlimited Videos",
        description: "Some Text",
      },
    ],
  },
];


const Plan = () => {
  const { t } = useTranslation("features");
  const [plan, setPlan] = useState(0);
  const [more, setMore] = useState([false, false, false]);
  const [plans, setPlans] = useState({});

  useEffect(() => {
    async function getPlans() {
      try {
        const req = await fetch(`https://${API_URL}/miran-plan/plan-price`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Token 072c30a0dd1d04ee6379a3d00ea45a59ec0e0ee3",
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
    {
      title: "Free",
      color: "#23262F",
      description: "14 days of free trial",
      price: "0",
      note: plan === 0 ? t("plan.per_month") : t("plan.per_3month"),
      button: t("plan.btns.get_started"),
      options: [
        "true",
        "true",
        "true",
        "false",
        "true",
        "true",
        "false",
        "false",
        "false",
        "false",
      ],
    },
    {
      title: "Prime",
      tag: "POPULAR",
      color: "#23262F",
      description: "Fit with everyone",
      price: plan === 0 ? plans["1monthPrime"]?.price : plans["3monthPrime"]?.price,
      note: plan === 0 ? t("plan.per_month") : t("plan.per_3month"),
      button: t("plan.btns.get_started"),
      options: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "false",
        "false",
      ],
    },
    {
      title: "Prime+",
      color: "#23262F",
      description: "Are you pro? Let’s do it",
      price: plan === 0 ? plans["1monthPrime+"]?.price : plans["3monthPrime+"]?.price,
      note: plan === 0 ? t("plan.per_month") : t("plan.per_3month"),
      button: t("plan.btns.get_started"),
      options: [
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
        "true",
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
      return <Icon className={styles.check} name="check" size="14" />;
    }
    if (content === "false") {
      return <div className={styles.minus}>×</div>;
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
                  <div className={styles.package} style={{ color: type.color }}>
                    <h3> {type.title} {type.tag ? <span className={styles.tag}>{type.tag}</span> : null}</h3>
                  </div>
                  <div className={styles.description}>{type.description}</div>
                  <div className={styles.divider}></div>
                  {type.price && (
                    <>
                      <div className={styles.cost}>
                        <span className={styles.sign}>SR</span>{" "}
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
                    See all features
                    <Icon name="arrow-bottom" size="9" />
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
                            {renderContent(type.options[itemIndex])}
                            <div className={styles.label}>{item.title}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <Link to="/download">
                    <button
                      className={cn("button", styles.button)}
                    >
                      {type.button}
                    </button>
                  </Link>
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
