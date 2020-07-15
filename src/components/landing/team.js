import React from "react";

import teamLanding from "../../images/team-landing.jpg";
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
            className="col m8 s12"
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
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              >Our Team</h2>
              <p
              data-sal="slide-right"
              data-sal-delay="500"
              data-sal-easing="ease"
              data-sal-duration="1000"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque, consequuntur assumenda nihil, amet ipsum saepe itaque odit beatae quod, expedita maiores autem dolor facere architecto commodi. Quibusdam laudantium dolorem incidunt sunt in natus veritatis harum facilis, vel voluptas ipsum dolore soluta porro dolorum atque id et temporibus. Ab, asperiores.
              </p>
            </div>
          </div>
          <div
            className="col m4 s12"
            style={{
              padding: `0rem`,
              margin: `0rem`,
            }}
          >
            <div>
              <img
                src={teamLanding}
                alt=""
                style={{
                  overflow: `hidden`,
                  margin: `0`,
                }}
                data-sal="slide-left"
                 data-sal-delay="100"
                 data-sal-easing="ease"
                 data-sal-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
