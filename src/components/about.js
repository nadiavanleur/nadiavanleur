import React from "react";
import Img from "gatsby-image";

export default ({ data }) => {
  return (
    <section className="about page__section" id="about">
      <div className="wrapper-inner about__wrapper-inner">
        <h2 className="about__title page__title">Over mij</h2>
        <p className="about__text">
          {`Hoi! Ik kom uit Kerk-Avezaath, maar sinds een tijdje woon ik in Breda, erg leuke stad.

          In mijn vrije tijd doe ik onder andere aan drummen, gitaar spelen, mixtapes maken, tuinieren en ook ijshockey vind ik gaaf. Ik verzamel analoge camera’s, die met rolletjes, en neem ze soms mee op pad om foto’s te maken. 

          Binnen mijn opleiding heb ik me gespecialiseerd in frontend development en web design. Verder ben ik gemotiveerd, creatief en houd ik wel van een uitdaging.`}
        </p>
      </div>
    </section>
  );
};
