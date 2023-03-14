import React from "react";
import useFooter from "../../queries/footer.graphql";
// import Img from "gatsby-image";

const Footer = () => {
  const { links, visual } = useFooter();

  return (
    <footer className="footer page__section" id="footer">
      <div className="wrapper-inner footer__wrapper-inner">
        <h2 className="page__title">Dit was mijn spreekbeurt.</h2>
        <p className="footer__text">Zijn er nog vragen?</p>
        {links.map(({ label, link }) => {
          return (
            <a href={link} key={link} target="_blank" rel="noreferrer" className="footer__link button">
              {label}
            </a>
          );
        })}
        {/* {visual && visual.sizes.src !== null && (
          <Img
            alt={visual.description ? visual.description : visual.title}
            sizes={visual.sizes}
            className="footer__visual visual"
          />
        )} @TODO */}
        {visual && visual.file.contentType.includes("svg") && (
          <img
            alt={visual.description ? visual.description : visual.title}
            src={visual.file.url}
            className="footer__visual visual"
          />
        )}
      </div>
    </footer>
  );
};

export default Footer;