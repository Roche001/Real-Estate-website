import React from "react";
import "./Blogs.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Blogs = () => {
  return (
    <section id="Blogs" className="container-fluid">
      <div className="h2">
        <h5>Real Estate Blogs</h5>
        <h2>Recent Real Estate Blogss</h2>
      </div>
      <div className="blogs">
        <div className="blogs-box">
          <div className="blogs-box-img">
            <img src="./assets/blog1.jpg" alt="blog" />
          </div>
          <div className="blog-content">
            <span>ADMIN April 1, 2020</span>
            <div className="small">
              <small>
                {" "}
                <BsFillPatchCheckFill />
                Business, Investing
              </small>
            </div>

            <h5>Alternatives to Investing in Property</h5>
            <p>
              Many Real Estate investors are busy people, with little or no time
              to run other full-time{" "}
              <a
                href="https://propertylistings.co.ke/alternatives-to-investing-in-property/"
                target="_blank"
                without
                rel="noreferrer"
              >
                {" "}
                <i>continue reading...</i>
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="blogs-box">
          <div className="blogs-box-img">
            <img src="./assets/blog2.jpg" alt="blog" />
          </div>
          <div className="blog-content">
            <span>ADMIN August 10, 2020</span>
            <div className="small">
              <small>
                {" "}
                <BsFillPatchCheckFill />
                Business, Real Estate
              </small>
            </div>

            <h5>Container Houses and Offices</h5>
            <p>
              Kenyans are now embracing fabricating shipping containers into
              homes, offices, and shops. This is...{" "}
              <a
                href="https://propertylistings.co.ke/kenya-properties/business/"
                target="_blank"
                without
                rel="noreferrer"
              >
                {" "}
                <i>continue reading...</i>
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="blogs-box">
          <div className="blogs-box-img">
            <img src="./assets/blog3.jpg" alt="blog" />
          </div>
          <div className="blog-content">
            <span>ADMIN September 1, 2020</span>
            <div className="small">
              <small>
                {" "}
                <BsFillPatchCheckFill />
                Land, News
              </small>
            </div>

            <h5>Unscrupulous Land Dealers in Kenya</h5>
            <p>
              While Real Estate is a preferred investment option for many
              Kenyans, it is also a very high risk in{" "}
              <a
                href="https://propertylistings.co.ke/unscrupulous-land-dealers-in-kenya/"
                target="_blank"
                without
                rel="noreferrer"
              >
                {" "}
                <i>continue reading...</i>
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="blogs-box">
          <div className="blogs-box-img">
            <img src="./assets/blog4.jpg" alt="blog" />
          </div>
          <div className="blog-content">
            <span>ADMIN October 31, 2020</span>
            <div className="small">
              <small>
                {" "}
                <BsFillPatchCheckFill />
                Business, Financial Management
              </small>
            </div>

            <h5>Get rid of habits that can make you poor</h5>
            <p>
              What is the secret to ditching poverty for riches and success? The
              gulf between the rich and the{" "}
              <a
                href="https://propertylistings.co.ke/get-rid-of-habits-that-can-make-you-poor/"
                target="_blank"
                without
                rel="noreferrer"
              >
                {" "}
                <i>continue reading...</i>
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="blogs-box">
          <div className="blogs-box-img">
            <img src="./assets/blog5.jpg" alt="blog" />
          </div>
          <div className="blog-content">
            <span>ADMIN April 1, 2020</span>
            <div className="small">
              <small>
                {" "}
                <BsFillPatchCheckFill />
                Investing, Real Estate
              </small>
            </div>

            <h5>Covid-19 and Real Estate Sector </h5>
            <p>
              Covid-19 came just when the real estate sector was beginning to
              gain momentum. It has brought with{" "}
              <a
                href="https://propertylistings.co.ke/what-covid-19-means-for-real-estate-sector-in-kenya/"
                target="_blank"
                without
                rel="noreferrer"
              >
                {" "}
                <i>continue reading...</i>
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="blogs-box">
          <div className="blogs-box-img">
            <img src="./assets/blog6.jpg" alt="blog" />
          </div>
          <div className="blog-content">
            <span>ADMIN June 1, 2021</span>
            <div className="small">
              <small>
                {" "}
                <BsFillPatchCheckFill />
                Real Estate
              </small>
            </div>

            <h5>Before Renting a Home or Apartment</h5>
            <p>
              When you are considering a place to rent, it is wonderful to get
              an ideal space that you can turn{" "}
              <a
                href="https://propertylistings.co.ke/9-factors-to-consider-when-renting-a-house-or-an-apartment//"
                target="_blank"
                without
                rel="noreferrer"
              >
                {" "}
                <i>continue reading...</i>
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
