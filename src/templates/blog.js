import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query {
    contentfulBlogPost {
      title
      
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
console.log (props)

  return (
    <Layout>
      <div className="section">
        <div className="container">
        <div className="section">
          <div className="container">

            <div className="col 12"
            >
              <div className="card center-align"

              >
                <div className="card-title center-align"
                  style={{
                    padding: '1rem'
                  }}>
                 <h1>{props.data.contentfulBlogPost.title}</h1>
                </div>
                <div className="card-title center-align"
                  style={{
                    padding: '1rem'
                  }}>
                  Date Released: <p>{props.data.contentfulBlogPost.publishedDate}</p>
                </div>
                <div className="card-title center-align"
                  style={{
                    padding: '1rem'
                  }}
                >
                  Author: {props.data.contentfulBlogPost.author}
                </div>
                <div className="card-content center-align">
                {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      
     

    </Layout>
  )
}

export default Blog
