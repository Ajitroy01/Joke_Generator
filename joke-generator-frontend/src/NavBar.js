import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css"; // Create this CSS file

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Joke Generator</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default NavBar;
