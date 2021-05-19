import React from "react";
import "./Button.css";
import { ArrowRight } from "react-bootstrap-icons";

const WithdrawalButton = ({ withdrawalClickHandler }) => {
  return (
    <div>
      <div>
        <button className="with-btn" onClick={withdrawalClickHandler}>
          <ArrowRight></ArrowRight>
        </button>
      </div>
    </div>
  );
};

export default WithdrawalButton;
