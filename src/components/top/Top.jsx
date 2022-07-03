import React from "react";
import "./Top.css";
import { BsBuilding } from "react-icons/bs";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Top = () => {
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" bg="#020c1b" variant="dark">
        <Container>
          <Navbar.Brand href="#Header">
            <a href="#Home" className="office">
              <h3 className="pharolix">
                {" "}
                <BsBuilding />
                Pharolix
              </h3>
              <small className="agency">Real Estate Agency</small>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div className="nav-items">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Header">
                  <h6>Home</h6>
                </Nav.Link>
                <Nav.Link href="#About">
                  <h6>About</h6>
                </Nav.Link>
                <Nav.Link href="#Experience">
                  <h6>Experience</h6>
                </Nav.Link>
                <Nav.Link href="#Portfolio">
                  <h6>Portfolio</h6>
                </Nav.Link>
                <Nav.Link href="#Contacts">
                  <h6>Contacts</h6>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </section>
  );
};

export default Top;
