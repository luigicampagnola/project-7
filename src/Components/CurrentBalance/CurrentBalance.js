import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { CurrencyDollar } from "react-bootstrap-icons";


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
          <div className="Current mb-2">Current Balance</div>
        </Col>
        <Col>
          <div className="Current d-flex">
            <CurrencyDollar className="mt-2"/>
            {toString}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CurrentBalance;
