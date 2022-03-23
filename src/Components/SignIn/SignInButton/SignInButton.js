import React from "react";
import "./SignInButton.css";

const SignInButton = ({ onSubmitSignIn }) => {
  return (
    <div>
      <button className="signin-btn" onClick={onSubmitSignIn}>
        Sign in
      </button>
    </div>
  );
};

export default SignInButton;
