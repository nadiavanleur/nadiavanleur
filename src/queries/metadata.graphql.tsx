import { useStaticQuery, graphql } from "gatsby"

const useMetadata = () => {
  const data = useStaticQuery(graphql`
    query Metadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          keywords
        }
      }
    }
  `);

  return data?.site?.siteMetadata;
};

export default useMetadata;