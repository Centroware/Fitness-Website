import React from 'react';
import { useParams } from 'react-router-dom';
import cn from "classnames";
import styles from "./SingleArticle.module.sass";

const SingleArticle = () => {
    const { slug } = useParams();

    return (
        <div>
            <h1 className={cn(styles.header)}>
                {slug} <br />
                SingleArticle
            </h1>
        </div>
    );
};

export default SingleArticle;