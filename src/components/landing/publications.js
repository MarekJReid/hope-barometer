import React from "react";

const Publicatons = () => {
  return (
    <div>
      <div
        className="section"
        style={{
          padding: `10rem 3rem 3rem 3rem`,
        }}
      >
        <div
          className="publication-header"
          style={{
            textAlign: `center`,
            paddingBottom: `2rem`,
          }}
          data-sal="slide-down"
                         data-sal-delay="400"
                         data-sal-duration="1000"
                         data-sal-easing="ease"
                       
        >
          <h1
          style={{
              paddingBottom: `1rem`
          }}
          >
            We are affiliated with the following institutions:
          </h1>
        </div>

        <div className="row">
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="200"
          data-sal-duration="500"
          data-sal-easing="ease">
            <img src={require("../../images/grad2.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-duration="500"
          data-sal-easing="ease">
            <img src={require("../../images/grad3.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="400"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad4.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="600"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad5.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="700"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad6.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-duration="800"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad7.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="900"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad8.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1000"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad9.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1100"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad10.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1200"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad11.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1300"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("../../images/grad12.png")} />
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default Publicatons;