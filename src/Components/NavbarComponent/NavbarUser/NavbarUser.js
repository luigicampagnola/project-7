import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarUser = () => {
  return (
    <div className='NavbarUser'>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </div>
  );
};

export default NavbarUser;
