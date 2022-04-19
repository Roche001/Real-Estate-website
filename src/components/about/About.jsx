import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="About">
      <h5 className="about-h5">About Us</h5>
      <h2 className="about-h2">Pharolix Real Estate Agency</h2>
      <div className="description">
        <div className="title">
          <p>
            Pharolix Real Estate Agency is a Registered Valuers, Estate & <br />
            consultancy in real estate.We focus on providing a highly <br />
            professional assistance on both commercial and residential <br />
            sales,lettings,property search, real estate investment,property{" "}
            <br />
            valuation and consultancy services.
          </p>
          <div className="experience">
            <div className="time">
              <h4>20</h4>
              <h3>Years of Experience</h3>
            </div>
            <div className="years">
              <h4>115k+</h4>
              <h3>Total Properties</h3>
            </div>
            <div className="realtors">
              <h4>320</h4>
              <h3>Qualified Realtors</h3>
            </div>
            <div className="branches">
              <h4>45</h4>
              <h3>Total Branches</h3>
            </div>
          </div>

          <div className="title1">
            <img src="./assets/title1.jpg" alt="title" />
          </div>

          <div className="title2">
            <img src="./assets/title2.jpg" alt="title" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
