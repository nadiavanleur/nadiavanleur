import { useStaticQuery, graphql } from "gatsby"

const useFrontPage = () => {
  const data = useStaticQuery(graphql`
    query FrontPageQuery {
      contentfulFrontPage {
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
    }
  `);

  return data?.contentfulFrontPage;
};

export default useFrontPage;