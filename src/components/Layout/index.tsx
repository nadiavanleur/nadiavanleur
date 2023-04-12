import React from "react";
import Footer from "../Footer";
import * as style from './style.module.scss';

type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={style.layout}>
      <main className={style.main}>{children}</main>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;