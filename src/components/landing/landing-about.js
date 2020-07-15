import React from "react";

import motivation from "../../images/motivation.jpg";
const LandingAbout = () => {

  
  return (
    <div>
      <div className="section">
        <div
          className="row"
          style={{
            height: `50vh`,
            margin: `0`,
            padding: `0`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <div
            className="col s12 m4"
            style={{
              padding: `0rem`,
              margin: `0rem`,
            }}
          >
            <div>
              <img
                src={motivation}
                alt=""
                style={{
                  overflow: `hidden`,
                  margin: `0`,
                }}
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="1000"
              />
            </div>
          </div>
          <div
            className="col s12 m8"
            style={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <div
              style={{
                padding: `2rem`,
              }}
            >
              <h2
                 data-sal="slide-left"
                 data-sal-delay="300"
                 data-sal-easing="ease"
                 data-sal-duration="1000"
              >Motivation</h2>
              <p
              data-sal="slide-left"
              data-sal-delay="500"
              data-sal-easing="ease"
              data-sal-duration="1000"
              >
                The basic motivation for developing the ‘Hope-Barometer
                International Research Program' was responding to the impression
                that in Europe, the attention of the populous and mass media
                concerning the future was focused mainly on problems, risks,
                catastrophes, worries and fears rather than opportunity and
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
