import React from "react";
import Img from "gatsby-image";

export default ({ title, body }) => {
  return (
    <section className="about page__section" id="about">
      <div className="wrapper-inner about__wrapper-inner">
        {title && <h2 className="about__title page__title">{title}</h2>}
        {body && (
          <p
            className="about__text"
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html
            }}
          />
        )}
      </div>
    </section>
  );
};
