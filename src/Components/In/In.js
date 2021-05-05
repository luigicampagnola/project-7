import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const In = ({ addedIn, addedOut }) => {
  const addedAmount = addedIn.reduce((acc, amount) => {
    return acc + amount;
  });

  const subAmount = addedOut.reduce((acc, amount) => {
    return acc + amount;
  });

  const roundedAddedAmount = Math.round(addedAmount * 100) / 100;


  const roundedSubAmount = Math.round(subAmount * 100) / 100;

  return (
    <div className='ml-2'>
      <Row>
        <Col>
          <Row>
            <div className="mt-1 ml-3 In">In:</div>
            <div className="mt-1 ml-2 In">{roundedAddedAmount}</div>
          </Row>
        </Col>

        <Col>
          <Row>
          <div className="mt-1 ml-3 Out">Out:</div>
            <div className="mt-1 ml-2 Out">{roundedSubAmount}</div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default In;
