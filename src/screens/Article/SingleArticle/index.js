import React from 'react';
import { useParams } from 'react-router-dom';
import cn from "classnames";
import styles from "./SingleArticle.module.sass";
import { useLocation } from 'react-router-dom';

const SingleArticle = () => {
    // const { slug } = useParams();
    const { state } = useLocation();

    return (
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: state }} />
    );
};

export default SingleArticle;