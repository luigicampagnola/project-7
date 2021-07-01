import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CurrencyDollar } from "react-bootstrap-icons";

const CurrentBalance = ({ movementsTable }) => {
  const arrayAmount = movementsTable.map((obj) => {
    return Number(obj.amount);
  });

  const addedAmount = arrayAmount.reduce((acc, amount) => {
    return acc + amount;
  });

  const rounded = Math.round(addedAmount * 100) / 100;

  const toString = rounded + "";

  return (
    <div className="Current">
      <Container>
        <Row>
          <Col
            className="mt-5 mb-3"
            lg={{ span: 3, offset: 1 }}
            xs={{ span: 3, offset: 1 }}
          >
            <div className="">Current Balance</div>
          </Col>
          <Col
            className="mt-5 mb-3"
            lg={{ span: 1, offset: 1 }}
            xs={{ span: 3, offset: 4 }}
          >
            <CurrencyDollar className="mb-1" />
            {toString}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CurrentBalance;
