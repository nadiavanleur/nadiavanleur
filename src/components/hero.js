import React from "react";
import Img from "gatsby-image";

export default ({ data }) => {
  return (
    <section className="hero page__section" id="hero">
      <div className="wrapper-inner hero__wrapper-inner">
        <h1 className="hero__title">
          <span className="hero__title-span">Nadia</span>
          <span className="hero__title-span">van</span>
          <span className="hero__title-span">Leur</span>
        </h1>
        <img
          src="/assets/square-triangles.svg"
          alt="blue and yellow triangles"
          className="hero__visual visual"
        />
      </div>
    </section>
  );
};
