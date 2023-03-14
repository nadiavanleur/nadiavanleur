import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
// import Img from "gatsby-image";
import { Link } from "gatsby-link";
import { graphql } from 'gatsby'

import Footer from "../components/footer";

class ProjectTemplate extends React.Component {
  render() {
    const {
      title: siteTitle,
      description,
      siteUrl,
      keywords,
    } = get(this.props, "data.site.siteMetadata");
    const project = get(this.props, "data.contentfulProject");
    const { title, logo, tags, body, footerLink, slug } = project;
    const icon = get(this.props, "data.closeIcon");

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
            <Helmet>
              <meta charSet="utf-8" />
              <title>{`${title} | ${siteTitle}`}</title>
              <link rel="canonical" href={`${siteUrl}/project/${slug}`} />
              <meta
                name="keywords"
                content={`${tags.toString()}, ${keywords}`}
              />
              {!!body && (
                <meta
                  name="description"
                  content={`${body.childMarkdownRemark.internal.content} \n \n --- \n \n${description}`}
                />
              )}
            </Helmet>

            <Link to="/#projects" className="project__close">
              {/* {icon && icon.sizes.src !== null && (
                <Img
                  alt={icon.description ? icon.description : icon.title}
                  sizes={icon.sizes}
                  className="project__close-img"
                />
              )} @TODO */}
              {icon && icon.file.contentType.includes("svg") && (
                <img
                  alt={icon.description ? icon.description : icon.title}
                  src={icon.file.url}
                  className="project__close-img"
                />
              )}
            </Link>
            <h1 className="project__title page__title">{title}</h1>
            {/* {logo && logo.sizes.src !== null && (
              <Img
                alt={logo.description ? logo.description : logo.title}
                sizes={logo.sizes}
                className="project__logo"
              />
            )} @TODO */}
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
            {!!body && (
              <div
                className="project__content"
                dangerouslySetInnerHTML={{
                  __html: body.childMarkdownRemark.html,
                }}
              />
            )}
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
    site {
      siteMetadata {
        title
        description
        siteUrl
        keywords
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      slug
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
      }
      tags
      body {
        childMarkdownRemark {
          html
          internal {
            content
          }
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
      }
    }
    closeIcon: contentfulAsset(title: { eq: "close" }) {
      title
      description
      file {
        url
        fileName
        contentType
      }
    }
  }
`;
