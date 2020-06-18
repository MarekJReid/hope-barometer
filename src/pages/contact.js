import React from "react";
import { Link } from "gatsby";
import emailjs from 'emailjs-com';

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Button } from 'react-materialize'

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_DmFlfyZG', e.target, 'user_geDbwB2GzXricJJvAkiVc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (

  <Layout>
    <SEO title="Contact-Us" />
    <div className="container"
    style={{
      paddingTop: '1rem'
    }}>
    <div className="section">
      <div className="container">
        <div className="row">
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <h3>Please Enter Your Details and Enquiry Below</h3>
          <form className="col s12" onSubmit={sendEmail}>
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" class="validate" required/>
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" class="validate" required/>
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="email" id="email" class="validate" required/>
                <label for="email">Email Address</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" required></textarea>
                <label for="textarea1">Please Enter Your Enquiry Here</label>
              </div>
            </div>
            <Button
          style= {{
            float: 'right'
          }}
          type="submit" value="Send"
          > Submit </Button>
           
          </form>
          
         
        </div>
      </div>
    </div>
    </div>
  </Layout>
)
};

export default Contact;
