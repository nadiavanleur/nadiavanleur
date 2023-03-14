import { useStaticQuery, graphql } from "gatsby"

const useAbout = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulAbout {
        title
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return data?.contentfulAbout;
};

export default useAbout;