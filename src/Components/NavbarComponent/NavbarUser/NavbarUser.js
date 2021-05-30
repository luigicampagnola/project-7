import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { DoorOpenFill, GearFill, MoonFill } from "react-bootstrap-icons";

const NavbarUser = ({ onRouteChange, isSignedIn, name }) => {
  if (isSignedIn) {
    return (
      <div className="NavbarUser d-flex nav-user-p">
        <Navbar.Text>
          Signed in as: <a href="#login">{name}</a>
        </Navbar.Text>
        <NavDropdown alignRight>
          <div>
            <NavDropdown.Item className="d-flex">
              <MoonFill className="mt-1 mr-1"></MoonFill>
              <div className="pl-1">Nite Mode</div>
            </NavDropdown.Item>
          </div>
          <div>
            <NavDropdown.Item className="d-flex">
              <GearFill className="mt-1 mr-1"></GearFill>
              <div className="pl-1">Settings</div>
            </NavDropdown.Item>
          </div>
          <NavDropdown.Divider />
          <div>
            <NavDropdown.Item className="d-flex">
              <DoorOpenFill className="mt-1 mr-1"></DoorOpenFill>
              <div className="pl-1" onClick={() => onRouteChange("signout")}>
                Logout
              </div>
            </NavDropdown.Item>
          </div>
        </NavDropdown>
      </div>
    );
  } else {
    return (
      <div className="NavbarUser d-flex mr-2">
        <Navbar.Text>
          <button className="reg-btn mr-2" onClick={() => onRouteChange("signin")}>
            Sign In
          </button>
          <button className="reg-btn" onClick={() => onRouteChange("Register")}>
            Register
          </button>
        </Navbar.Text>
      </div>
    );
  }
};

export default NavbarUser;
