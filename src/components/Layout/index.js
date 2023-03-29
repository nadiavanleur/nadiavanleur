import React from "react";
import Footer from "../footer";
import Header from "../header";
import '../../assets/styles/style.scss'
import * as style from './style.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      {/* <Header /> */}
      <main>{children}</main>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;