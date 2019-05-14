import React from "react";
import Img from "gatsby-image";

import SlickSlider from "../components/slider";

export default ({ data }) => {
  const assetsFolder = "/assets/";
  const infoImg = "/assets/info.svg";

  return (
    <section className="projects page__section" id="projects">
      <div className="wrapper-inner projects__wrapper-inner">
        <h2 className="projects__title page__title">Projecten</h2>
        <SlickSlider elementClass="projects__slider">
          <li className="slider__slide">
            <div className="slider__image-wrapper">
              <img
                src={`${assetsFolder}/cz_logo.svg`}
                alt="CZ logo"
                className="slider__image"
              />
              <a href="/project/werken-bij-cz" className="slider__link">
                <img src={infoImg} alt="i" className="slider__info" />
              </a>
            </div>
          </li>
          <li className="slider__slide">
            <div className="slider__image-wrapper">
              <img
                src={`${assetsFolder}/handpicked_logo.svg`}
                alt="Handpicked Agencies logo"
                className="slider__image"
              />
              <a href="/project/handpicked-agencies" className="slider__link">
                <img src={infoImg} alt="i" className="slider__info" />
              </a>
            </div>
          </li>
          <li className="slider__slide">
            <div className="slider__image-wrapper">
              <img
                src={`${assetsFolder}/dgg_logo.svg`}
                alt="De Graaf Groep logo"
                className="slider__image"
              />
              <a href="/project/de-graaf-groep" className="slider__link">
                <img src={infoImg} alt="i" className="slider__info" />
              </a>
            </div>
          </li>
        </SlickSlider>
        <img
          className="projects__visual visual"
          src={`${assetsFolder}/circles-squares.svg`}
          alt="Yellow circles and blue squares"
        />
      </div>
    </section>
  );
};
