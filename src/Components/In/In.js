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
    <Container className='mt-3'>
      <Row>
        <Col
          lg={{ span: 3, offset: 1 }}
          xs={{ span: 4, offset: 1 }}
          md={{ span: 3, offset: 2 }}
        >
          <div className="In">In: {roundedAddedAmount}</div>
        </Col>
        <Col
          lg={{ span: 3, offset: 1 }}
          xs={{ span: 4, offset: 3 }}
          md={{ span: 3, offset: 3 }}
        >
          <div className="Out">Out: {roundedSubAmount}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default In;
