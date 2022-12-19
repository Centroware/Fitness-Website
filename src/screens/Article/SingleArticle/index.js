import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { API_URL, PROXY_SERVER_URL } from "../../../config";
import Spinner from "../../../components/Spinner";

import { BsLink45Deg } from "react-icons/bs";
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from "react-share";
import { getFormattedDate } from "../../../helpers";

const SingleArticle = () => {
    const { slug } = useParams();

    const { i18n, t } = useTranslation("article");
    const currentURL = window.location.href;

    const [article, setArticle] = useState({
        "id": 32,
        "title_en": "article 1",
        "title_ar": "مقال رقم 1",
        "content_en": "The man ate an extravagant meal at a fancy restaurant. Ritzy! This classy sentence uses three of some of the most commonly used words: the, a, and an. However, there is more to these words than simply the number of times that we use them. These three words belong to a class of words known as articles. If you want to become a grammar master, it is really important to know how to use articles because of how often they show up in our sentences.",
        "content_ar": "مران هي منصة لياقة بدنية تنشط في أي شي يخص عافيتك وصحتك، من تمارين لتغذية ومكملات لأسلوب حياة. تم تدشينها في 2018 على يد ثلاث شباب سعوديين بالتعاون مع العشرات من المدربين وأخصائيين التغذية، اللي كانوا قبل مران، يقدمون خدماتهم بشكل منفرد وباجتهادات شخصية. قررنا نجمعهم في مكان واحد ونبني لهم التكنولوجيا اللي تساعدهم يقدمون خدماتهم بشكل احترافي وتجربة مستخدم جداً مختلفة. هنا صاروا يقدرون يعطونكم جداول تمارينكم بالفيديو، ويعطونكم بعد جداول كل ما يخص تغذيتكم مع المكملات محسوبة بكامل قيمها الغذائية عشان تعرف بالضبط وش قاعد تسوي. وطبعاً في بينكم شات داخل الآبلكيشن مدعوم بفويس وفيديو نوتس تقدر تتواصل مع مدربك بأي شي تحتاجه طول فترة اشتراكك ويقدر هو يتابع معك يوم بيوم لين توصل للهدف اللي تبغى توصله. علامة مران مملوكة لشركة أقدار المحدودة. شركة ستارت آب. مقرها حي النخيل في الرياض. وإذا تبي توصلنا هذا إيميلنا: hi@miranapp.com أما إذا أنت/أنتي مدرب أو أخصائي تغذية فنتشرف بانضمامك لنا عن طريق الآبلكيشن الخاص بمقدمي الخدمات (Miran for Trainers). تقدر تحمل التطبيق وتقدم طلبك هناك وفريقنا راح يراجعونه ويتواصلون معك.",
        "tags": [
            {
                "id": 1,
                "title_en": "tag 1",
                "title_ar": "تاغ 1",
                "hex_color": "bg-pink-700"
            },
            {
                "id": 2,
                "title_en": "tag 2",
                "title_ar": "تاغ 1",
                "hex_color": "bg-red-700"
            },
            {
                "id": 3,
                "title_en": "tag 3",
                "title_ar": "تاغ 1",
                "hex_color": "bg-blue-700"
            },
            {
                "id": 4,
                "title_en": "tag 4",
                "title_ar": "تاغ 1",
                "hex_color": "bg-gray-700"
            }
        ],
        "category": {
            "id": 1,
            "title_en": "sport",
            "title_ar": "رياضة"
        },
        "created_by": {
            "id": 1,
            "full_name": "ahmed mohammed",
            "profile_image": null
        },
        "created_at": "2022-12-11T14:12:35.868884",
        "updated_at": "2022-12-11T14:12:35.868902",
        "image": "https://i2.wp.com/blog.sary.com/wp-content/uploads/2021/11/Blog_9_Design_copy.jpg?resize=1536%2C975&ssl=1"
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getSingleArticle = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${PROXY_SERVER_URL}/${API_URL}/blogs/blogs/${slug}`);
            const article = await res.json();
            setArticle(article);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleArticle();
    }, []);

    article.updated_at = getFormattedDate(article.updated_at);
    return (
        <div className="w-11/12 md:w-8/12 mx-auto pt-12 min-h-[400px]">
            {loading ? (
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <Spinner />
                </div>
            ) : article ? (
                <div className="flex flex-col my-5">
                    <div className="flex gap-2 mt-2">
                        {article.tags?.map((elem) => {
                            return (
                                <div key={elem.id} className={`cursor-default py-1 px-2 rounded-xl ${elem.hex_color}`}>{elem.title_en}</div>
                            );
                        })
                        }
                    </div>

                    <div className="flex flex-row items-center mt-4 mb-2 gap-2">
                        <img
                            src={article.image}
                            alt={article.title_en}
                            className="w-10 h-10 rounded-full"
                        />

                        <div className="flex flex-col">
                            <h2 className="font-semibold capitalize">
                                {article.created_by.full_name}
                            </h2>
                            <h2 className="text-xs text-grey">{article.updated_at}</h2>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="relative mt-6">
                        <img
                            src={article.image}
                            alt={article.title_en}
                            className="w-full h-full max-h-[570px] rounded-lg border"
                        />

                        <div className="mt-12">
                            <h2 className="text-3xl capitalize">
                                {i18n.resolvedLanguage === "en" ? article.title_en : article.title_ar}
                            </h2>

                            <p
                                className="text-grey mt-6"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.resolvedLanguage === "en"
                                            ? article.content_en || " - "
                                            : article.content_ar || " - ",
                                }}
                            />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center border-b w-full py-2">
                            <h2 className="text-xl font-semibold">{t("share")}</h2>
                            <BsLink45Deg size={25} />
                        </div>

                        <div className="flex flex-row gap-2 mt-1">
                            <FacebookShareButton url={currentURL}>
                                <FacebookIcon round={"100%"} size={30} />
                            </FacebookShareButton>

                            <TwitterShareButton url={currentURL}>
                                <TwitterIcon round={"100%"} size={30} />
                            </TwitterShareButton>

                            <WhatsappShareButton url={currentURL}>
                                <WhatsappIcon round={"100%"} size={30} />
                            </WhatsappShareButton>

                            <TelegramShareButton url={currentURL}>
                                <TelegramIcon round={"100%"} size={30} />
                            </TelegramShareButton>

                            <EmailShareButton url={currentURL}>
                                <EmailIcon round={"100%"} size={30} />
                            </EmailShareButton>

                            <LinkedinShareButton url={currentURL}>
                                <LinkedinIcon round={"100%"} size={30} />
                            </LinkedinShareButton>
                        </div>

                    </div>

                </div>
            ) : (
                <h2 className="absolute flex flex-col justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-lg font-bold text-[red]">
                    {/* <img src="/error.png" alt="error" /> */}
                    {error}
                </h2>
            )}
        </div>
    );
};
export default SingleArticle;