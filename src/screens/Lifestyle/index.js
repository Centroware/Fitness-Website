import React, { Suspense } from "react";
import styles from "./Lifestyle.module.sass";
import Hero from "./Hero";
import Community from "../../components/Community";
import Spinner from "../../components/Spinner";

const Lifestyle = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Hero />
        {/* <Community /> */}
      </Suspense>
    </>
  );
};

export default Lifestyle;
