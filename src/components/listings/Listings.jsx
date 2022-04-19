import React from "react";
import "./Listings.css";
import { FaIndustry } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdHomeWork } from "react-icons/md";
import { SiOpenstreetmap } from "react-icons/si";

const Listings = () => {
  return (
    <section id="Listings">
      <div className="h2">
        <h5>Our Categories</h5>
        <h2>Explore Our Categories and Places</h2>
      </div>
      <div className="listings">
        <div className="listings-b">
          <h4>
            <FaIndustry />
          </h4>
          <h3>Industrial Properties</h3>
        </div>
        <div className="listings-b">
          <h4>
            <AiFillHome />
          </h4>
          <h3>Residential Properties</h3>
        </div>
        <div className="listings-b">
          <h4>
            <MdHomeWork />
          </h4>
          <h3>Commercial Properties</h3>
        </div>
        <div className="listings-b">
          <h4>
            <SiOpenstreetmap />
          </h4>
          <h3>Land Properties</h3>
        </div>
      </div>
      <div className="listings-location">
        <div className="locations">
          <h4> Cape Town</h4>
          <h3>40 Properties</h3>
        </div>
        <div className="locations">
          <h4>Nairobi</h4>
          <h3>42 Properties</h3>
        </div>
        <div className="locations">
          <h4>Marrakesh</h4>
          <h3>50 Properties</h3>
        </div>
        <div className="locations">
          <h4>Paris</h4>
          <h3>10 Properties</h3>
        </div>

        <div className="locations">
          <h4>New York</h4>
          <h3>60 Properties</h3>
        </div>
        <div className="locations">
          <h4>Los Angeles</h4>
          <h3>50 Properties</h3>
        </div>
        <div className="locations">
          <h4>Tulum</h4>
          <h3>10 Properties</h3>
        </div>
        <div className="locations">
          <h4>Panama City</h4>
          <h3>18 Properties</h3>
        </div>
        <div className="locations">
          <h4>Buenos Aires</h4>
          <h3>30 Properties</h3>
        </div>
        <div className="locations">
          <h4>Nuuk</h4>
          <h3>32 Properties</h3>
        </div>
        <div className="locations">
          <h4>Bora Bora</h4>
          <h3>48 Properties</h3>
        </div>
        <div className="locations">
          <h4>Ottawa</h4>
          <h3>10 Properties</h3>
        </div>
      </div>
    </section>
  );
};

export default Listings;
