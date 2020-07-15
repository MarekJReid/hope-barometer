import React from "react";
import { Parallax, Background } from "react-parallax";

import qouteImage from "../../images/aristotle-qoute.jpg";
const LandingQoute = () => {
  return (
    <div
    className='section'
      style={{
        height: `70vh`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      
        <div className="row">
          <div className="container responsive-text"
          style={{
              width: `70vw`
          }}>
          <h2
          style={{
            lineHeight: `3.5rem`,
                
            padding: `.5rem`,
            margin: `0`,
            color: `#347dad `,
         
          }}
          data-sal="slide-down"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
          >
              "...even though not every hopeful person is courageous, every
              courageous person is hopeful"
            </h2>
            <p
              style={{
                paddingRight: `2rem`,
                fontStyle: `italic`,
                float: `right`,
                color: `#28479e`,
                fontSize: `1.5rem`
                
              }}
              data-sal="slide-left"
                    data-sal-delay="1000"
                    data-sal-easing="ease"
                    data-sal-duration="1000"
            >
              Aristole
            </p>
          </div>
           
          
           
          </div>
        </div>
  );
};

export default LandingQoute;
