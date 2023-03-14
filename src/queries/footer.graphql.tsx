import { useStaticQuery, graphql } from "gatsby"
import useCv from "./cv.graphql";

const useFooter = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
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

  return {
    links: [
      {
        label: "Bekijk mijn CV",
        link: useCv()?.cvDutch.file.url,
      },
      {
        label: "Stuur een mailtje",
        link: "mailto:nadiavanleur@gmail.com",
      },
    ],
    visual: data?.contentfulFooter?.visual
  };
};

export default useFooter;