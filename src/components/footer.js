import React from "react";
import Img from "gatsby-image";

export default ({ links }) => {
  console.log(links);
  return (
    <footer className="footer page__section" id="footer">
      <div className="wrapper-inner footer__wrapper-inner">
        {links.map(({ label, link }) => {
          return (
            <a href={link} target="_blank" className="footer__link button">
              {label}
            </a>
          );
        })}
        <img
          className="footer__visual visual"
          src="/assets/triangles.svg"
          alt="triangles"
        />
      </div>
    </footer>
  );
};
