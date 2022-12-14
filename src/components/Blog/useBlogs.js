import i18next from "i18next";
import { useEffect, useState } from 'react';
import { getBlogs, getBlogsCategories } from "../../helpers";

export default function useBlogs() {
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


    let ApiItems = blogsCategories?.map(cat => {
        const items = blogs.filter(blog => blog.category.id === cat.id);
        return {
            title: (i18next.resolvedLanguage !== "ar" ? cat.title_en || "General" : cat.title_ar || "عام"),
            items
        };
    });

    return { loadMoreBlogs, ApiItems, loading, blogs, blogsCount };
}
