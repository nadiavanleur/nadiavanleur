const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve("./src/templates/project.js");
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const projects = result.data.allContentfulProject.edges;
        projects.forEach((project, index) => {
          createPage({
            path: `/project/${project.node.slug}/`,
            component: projectTemplate,
            context: {
              slug: project.node.slug
            }
          });
        });
      })
    );
  });
};
