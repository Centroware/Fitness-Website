import i18next from "i18next";
import { useEffect, useState } from 'react';
import { getBlogs, getBlogsCategories } from "../../helpers";

export default function useBlogs() {
    const [blogs] = useState([]);
    const [blogsWithCategories, setblogsWithCategories] = useState([]);
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

            let blogsCategories = [];
            if (!offset) {
                blogsCategories = await getBlogsCategories();
            }

            if (!res.next)
                setBlogsCount({ ...blogsCount, reachedEnd: true });

            const blogsWithCategories = blogsCategories?.map(cat => {
                const items = blogs.concat(res.result).filter(blog => blog.category.id === cat.id);
                return {
                    title: (i18next.resolvedLanguage !== "ar" ? cat.title_en || "General" : cat.title_ar || "عام"),
                    items
                };
            });
            setblogsWithCategories(blogsWithCategories);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadMoreBlogs = () => {
        const { limit, offset } = blogsCount;
        getData(limit, offset + 10);
        setBlogsCount({
            offset: offset + 10
        });
    };




    return { loadMoreBlogs, blogsWithCategories, loading, blogs, blogsCount };
}
