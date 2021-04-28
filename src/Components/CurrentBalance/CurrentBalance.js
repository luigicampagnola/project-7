import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const CurrentBalance = ({ CurrentBalance }) => {
  const arrayAmount = CurrentBalance.map((obj) => {
    return obj.Amount;
  });

  const addedAmount = arrayAmount.reduce((acc, amount) => {
    return acc + amount;
  });

  const rounded = Math.round(addedAmount * 100) / 100;

  const toString = rounded + "";

  return (
    <div>
      <Row>
        <Col sm={5}>
          <h3>Current Balance</h3>
        </Col>
        <Col>
          <h2>${toString}</h2>
        </Col>
      </Row>
    </div>
  );
};

export default CurrentBalance;
