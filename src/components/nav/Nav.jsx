import React from "react";
import "./Nav.css";
import { BsBuilding } from "react-icons/bs";

const Nav = () => {
  return (
    <section>
      <nav>
        <a href="#" className="office">
          <h3 className="pharolix">
            {" "}
            <BsBuilding />
            Pharolix
          </h3>
          <small className="agency">Real Estate Agency</small>
        </a>
        <div className="navbar">
          <a href="#About"> About</a>
          <a href="#Agents">Agents</a>
          <a href="#Blogs">Blogs</a>
          <a href="#Reviews">Reviews</a>
          <a href="#Contacts">Contacts</a>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
