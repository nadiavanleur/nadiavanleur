import { useStaticQuery, graphql } from "gatsby"

const useSkills = () => {
  const data = useStaticQuery(graphql`
    query SkillsQuery {
      contentfulSkills {
        title
        skills {
          label
          rating
        }
        otherSkills
      }
    }
  `);

  return data?.contentfulSkills;
};

export default useSkills;