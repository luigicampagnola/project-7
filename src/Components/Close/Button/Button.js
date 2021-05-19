import React from "react";
import "./Button.css";

const DeleteButton = ({ deleteClickHandler }) => {
  return (
    <div className="mr-4">
      <button className="delete-btn" onClick={deleteClickHandler}>Submit</button>
    </div>
  );
};

export default DeleteButton;
