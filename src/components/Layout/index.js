import React from "react";
import Footer from "../footer";
import '../../assets/styles/style.scss'
import * as style from './style.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <main>{children}</main>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;