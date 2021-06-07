import React from "react";
import { Navbar } from "react-bootstrap";
import logo from '../logo.png';

const TitleNav = () => {
  return (
    <Navbar.Brand>
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inlineblock align-top"
      />{' '}
       Aumes
    </Navbar.Brand>
  );
};

export default TitleNav;
