import i18next from "i18next";
import React from 'react';
import "./Spinner.scss";

export default function Spinner() {
    return (
        <div className={i18next.resolvedLanguage === "en" ? "spinner" : "spinnerRtl"}>
            <span className="spinner-inner-1"></span>
            <span className="spinner-inner-2"></span>
            <span className="spinner-inner-3"></span>
        </div>);
}
