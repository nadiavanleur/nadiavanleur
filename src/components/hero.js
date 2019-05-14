import React from "react";
import Img from "gatsby-image";

export default ({ title, visual }) => {
  return (
    <section className="hero page__section" id="hero">
      <div className="wrapper-inner hero__wrapper-inner">
        {title && (
          <h1 className="hero__title">
            {title.split(" ").map(node => {
              return <span className="hero__title-span">{node}</span>;
            })}
          </h1>
        )}
        {visual && visual.sizes.src !== null && (
          <Img
            alt={visual.description ? visual.description : visual.title}
            sizes={visual.sizes}
            className="hero__visual visual"
          />
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
