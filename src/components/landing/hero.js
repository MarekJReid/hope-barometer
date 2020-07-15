import React from "react";
import { Parallax, Background } from "react-parallax";

import hero from "../../images/hero.jpg";

const Hero = () => {
  let parallax;

  return (
    <div
      style={{
        marginTop: `-10rem`,
      }}
    >
      <Parallax bgImage={hero} strength={500}>
        <div style={{ height: `120vh` }}>
          <div
            style={{
              width: `70%`,
              padding: `1.2rem 1rem 0rem 1rem`,
              borderRadius: `1rem`,
              textAlign: `center`,
              margin: `0`,
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <h1
            data-sal="fade"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="1000"
            >
              <span
                style={{
                  lineHeight: `3.5rem`,

                  padding: `.5rem`,
                  margin: `0`,
                  color: `#0d6989`,
                  fontSize: `5rem`,
                }}
              >
                Welcome to the Hope Barometer
              </span>
            </h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
