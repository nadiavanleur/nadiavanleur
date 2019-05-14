import React from "react";
import Header from "../components/header";
import Helmet from "react-helmet";

export default ({ children }) => {
  return (
    <div>
      <Helmet
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `https://images.ctfassets.net/ddc4b7sh07v4/5YYxxVY7FQAV82QLDmH9OE/38d8dcaef90ecff2df06f2ffaedc1ee4/favicon.svg`
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `https://images.ctfassets.net/ddc4b7sh07v4/5YYxxVY7FQAV82QLDmH9OE/38d8dcaef90ecff2df06f2ffaedc1ee4/favicon.svg`
          },
          {
            rel: "shortcut icon",
            type: "image/png",
            href: `https://images.ctfassets.net/ddc4b7sh07v4/5YYxxVY7FQAV82QLDmH9OE/38d8dcaef90ecff2df06f2ffaedc1ee4/favicon.svg`
          }
        ]}
      />
      <Header />
      <main>{children()}</main>
    </div>
  );
};
