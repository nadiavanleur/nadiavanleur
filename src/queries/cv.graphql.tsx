import { useStaticQuery, graphql } from "gatsby"

const useCv = () => {
  const data = useStaticQuery(graphql`
    query CvQuery {
      cvDutch: contentfulAsset(title: { eq: "CV nederlands" }) {
        file {
          url
        }
      }
    }
  `);

  return data;
};

export default useCv;