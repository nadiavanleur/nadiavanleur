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
    // const siteTitle = get(this, "props.data.site.siteMetadata.title");
    // const posts = get(this, "props.data.allContentfulBlogPost.edges");
    // const [author] = get(this, "props.data.allContentfulPerson.edges");
    const siteTitle = "Nadia van Leur";

    return (
      <div>
        <Helmet title={siteTitle} />
        <Hero />
        <About />
        <Projects
          projects={get(this, "props.data.allContentfulProject.edges")}
        />
        <Skills />
        <Footer links={[{ label: "Bekijk mijn CV", link: "/cv.pdf" }]} />
      </div>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProject(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          logo {
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
