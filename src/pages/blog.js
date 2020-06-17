import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  const info = data.allContentfulBlogPost.edges;

 
  return (
    <div>
      <Layout>
      <SEO title="Blog Page" />
           
        <div className="container">
          <div className="section">
          <ol>
            
            {info.map((edges) => {
              return (
                <div className="card">
                <li
                style={{
                  listStyleType: 'none'
                }}>
                  <Link to={`/blog/${edges.node.slug}`}
                  style={{display: 'block', padding: '2rem', color: 'black'}}
                  >
                    <h2>{edges.node.title}</h2>
                    <p>{edges.node.publishedDate}</p>
                  </Link>
                </li>
                </div>
              );
            })}
            
            
          </ol>
          </div>
         
        </div>

      </Layout>
    </div>
  );
};

export default BlogPosts;
