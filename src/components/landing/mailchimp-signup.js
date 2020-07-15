import React from "react";

const MailchimpSignup = () => {
  return (
    <div
    style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        padding: `5rem`
    }}
    >
      <div className="row"
      data-sal="fade"
      data-sal-delay="200"
      data-sal-easing="ease"
      data-sal-duration="1000"
      >
        <h1
        style={{
            padding: `2rem 4rem 0 4rem`,
            textAlign: `center`
        }}>
          Signup to our mailing list to ensure you are informed of the latest
          news
        </h1>
        <div className="row"
         style={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`
        }}>
          <form action=""
          style={{
              width: `80%`,
              display: `flex`,
            justifyContent: `center`,
            alignItems: `center`
          }}>
            <div className="col s12 l3">
            <div className="input-field"
            style={{
                width: `100%`,
                
            }}>
                <input id="first_name" type="text" class="validate" required/>
                <label for="first_name">Name</label>
              </div>
            </div>
            <div className="col s12 l3">
            <div className="input-field">
                <input id="first_name" type="text" class="validate" required/>
                <label for="first_name">Email Address</label>
              </div>
            </div>
            <div className="col s12 l3">
                <button
               
                style={{
                  background: `#9bc9e9`,
                  padding: `1rem`,
                  border: `none`,
                  borderRadius: `.2rem`,
                  color: `#f4f4f4`,
                  fontWeight: `bold`,
                  fontSize: `1.2rem`,
                  letterSpacing: `1px`

                }}>
                    SignUp
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailchimpSignup;
