import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import TitleNav from "./TitleNav/TitleNav";
import NavbarUser from "./NavbarUser/NavbarUser";

const NavbarComponent = ({ onRouteChange, isSignedIn }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <TitleNav />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavbarUser onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
