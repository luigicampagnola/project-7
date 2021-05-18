import React from "react";
import { Navbar } from "react-bootstrap";

const Start = () => {
  return (
    <div className='Start'>
{/*       <Navbar.Text>Log in to get started</Navbar.Text>
 */}      <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
    </div>
  );
};

export default Start;
