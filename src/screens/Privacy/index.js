import React, { Suspense } from "react";
import Spinner from "../../components/Spinner";
import Hero from "./Hero";

const Privacy = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Hero />
        </Suspense>
    );
};

export default Privacy;
