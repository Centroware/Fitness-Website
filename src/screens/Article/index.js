import React from "react";
import styles from "./Article.module.sass";
import Post from "./Post";
import Review from "../../components/Review";
import Blog from "../../components/Blog";
import Story from "./Story";

const Download = () => {
  return (
    <>
      <Post />
      <Blog mainPage />
      <Review className="section-bg" />
      <Story />
    </>
  );
};

export default Download;
