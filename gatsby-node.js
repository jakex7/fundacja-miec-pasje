const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const SitesLayout = path.resolve(`./src/components/templates/SitesLayout.js`)

  return graphql(`
    query loadPagesQuery {
      allDatoCmsPage {
        edges {
          node {
            title
            slug
            content
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allDatoCmsPage.edges.forEach(edge => {
      createPage({
        path: `${edge.node.slug}`,
        component: SitesLayout,
        context: {
          title: edge.node.title,
          slug: edge.node.slug,
          content: edge.node.content,
        },
      })
    })
  })
}
