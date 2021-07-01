import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const In = ({ addedIn, addedOut }) => {
  const addedAmount = addedIn.reduce((acc, amount) => {
    const zero = Number(acc);
    const num = Number(amount);
    return zero + num;
  });

  const subAmount = addedOut.reduce((acc, amount) => {
    return acc - amount;
  });

  const roundedAddedAmount = Math.round(addedAmount * 100) / 100;

  const roundedSubAmount = Math.round(subAmount * 100) / 100;

  return (
    <Container>
      <Row>
        <Col
          lg={{ span: 1, offset: 1 }}
          xs={{ span: 3, offset: 1 }}
          md={{ span: 3, offset: 2 }}
        >
          <div className="mt-1 ml-3 In">In: {roundedAddedAmount}</div>
        </Col>
        <Col
          lg={{ span: 1, offset: 3 }}
          xs={{ span: 3, offset: 4 }}
          md={{ span: 3, offset: 3 }}
        >
          <div className="mt-1 ml-3 Out">Out: {roundedSubAmount}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default In;
