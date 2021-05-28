import React from "react";
import "./RegisterButton.css";

const RegisterButton = ({ onSubmitRegister }) => {
  return (
    <div className="pt-2 pb-2">
      <button className="button" onClick={onSubmitRegister}>
        Submit
      </button>
    </div>
  );
};

export default RegisterButton;
