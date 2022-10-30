import React, { useRef } from "react";
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

const Features = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      {/* <Blog/> */}
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
      <Offer className="section" />
    </>
  );
};

export default Features;
