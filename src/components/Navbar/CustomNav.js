import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="xl"
        variant="dark"
        style={{ backgroundColor: "#458B7C" }}
      >
        <ReactBootStrap.Navbar.Brand className="ms-2">
          BizTrack
        </ReactBootStrap.Navbar.Brand>

        <ReactBootStrap.Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="me-2"
        />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/employees">
              <ReactBootStrap.Nav.Link href="#features">
                Features
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
