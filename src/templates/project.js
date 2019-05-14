import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Link from "gatsby-link";

import Footer from "../components/footer";

class ProjectTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const project = get(this.props, "data.contentfulProject");
    const { title, logo, tags, body, footerLink } = project;

    function arrayToString(array) {
      let string = "[ ";

      for (let i = 0; i < array.length; i++) {
        string += array[i];

        if (i < array.length - 1) {
          string += ", ";
        }
      }
      string += " ]";

      return string;
    }

    return (
      <div>
        <section className="page__section project">
          <div className="wrapper-inner project__wrapper-inner">
            <Helmet title={`${title} | ${siteTitle}`} />
            <Link to="/#projects" className="project__close">
              <img src="/assets/close.svg" className="project__close-img" />
            </Link>
            <h1 className="project__title page__title">{title}</h1>
            {logo && logo.sizes.src !== null && (
              <Img
                alt={logo.description ? logo.description : logo.title}
                sizes={logo.sizes}
                className="project__logo"
              />
            )}
            {logo && logo.file.contentType.includes("svg") && (
              <div className="project__logo-container">
                <img
                  alt={logo.description ? logo.description : logo.title}
                  src={logo.file.url}
                  className="project__logo"
                />
              </div>
            )}
            <h2 className="project__tags">{arrayToString(tags)}</h2>
            <div
              className="project__content"
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.html
              }}
            />
          </div>
        </section>
        <Footer
          links={footerLink}
          visual={get(this.props, "data.contentfulFooter.visual")}
        />
      </div>
    );
  }
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      publishDate(formatString: "MMMM Do, YYYY")
      title
      logo {
        title
        description
        file {
          url
          fileName
          contentType
        }
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      tags
      body {
        childMarkdownRemark {
          html
        }
      }
      footerLink {
        label
        link
      }
    }
    contentfulFooter {
      visual {
        title
        description
        file {
          url
          fileName
          contentType
        }
        sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
    }
  }
`;
