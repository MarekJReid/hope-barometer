const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const reportTemplate = path.resolve('./src/templates/report.js')
  const res = await graphql(`
  query {
    allContentfulReport {
      edges {
        node {
          country
        }
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          slug
        }
      }
    }
  }
    `)

  res.data.allContentfulBlogPost.edges.forEach((blog) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${blog.node.slug}`,
      context: {
        slug: blog.node.slug
      }
     
    })
    console.log('hello')
  })
console.log('hello')
  res.data.allContentfulReport.edges.forEach((edge) => {
    createPage({
      component: reportTemplate,
      path: `/results/${edge.node.country}`,
      context: {
        country: edge.node.country
      }
    })
  })
}

