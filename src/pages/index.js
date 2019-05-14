import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";

import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Footer from "../components/footer";

class RootIndex extends React.Component {
  render() {
    const hero = {
      title: get(this, "props.data.contentfulFrontPage.title"),
      visual: get(this, "props.data.contentfulFrontPage.visual")
    };

    const about = {
      title: get(this, "props.data.contentfulAbout.title"),
      body: get(this, "props.data.contentfulAbout.body")
    };

    const projects = {
      title: get(this, "props.data.contentfulProjects.title"),
      visual: get(this, "props.data.contentfulProjects.visual"),
      projects: get(this, "props.data.allContentfulProject.edges"),
      icon: get(this, "props.data.infoIcon")
    };

    const skills = {
      title: get(this, "props.data.contentfulSkills.title"),
      skills: get(this, "props.data.contentfulSkills.skills"),
      otherSkills: get(this, "props.data.contentfulSkills.otherSkills")
    };

    const footer = {
      links: [
        // { label: "Bekijk mijn CV", link: "/cv.pdf" },
        {
          label: "Bekijk mijn CV",
          link: get(this, "props.data.cvDutch.file.url")
        }
      ],
      visual: get(this, "props.data.contentfulFooter.visual")
    };

    const siteTitle = "Nadia van Leur";

    return (
      <div>
        <Helmet title={siteTitle} />
        <Hero {...hero} />
        <About {...about} />
        <Projects {...projects} />
        <Skills {...skills} />
        <Footer {...footer} />
      </div>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProject(sort: { fields: [projectDate], order: DESC }) {
      edges {
        node {
          title
          slug
          logo {
            title
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
    }
    contentfulFrontPage {
      title
      visual {
        title
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
    contentfulAbout {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    contentfulProjects {
      title
      visual {
        title
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
    infoIcon: contentfulAsset(title: { eq: "info" }) {
      title
      file {
        url
        fileName
        contentType
      }
      sizes(maxWidth: 1180, background: "rgb:000000") {
        ...GatsbyContentfulSizes_withWebp
      }
    }
    contentfulSkills {
      title
      skills {
        label
        rating
      }
      otherSkills
    }
    contentfulFooter {
      visual {
        title
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
    cvDutch: contentfulAsset(title: { eq: "CV nederlands" }) {
      file {
        url
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query HomeQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulSizes_withWebp
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             sizes(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulSizes_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `;
