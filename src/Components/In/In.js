import React from "react";
import Row from "react-bootstrap/Row";

const In = ({ addedIn, addedOut }) => {

  const addedAmount = addedIn.reduce((acc, amount)=>{
    return acc + amount;
  })

  const subAmount = addedOut.reduce((acc, amount)=>{
    return acc + amount;
  })

  return (
    <div>
      <Row>
        <h5 className="mt-2">In:</h5>
        <p className="mt-2 ml-2">{addedAmount}</p>
         <h5 className="mt-2 ml-5">Out:</h5>
        <p className="mt-2 ml-2">{subAmount}</p> 
      </Row>
    </div>
  );
};

export default In;
