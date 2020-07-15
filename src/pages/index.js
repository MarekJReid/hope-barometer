import React from "react";

import Layout from "../components/layout";
import Video from "../components/video";
import SEO from "../components/seo";
import Hero from "../components/landing/hero";
import LandingQoute from "../components/landing/landing-qoute";
import LandingAbout from "../components/landing/landing-about";
import TeamLanding from '../components/landing/team'
import LandingSurvey from '../components/landing/landing-survey'
import MailchimpSignup from '../components/landing/mailchimp-signup.js'
import Publications from '../components/landing/publications'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Hero />
      <LandingQoute />
     
      
      <LandingAbout />
      <TeamLanding />
      <LandingSurvey />

      <Publications />
      <div className="section">
        <MailchimpSignup />
      </div>

      
      
    </div>
  </Layout>
);

export default IndexPage;
