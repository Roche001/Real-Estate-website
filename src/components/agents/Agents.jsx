import React from "react";
import "./Agents.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Agents = () => {
  return (
    <section id="Agents">
      <div className="h2">
        <h5>Meet Our Agents</h5>
        <h2>Our Agents</h2>
      </div>
      <div className="agents">
        <div className="agents-box">
          <div className="img-box">
            <img src="./assets/Agent1.jpg" alt="Agent" />
          </div>
          <div className="box-content">
            <h5>Listing: 10 Properties</h5>
            <h4>Liz Ryan</h4>
            <div className="socials">
              <a href="#facebook.com" target="_blank">
                <BsFacebook />
              </a>
              <a href="#facebook.com" target="_blank">
                {" "}
                <BsInstagram />
              </a>

              <a href="#facebook.com" target="_blank">
                <FaTwitter />
              </a>

              <a href="#facebook.com" target="_blank">
                {" "}
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="agents-box">
          <div className="img-box">
            <img src="./assets/Agent2.webp" alt="Agent" />
          </div>
          <div className="box-content">
            <h5>Listing: 13 Properties</h5>
            <h4>Leah Smart</h4>
            <div className="socials">
              <a href="#facebook.com" target="_blank">
                <BsFacebook />
              </a>
              <a href="#facebook.com" target="_blank">
                {" "}
                <BsInstagram />
              </a>

              <a href="#facebook.com" target="_blank">
                <FaTwitter />
              </a>

              <a href="#facebook.com" target="_blank">
                {" "}
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="agents-box">
          <div className="img-box">
            <img src="./assets/Agent3.jpg" alt="Agent" />
          </div>
          <div className="box-content">
            <h5>Listing: 23 Properties</h5>
            <h4>Susan Cain</h4>
            <div className="socials">
              <a href="#facebook.com" target="_blank">
                <BsFacebook />
              </a>
              <a href="#facebook.com" target="_blank">
                {" "}
                <BsInstagram />
              </a>

              <a href="#facebook.com" target="_blank">
                <FaTwitter />
              </a>

              <a href="#facebook.com" target="_blank">
                {" "}
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="agents-box">
          <div className="img-box">
            <img src="./assets/Agent4.webp" alt="Agent" />
          </div>
          <div className="box-content">
            <h5>Listing: 10 Properties</h5>
            <h4>Mickey Mikitani</h4>
            <div className="socials">
              <a href="#facebook.com" target="_blank">
                <BsFacebook />
              </a>
              <a href="#facebook.com" target="_blank">
                {" "}
                <BsInstagram />
              </a>

              <a href="#facebook.com" target="_blank">
                <FaTwitter />
              </a>

              <a href="#facebook.com" target="_blank">
                {" "}
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="agents-box">
          <div className="img-box">
            <img src="./assets/Agent5.webp" alt="Agent" />
          </div>
          <div className="box-content">
            <h5>Listing: 10 Properties</h5>
            <h4>Alina Khan</h4>
            <div className="socials">
              <a href="#facebook.com" target="_blank">
                <BsFacebook />
              </a>
              <a href="#facebook.com" target="_blank">
                {" "}
                <BsInstagram />
              </a>

              <a href="#facebook.com" target="_blank">
                <FaTwitter />
              </a>

              <a href="#facebook.com" target="_blank">
                {" "}
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
