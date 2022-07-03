import React from "react";
import "./Top.css";

import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Top = () => {
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" bg="#020c1b" variant="dark">
        <Container>
          <Navbar.Brand href="#Home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div className="nav-items">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Home">
                  <h6>Home</h6>
                </Nav.Link>
                <Nav.Link href="#About">
                  <h6>About</h6>
                </Nav.Link>
                <Nav.Link href="#Agents">
                  <h6>Agents</h6>
                </Nav.Link>
                <Nav.Link href="#Blogs">
                  <h6>Blogs</h6>
                </Nav.Link>
                <Nav.Link href="#Reviews">
                  <h6>Reviews</h6>
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
