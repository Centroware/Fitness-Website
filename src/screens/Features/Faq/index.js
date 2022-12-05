import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";
import Dropdown from "../../../components/Dropdown";
import { useTranslation } from "react-i18next";

const items = [
  {
    title_en: "General",
    title_ar: "عام",
    items: [
      {
        title_en: "What does Miran offer?",
        title_ar: "ماذا توفر مران؟",
        content_en: "Miran provides the biggest off-line library of videos for your workout",
        content_ar: "مران توفر أكبر مكتبة فيديوهات توضيحية لتمارينك بدون الحاجة الى الانترنت، انضم إلى أكثر من مليون رياضي مع أفضل المدربين وخبراء التغذية بأسهل طريقة في يدك بتقنية الذكاء الاصطناعي"
      },
      {
        title_en: "How do I register for an in-person class?",
        title_ar: "كيف اسجل في الفصل التدريبي؟",
      },
      {
        title_en: "What is the status of my Fitness Pro membership?",
        title_ar: "ما هي حالة عضويتي في مران برايم؟",
      },
      {
        title_en: "How old does my child need to be to participate in class?",
        title_ar: "كم يجب أن يكون عمر طفلي للمشاركة في الفصل؟",
      },
      {
        title_en: "Do I have to be a member to take class?",
        title_ar: "هل يجب أن أكون عضوًا لأخذ الفصل؟",
      },
      {
        title_en: "Can I join a class once it’s in session?",
        title_ar: "هل يمكنني الانضمام إلى الفصل بمجرد بدء الجلسة؟",
      },
      {
        title_en: "Do I need to buy a yoga mat, towel, or equipment? ",
        title_ar: "هل أحتاج إلى شراء سجادة يوجا أو منشفة أو معدات؟ ",
      },
    ],
  },
  {
    title_en: "Trainers",
    title_ar: "المدربين",
    items: [
      {
        title_en: "How do I register for an in-person class?",
        title_ar: "كيف اسجل في الفصل التدريبي؟",
      },
      {
        title_en: "What is the status of my Fitness Pro membership?",
        title_ar: "ما هي حالة عضويتي في مران برايم؟",
      },
      {
        title_en: "How old does my child need to be to participate in class?",
        title_ar: "كم يجب أن يكون عمر طفلي للمشاركة في الفصل؟",
      },
      {
        title_en: "Do I have to be a member to take class?",
        title_ar: "هل يجب أن أكون عضوًا لأخذ الفصل؟",
      },
      {
        title_en: "Can I join a class once it’s in session?",
        title_ar: "هل يمكنني الانضمام إلى الفصل بمجرد بدء الجلسة؟",
      },
      {
        title_en: "Do I need to buy a yoga mat, towel, or equipment? ",
        title_ar: "هل أحتاج إلى شراء سجادة يوجا أو منشفة أو معدات؟ ",
      },
    ],
  },
  {
    title_en: "Subscription",
    title_ar: "الاشتراك",
    items: [
      {
        title_en: "How do I register for an in-person class?",
        title_ar: "كيف اسجل في الفصل التدريبي؟",
      },
      {
        title_en: "What is the status of my Fitness Pro membership?",
        title_ar: "ما هي حالة عضويتي في مران برايم؟",
      },
      {
        title_en: "How old does my child need to be to participate in class?",
        title_ar: "كم يجب أن يكون عمر طفلي للمشاركة في الفصل؟",
      },
      {
        title_en: "Do I have to be a member to take class?",
        title_ar: "هل يجب أن أكون عضوًا لأخذ الفصل؟",
      },
      {
        title_en: "Can I join a class once it’s in session?",
        title_ar: "هل يمكنني الانضمام إلى الفصل بمجرد بدء الجلسة؟",
      },
      {
        title_en: "Do I need to buy a yoga mat, towel, or equipment? ",
        title_ar: "هل أحتاج إلى شراء سجادة يوجا أو منشفة أو معدات؟ ",
      },
    ],
  },
  {
    title_en: "Class",
    title_ar: "الصف التدريبي",
    items: [
      {
        title_en: "How do I register for an in-person class?",
        title_ar: "كيف اسجل في الفصل التدريبي؟",
      },
      {
        title_en: "What is the status of my Fitness Pro membership?",
        title_ar: "ما هي حالة عضويتي في مران برايم؟",
      },
      {
        title_en: "How old does my child need to be to participate in class?",
        title_ar: "كم يجب أن يكون عمر طفلي للمشاركة في الفصل؟",
      },
      {
        title_en: "Do I have to be a member to take class?",
        title_ar: "هل يجب أن أكون عضوًا لأخذ الفصل؟",
      },
      {
        title_en: "Can I join a class once it’s in session?",
        title_ar: "هل يمكنني الانضمام إلى الفصل بمجرد بدء الجلسة؟",
      },
      {
        title_en: "Do I need to buy a yoga mat, towel, or equipment? ",
        title_ar: "هل أحتاج إلى شراء سجادة يوجا أو منشفة أو معدات؟ ",
      },
    ],
  },
];

const Team = () => {
  const options = [];
  items.map((x) => options.push(x.title_en));

  const { i18n, t } = useTranslation("features");
  const [category, setCategory] = useState(options[0]);

  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("stage-small", styles.stage)}>
            {t("faq.get_started")}
          </div>
          <h2 className={cn("h2", styles.title)}>
            {t("faq.title")}
          </h2>
          <div className={styles.info}>
            {t("faq.desc.text")} <a href="/#">{t("faq.desc.link")}</a>
          </div>
          <div className={styles.nav}>
            {items.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title_en === category,
                })}
                onClick={() => setCategory(x.title_en)}
                key={index}
              >
                {i18n.resolvedLanguage !== "ar" ? x.title_en : x.title_ar}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={category}
            setValue={setCategory}
            options={options}
          />
        </div>
        <div className={styles.list}>
          {items
            .find((x) => x.title_en === category)
            .items.map((x, index) => (
              <Item item={x} key={index} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
