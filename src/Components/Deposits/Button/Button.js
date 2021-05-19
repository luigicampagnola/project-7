import React from "react";
import "./Button.css";
import { ArrowRight } from "react-bootstrap-icons";

const DepositButton = ({ depositClickHandler }) => {
  return (
    <div>
      <div>
        <button className="depo-btn" onClick={depositClickHandler}>
          <ArrowRight></ArrowRight>
        </button>
      </div>
    </div>
  );
};

export default DepositButton;
