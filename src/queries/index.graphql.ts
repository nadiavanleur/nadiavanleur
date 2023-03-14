import { useStaticQuery, graphql } from "gatsby"

const useQuery = () => {
  const data = useStaticQuery(graphql`
  query HomeQuery {
    infoIcon: contentfulAsset(title: { eq: "info" }) {
      title
      file {
        url
        fileName
        contentType
      }
    }
  }
`)

  return data;
};

export default useQuery;