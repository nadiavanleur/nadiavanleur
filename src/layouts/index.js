import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout";
import Navigation from "../components/navigation";

import "../styles/style.scss";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return <Layout>{children}</Layout>;
  }
}

export default Template;
