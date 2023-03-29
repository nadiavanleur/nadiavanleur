import React from "react";
import useFooter from "../../queries/footer.graphql";
import StartMenu from "../StartMenu";
import * as style from "./style.module.scss";
// import Img from "gatsby-image";

const Footer = () => {
  const { links, visual } = useFooter();

  return (
    <footer className={style.footer}>
      <div className={style.left}>
        <StartMenu />
        {/* @TODO Quick access menu */}
      </div>
      <div className={style.right}>
        {/* @TODO clock */}
      </div>
    </footer>
  );
};

export default Footer;