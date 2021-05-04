import React from "react";
import Row from "react-bootstrap/Row";


const Out = ({ addedOut }) => {

  const subAmount = addedOut.reduce((acc, amount)=>{
    return acc + amount;
  })

  return (
    <div>
      <Row>
        <h5 className="mt-2">Out:</h5>
        <p className="mt-2 ml-2">{addedOut}</p>
      </Row>
    </div>
  );
};

export default Out;
