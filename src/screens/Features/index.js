import React, { Suspense, useRef } from "react";
// import styles from "./Features.module.sass";
import Hero from "./Hero";
import Intro from "../../components/Intro";
import ValueProps from "../../components/ValueProps";
import Program from "./Program";
import About from "./About";
import Review from "../../components/Review";
import Clients from "../../components/Clients";
import Workouts from "../../components/Workouts";
import Advantages from "../../components/Advantages";
import Blog from "../../components/Blog";
import Offer from "../../components/Offer";
import Lifestyle from "./Lifestyle";
import Faq from "./Faq";
import Plan from "./Plan";
import Steps from "./Steps";
import Spinner from "../../components/Spinner";

const Features = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Hero scrollToRef={scrollToRef} />
        <Advantages scrollToRef={scrollToRef} className="section-pb64" />
        <Intro />
        <Steps />
        {/* <Program /> */}
        <About />
        {/* <Review className="section-pb64" /> */}
        {/* <Clients /> */}
        {/* <Workouts /> */}
        {/* <Lifestyle /> */}
        <Plan />
        <Faq />
        <Blog />
        <Offer className="section" />
      </Suspense>
    </>
  );
};

export default Features;
