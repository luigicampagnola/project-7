import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";

const NavbarUser = () => {
  return (
    <div className="NavbarUser d-flex">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
        <NavDropdown alignRight>
          <NavDropdown.Item>Action</NavDropdown.Item>
          <NavDropdown.Item>Action</NavDropdown.Item>
        </NavDropdown>
    </div>
  );
};

export default NavbarUser;
