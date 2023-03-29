import React from "react";
import useFrontPage from "../../queries/frontPage.graphql";
import splitString from "../../helpers/splitString";
import * as style from "./index.module.scss";
// import Img from "gatsby-image";

const Hero = () => {
  const { title, visual } = useFrontPage();

  return (
    <section className={style.hero} id="hero">
      <div className="wrapper-inner hero__wrapper-inner">
        {title && (
          <h1 className="hero__title">
            {splitString(title, 'hero__title-span')}
          </h1>
        )}
        {visual && visual.file.contentType.includes("svg") && (
          <img
            alt={visual.description ? visual.description : visual.title}
            src={visual.file.url}
            className="hero__visual visual"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;