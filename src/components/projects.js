import React from "react";
import Img from "gatsby-image";
import generateWords from "../helpers/generateWords";

export default ({ projects, title, visual, icon }) => {
  return (
    <section className="projects page__section" id="projects">
      <div className="wrapper-inner projects__wrapper-inner">
        {title && <h2 className="projects__title page__title">{title}</h2>}
      </div>

      <ul className="projects__list">
        {projects.map(({ node }) => {
          const {
            logo,
            slug,
            footerLink,
            body,
            tags,
            title,
            backgroundColor,
            textColor,
          } = node;
          console.dir(node);

          return (
            <li
              className={`projects__item${
                textColor === "light" ? " projects__item--text-light" : ""
              }`}
              style={{ background: backgroundColor || "transparent" }}
              id={`project-${slug}`}
            >
              <div className="wrapper-inner">
                <div className="projects__item-inner">
                  <h3 className="projects__item-title">{title}</h3>
                  {logo && logo.file.contentType.includes("svg") && (
                    <img
                      alt={logo.description ? logo.description : logo.title}
                      src={logo.file.url}
                      className="projects__item-image"
                    />
                  )}
                  {!!body && (
                    <div
                      className="projects__item-content"
                      dangerouslySetInnerHTML={{
                        __html: body.childMarkdownRemark.html,
                      }}
                    />
                  )}
                  <p className="projects__item-tags">{generateWords(tags)}</p>
                </div>
                {footerLink &&
                  !!footerLink.length &&
                  footerLink.map((link) => (
                    <a
                      href={link.link}
                      className="projects__item-link button"
                      target="_blank"
                    >
                      {link.label || "Details"}
                    </a>
                  ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
