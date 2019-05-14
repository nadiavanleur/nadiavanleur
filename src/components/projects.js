import React from "react";
import Img from "gatsby-image";
import get from "lodash/get";

import SlickSlider from "../components/slider";

export default ({ projects, title, visual }) => {
  console.log(projects);

  const assetsFolder = "/assets/";
  const infoImg = "/assets/info.svg";

  return (
    <section className="projects page__section" id="projects">
      <div className="wrapper-inner projects__wrapper-inner">
        {title && <h2 className="projects__title page__title">{title}</h2>}
        <SlickSlider elementClass="projects__slider">
          {projects.map(({ node }) => {
            const { logo, slug } = node;

            return (
              <li className="slider__slide">
                <div className="slider__image-wrapper">
                  {logo && logo.sizes.src !== null && (
                    <Img
                      alt={logo.description ? logo.description : logo.title}
                      sizes={logo.sizes}
                      className="slider__image"
                    />
                  )}
                  {logo && logo.file.contentType.includes("svg") && (
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
        {visual && visual.sizes.src !== null && (
          <Img
            alt={visual.description ? visual.description : visual.title}
            sizes={visual.sizes}
            className="projects__visual visual"
          />
        )}
        {visual && visual.file.contentType.includes("svg") && (
          <img
            alt={visual.description ? visual.description : visual.title}
            src={visual.file.url}
            className="projects__visual visual"
          />
        )}
      </div>
    </section>
  );
};
