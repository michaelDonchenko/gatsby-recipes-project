const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const tagTemplate = path.resolve(`src/templates/tagTemplate.js`)

  const { data } = await graphql(`
    query allTags {
      allContentfulRecipe {
        edges {
          node {
            content {
              tags
            }
          }
        }
      }
    }
  `)

  data.allContentfulRecipe.edges.forEach(recipe => {
    recipe.node.content.tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}`,
        component: tagTemplate,
        context: {
          tag: tag,
        },
      })
    })
  })
}
