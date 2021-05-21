import React from "react";
import "./RegisterButton.css";

const RegisterButton = ({ onRouteChange }) => {
  return (
    <div className="pt-2 pb-2">
      <button className="button" onClick={() => onRouteChange("home")}>
        Submit
      </button>
    </div>
  );
};

export default RegisterButton;
