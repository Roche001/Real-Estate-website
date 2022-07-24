import React from "react";
import "./Top.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Top = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="yellow"
      variant=""
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Agents">Agents</Nav.Link>
            <Nav.Link href="#Blogs">Blogs</Nav.Link>
            <Nav.Link href="#Reviews">Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;
