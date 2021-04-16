import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const CurrentBalance = ({ CurrentBalance }) => {
  const Balance = CurrentBalance.map((mon) => {
    return `${mon.Amount}`;
  });
  return (
    <div>
      <Row>
        <Col sm={5}>
          <h3>Current Balance</h3>
        </Col>
        <Col>
          <h2>{Balance}</h2>
        </Col>
      </Row>
    </div>
  );
};

export default CurrentBalance;
