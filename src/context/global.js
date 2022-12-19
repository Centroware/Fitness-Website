import React from 'react';
import useBlogs from "../components/Blog/useBlogs";

export const GlobalContext = React.createContext();

export default function GlobalProvider({ children }) {
    const { loadMoreBlogs, blogsWithCategories, loading, blogs, blogsCount } = useBlogs();

    return (
        <GlobalContext.Provider value={{
            loadMoreBlogs, blogsWithCategories, loading, blogs, blogsCount
        }}>
            {children}
        </GlobalContext.Provider>
    );
}