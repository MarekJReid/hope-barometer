import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const data = graphql`
query ($country: String) {
  contentfulReport (country: {eq: $country}){
     title

publishedDate(formatString: "MMMM Do, YYYY")
body {
json
}
  }

    }
`


const Blog = ( {data} ) => {
  console.log(data.contentfulReport.publishedDate)
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
                     
                     <p>
                     {data.contentfulReport.title}
                     </p>
                    
                 
                </div>
                <div className="card-title center-align"
                  style={{
                    padding: '1rem'
                  }}>
                  Date Released: {data.contentfulReport.publishedDate}
                </div>
                <div className="card-title center-align"
                  style={{
                    padding: '1rem'
                  }}
                >
                  Author: {data.contentfulReport.author}
                </div>
                <div className="card-content center-align">
                  {documentToReactComponents(data.contentfulReport.body.json)}
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
