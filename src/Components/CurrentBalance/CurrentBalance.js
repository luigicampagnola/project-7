import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const CurrentBalance = ({ CurrentBalance }) => {
  const arrayAmount = CurrentBalance.map((obj) => {
    return obj.Amount;
  });

  const arrayOfNumbers = arrayAmount.map((num) => {
    return Number(num);
  });

  const addedAmount = arrayOfNumbers.reduce((acc, num) => {
    return acc + num;
  });

  const toString = addedAmount + "";

  /*   const Balance = CurrentBalance.map((mon) => {
    return `${mon.Amount}`;
  }); */
  return (
    <div>
      <Row>
        <Col sm={5}>
          <h3>Current Balance</h3>
        </Col>
        <Col>
          <h2>{toString}</h2>
        </Col>
      </Row>
    </div>
  );
};

export default CurrentBalance;
