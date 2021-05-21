import React from "react";
import "./SignInButton.css";

const SignInButton = ({ onRouteChange }) => {
  return (
    <div>
      <button className="signin-btn" onClick={() => onRouteChange("home")}>
        Sign In
      </button>
    </div>
  );
};

export default SignInButton;
