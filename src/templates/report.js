import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
query  {
  contentfulReport {
    title
    author
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      json
    }
  }
} 
`

const Blog = (props) => {
  return (
    <div>


      <Layout>

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
                  {props.data.contentfulReport.title}
                </div>
                <div className="card-title center-align"
                  style={{
                    padding: '1rem'
                  }}>
                  Date Released: {props.data.contentfulReport.publishedDate}
                </div>
                <div className="card-title center-align"
                  style={{
                    padding: '1rem'
                  }}
                >
                  Author: {props.data.contentfulReport.author}
                </div>
                <div className="card-content center-align">
                  {documentToReactComponents(props.data.contentfulReport.body.json)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Blog;
