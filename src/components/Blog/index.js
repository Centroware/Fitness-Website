import React, { useEffect, useState } from 'react';
import cn from "classnames";
import styles from "./Blog.module.sass";
import ScrollParallax from "../ScrollParallax";
import Item from "./Item";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getBlogs, getBlogsCategories } from "../../helpers";
import Spinner from "../Spinner";

const items = [
    {
        title: "Lifestyle",
        items: [
            {
                url: "/article/diet-food",
                title: "7 Impossibly Hard Yoga Moves to Master",
                avatar: "/images/content/avatar-5.png",
                author: "Porter Daniel",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-1.png",
                image2x: "/images/content/lifestyle-photo-1@2x.png",
                category: "red",
                categoryContent: "fitness",
            },
            {
                url: "/article/diet-food",
                title: "Keep It Chill: How To Do a Water Salutation",
                avatar: "/images/content/avatar-2.png",
                author: "Clemens Reilly",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-2.png",
                image2x: "/images/content/lifestyle-photo-2@2x.png",
                category: "green",
                categoryContent: "yoga",
            },
            {
                url: "/article/diet-food",
                title: "Keep It Chill: How To Do a Water Salutation",
                avatar: "/images/content/avatar-3.png",
                author: "Lorine Parker",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-3.png",
                image2x: "/images/content/lifestyle-photo-3@2x.png",
                category: "pink",
                categoryContent: "new",
            },
            {
                url: "/article/diet-food",
                title: "7 Impossibly Hard Yoga Moves to Master",
                avatar: "/images/content/avatar-1.png",
                author: "Felipa Kub",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-4.png",
                image2x: "/images/content/lifestyle-photo-4@2x.png",
                category: "black",
                categoryContent: "featured",
            },
            {
                url: "/article/diet-food",
                title: "Fun Pose Friday: Half Camel With Raised Toe Pose",
                avatar: "/images/content/avatar-4.png",
                author: "Porter Daniel",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-5.png",
                image2x: "/images/content/lifestyle-photo-5@2x.png",
                category: "red",
                categoryContent: "fitness",
            },
            {
                url: "/article/diet-food",
                title: "7 Impossibly Hard Yoga Moves to Master",
                avatar: "/images/content/avatar-2.png",
                author: "Clemens Reilly",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-6.png",
                image2x: "/images/content/lifestyle-photo-6@2x.png",
                category: "green",
                categoryContent: "fitness",
            },
        ],
    },
    {
        title: "Fitness",
        items: [
            {
                url: "/article/diet-food",
                title: "Keep It Chill: How To Do a Water Salutation",
                avatar: "/images/content/avatar-2.png",
                author: "Clemens Reilly",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-2.png",
                image2x: "/images/content/lifestyle-photo-2@2x.png",
                category: "green",
                categoryContent: "yoga",
            },
            {
                url: "/article/diet-food",
                title: "Keep It Chill: How To Do a Water Salutation",
                avatar: "/images/content/avatar-3.png",
                author: "Lorine Parker",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-3.png",
                image2x: "/images/content/lifestyle-photo-3@2x.png",
                category: "pink",
                categoryContent: "new",
            },
            {
                url: "/article/diet-food",
                title: "7 Impossibly Hard Yoga Moves to Master",
                avatar: "/images/content/avatar-1.png",
                author: "Felipa Kub",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-4.png",
                image2x: "/images/content/lifestyle-photo-4@2x.png",
                category: "black",
                categoryContent: "featured",
            },
            {
                url: "/article/diet-food",
                title: "Fun Pose Friday: Half Camel With Raised Toe Pose",
                avatar: "/images/content/avatar-4.png",
                author: "Porter Daniel",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-5.png",
                image2x: "/images/content/lifestyle-photo-5@2x.png",
                category: "red",
                categoryContent: "fitness",
            },
            {
                url: "/article/diet-food",
                title: "7 Impossibly Hard Yoga Moves to Master",
                avatar: "/images/content/avatar-2.png",
                author: "Clemens Reilly",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-6.png",
                image2x: "/images/content/lifestyle-photo-6@2x.png",
                category: "green",
                categoryContent: "fitness",
            },
        ],
    },
    {
        title: "Mindfulness",
        items: [
            {
                url: "/article/diet-food",
                title: "7 Impossibly Hard Yoga Moves to Master",
                avatar: "/images/content/avatar-5.png",
                author: "Porter Daniel",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-1.png",
                image2x: "/images/content/lifestyle-photo-1@2x.png",
                category: "red",
                categoryContent: "fitness",
            },
            {
                url: "/article/diet-food",
                title: "Keep It Chill: How To Do a Water Salutation",
                avatar: "/images/content/avatar-2.png",
                author: "Clemens Reilly",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-2.png",
                image2x: "/images/content/lifestyle-photo-2@2x.png",
                category: "green",
                categoryContent: "yoga",
            },
            {
                url: "/article/diet-food",
                title: "Keep It Chill: How To Do a Water Salutation",
                avatar: "/images/content/avatar-3.png",
                author: "Lorine Parker",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-3.png",
                image2x: "/images/content/lifestyle-photo-3@2x.png",
                category: "pink",
                categoryContent: "new",
            },
            {
                url: "/article/diet-food",
                title: "7 Impossibly Hard Yoga Moves to Master",
                avatar: "/images/content/avatar-1.png",
                author: "Felipa Kub",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-4.png",
                image2x: "/images/content/lifestyle-photo-4@2x.png",
                category: "black",
                categoryContent: "featured",
            },
        ],
    },
];

const Blog = ({ mainPage }) => {
    const { i18n, t } = useTranslation("features");
    const [activeIndex, setActiveIndex] = useState(0);
    const [blogs, setBlogs] = useState([]);
    const [blogsCategories, setBlogsCategories] = useState([]);
    const [blogsCount, setBlogsCount] = useState({
        limit: 10,
        offset: 0,
        reachedEnd: false
    });

    const [loading, setLoading] = useState(false);

    async function getData(limit, offset) {
        try {
            setLoading(true);
            const res = await getBlogs(limit, offset);
            if (!offset) {
                const blogsCategories = await getBlogsCategories();
                setBlogsCategories(blogsCategories);
            }

            if (!res.next)
                setBlogsCount({ ...blogsCount, reachedEnd: true });

            setBlogs(blogs.concat(res.result));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const loadMoreBlogs = () => {
        const { limit, offset } = blogsCount;
        getData(limit, offset + 10);
        setBlogsCount({
            offset: offset + 10
        });
    };



    if (loading) return <Spinner />;
    if (!blogs.length) return null;


    let ApiItems = blogsCategories.map(cat => {
        const items = blogs.filter(blog => blog.category.id === cat.id);
        return {
            title: (i18n.resolvedLanguage !== "ar" ? cat.title_en || "General" : cat.title_ar || "عام"),
            items
        };
    });

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
                        {ApiItems[activeIndex].items.slice(0, mainPage === true ? -1 : 3).concat(ApiItems[activeIndex].items).map((x, index) => (
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