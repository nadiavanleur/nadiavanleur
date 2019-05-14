import React from "react";
import Img from "gatsby-image";

export default ({ data }) => {
  return (
    <section className="skills page__section" id="skills">
      <div className="wrapper-inner skills__wrapper-inner">
        <h2 className="skills__title page__title">Vaardigheden</h2>
        <ul className="skills__list">
          <li className="skills__item">
            <h3 className="skills__item-title">
              HTML<span className="skills__rating">●●●●●●●●●○</span>
            </h3>
            {/* <p className="skills__description">
              lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p> */}
          </li>
          <li className="skills__item">
            <h3 className="skills__item-title">
              SCSS<span className="skills__rating">●●●●●●●●●○</span>
            </h3>
          </li>
          <li className="skills__item">
            <h3 className="skills__item-title">
              Javascript<span className="skills__rating">●●●●●●●●●○</span>
            </h3>
          </li>
          <li className="skills__item">
            <h3 className="skills__item-title">
              Scrum<span className="skills__rating">●●●●●●●●●○</span>
            </h3>
          </li>
          <li className="skills__item">
            <h3 className="skills__item-title">
              Sketch<span className="skills__rating">●●●●●●●●●○</span>
            </h3>
          </li>
        </ul>
        <p className="skills__text">
          web design ● twig ● html ● concepting ● user experience ● es6 ● sketch
          ● scrum ● bemit ● graphql ● accessibility ● static site generation ●
          scss ● gatsby ● netlify cms ● css
        </p>
      </div>
    </section>
  );
};
