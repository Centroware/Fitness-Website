import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cn from "classnames";
import styles from "./SingleArticle.module.sass";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { API_URL, PROXY_SERVER_URL } from "../../../config";
import Spinner from "../../../components/Spinner";

const SingleArticle = () => {
    const { slug } = useParams();

    const { i18n, t } = useTranslation("article");
    const currentURL = window.location.href;

    const [article, setArticle] = useState();
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

    return (
        <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto pt-12 min-h-[400px]">
            {loading ? (
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <Spinner />
                </div>
            ) : article ? (
                <div className="flex flex-col">
                    {/* <h2 className="font-bold text-4xl capitalize">{article.label}</h2> */}

                    <div className="flex felx-row gap-2 mt-2">
                        {article.tags?.map((elem) => {
                            return (
                                <div key={elem.id} className={`bg-[#${elem.hex_color}]`}>{elem.title_en}</div>
                                // <Tag
                                //     key={elem.id}
                                //     title={elem.title_en}
                                //     textColor={`text-[#${hex_color}]`}
                                // />
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

                    <div className="relative mt-6">
                        <img
                            src={article.image}
                            alt={article.title_en}
                            className="w-full min-h-[350px] rounded-lg border"
                        />

                        <div className="mt-4">
                            <h2 className="text-primary">
                                {i18n.resolvedLanguage === "en" ? article.title_en : article.title_ar}
                            </h2>
                            {/* <h2 className="my-1 text-2xl font-semibold"> {article.label} </h2> */}
                            <p
                                className="text-grey mt-4"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        i18n.resolvedLanguage === "en"
                                            ? article.content_en || " - "
                                            : article.content_ar || " - ",
                                }}
                            />
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-2 mt-4">
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
              
            </div> */}

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