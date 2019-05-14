import React from "react";
import Img from "gatsby-image";
import get from "lodash/get";

import SlickSlider from "../components/slider";

export default ({ projects }) => {
  console.log(projects);

  const assetsFolder = "/assets/";
  const infoImg = "/assets/info.svg";

  return (
    <section className="projects page__section" id="projects">
      <div className="wrapper-inner projects__wrapper-inner">
        <h2 className="projects__title page__title">Projecten</h2>
        <SlickSlider elementClass="projects__slider">
          {projects.map(({ node }) => {
            const { logo, slug } = node;

            return (
              <li className="slider__slide">
                <div className="slider__image-wrapper">
                  {logo.sizes.src !== null && (
                    <Img
                      alt={logo.description ? logo.description : logo.title}
                      sizes={logo.sizes}
                      className="slider__image"
                    />
                  )}
                  {logo.file.contentType.includes("svg") && (
                    <img
                      alt={logo.description ? logo.description : logo.title}
                      src={logo.file.url}
                      className="slider__image"
                    />
                  )}
                  <a href={`/project/${slug}`} className="slider__link">
                    <img src={infoImg} alt="i" className="slider__info" />
                  </a>
                </div>
              </li>
            );
          })}
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
