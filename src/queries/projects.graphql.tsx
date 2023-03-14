import { useStaticQuery, graphql } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      contentfulProjects {
        title
        visual {
          title
          file {
            url
            fileName
            contentType
          }
        }
      }
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
            textColor
            backgroundColor
          }
        }
      }
    }
  `);

  return {
    ...data?.contentfulProjects,
    projects: data?.allContentfulProject?.edges
  };
};

export default useProjects;