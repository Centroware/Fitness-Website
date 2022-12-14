import React, { useState } from 'react';
import cn from "classnames";
import styles from "./Blog.module.sass";
import ScrollParallax from "../ScrollParallax";
import Item from "./Item";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Spinner from "../Spinner";
import useBlogs from "./useBlogs";

const Blog = ({ mainPage }) => {
    const { t } = useTranslation("features");
    const { loadMoreBlogs, ApiItems, loading, blogs, blogsCount } = useBlogs();

    const [activeIndex, setActiveIndex] = useState(0);

    if (loading) return <Spinner />;
    if (!blogs.length) return null;

    return (
        <div className={cn("", {
            // [styles.hero]: mainPage === true
        })}>
            <div>
                <div className={styles.nav}>
                    {ApiItems.map((x, index) => (
                        <button
                            className={cn(styles.btn, {
                                [styles.active]: index === activeIndex,
                            })}
                            onClick={() => setActiveIndex(index)}
                            key={index}
                        >
                            {x.title}
                        </button>
                    ))}
                </div>
                {ApiItems[activeIndex]?.items.length > 0 ?
                    <div className="p-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">
                        {ApiItems[activeIndex].items.slice(0, mainPage === true ? -1 : 3).map((x, index) => (
                            <div key={index}>
                                <Item item={x} />
                            </div>
                        ))}
                    </div>
                    :
                    <div className="text-3xl text-center my-3">{t("blog.no_blogs")}</div>}

                <div className={styles.btns}>
                    <Link to="/article">
                        {!blogsCount.reachedEnd && <button disabled={loading} className={cn("button-stroke button-small", styles.button)} onClick={mainPage && loadMoreBlogs}>
                            {t("blog.load_more")}
                        </button>}
                    </Link>
                </div>
                {loading && <Spinner />}
            </div>
        </div>
    );
};

export default Blog;