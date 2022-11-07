import React, { Suspense } from "react";
import styles from "./Article.module.sass";
import Post from "./Post";
import Review from "../../components/Review";
import Blog from "../../components/Blog";
import Story from "./Story";
import Spinner from "../../components/Spinner";

const Download = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Post />
        <Blog mainPage />
        <Review className="section-bg" />
        <Story />
      </Suspense>
    </>
  );
};

export default Download;
