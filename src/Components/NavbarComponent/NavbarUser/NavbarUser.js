import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { DoorOpenFill, GearFill, MoonFill } from "react-bootstrap-icons";

const NavbarUser = () => {
  return (
    <div className="NavbarUser d-flex">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
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
            <div className="pl-1">Logout</div>
            </NavDropdown.Item>
        </div>
      </NavDropdown>
    </div>
  );
};

export default NavbarUser;
