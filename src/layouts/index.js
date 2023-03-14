import React from "react";
import Layout from "../components/layout";
class Template extends React.Component {
  render() {
    const { children } = this.props;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return <Layout>{children}</Layout>;
  }
}

export default Template;
