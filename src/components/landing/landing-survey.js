import React from "react";

import survey from "../../images/survey-landing.jpg";
const LandingSurvey = () => {
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
            className="col s12 m4 "
            style={{
              padding: `0rem`,
              margin: `0rem`,
            }}
          >
            <div>
              <img
                src={survey}
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
              >Survey</h2>
              <p
              data-sal="slide-left"
              data-sal-delay="500"
              data-sal-easing="ease"
              data-sal-duration="1000"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                iusto nulla sint quasi sed voluptatum earum dignissimos, iste
                rerum beatae sunt asperiores vitae incidunt accusantium culpa
                vel voluptate soluta, in quia natus perspiciatis. Est laborum
                optio reiciendis laudantium, voluptatibus suscipit adipisci
                ducimus commodi, repellat cum sint delectus. Quo, placeat
                obcaecati?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSurvey;
