import React from "react";
import { NavDropdown } from "react-bootstrap";

const DropdownMenu = () => {
  return (
    <div className="justify-content-end">
      <div className=''>
        <NavDropdown title="Menu" id="navbarScrollingDropdown" className=''>
          <NavDropdown.Item>Account</NavDropdown.Item>
          <NavDropdown.Item>Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Sign Out</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
};

export default DropdownMenu;
