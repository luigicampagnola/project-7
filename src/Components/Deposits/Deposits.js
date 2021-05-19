import React from "react";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DepositButton from "./Button/Button";
import { CurrencyDollar } from "react-bootstrap-icons";

const Deposits = ({ depositInputHandler, depositClickHandler }) => {
  return (
    <div>
      <Container className="p-3 ml-4">
        <div className="mb-3 component-title">Cash Deposits</div>
        <Row>
          <Col className="p-3" sm={8}>
            <InputGroup
              size="sm"
              className="b-radius"
              onChange={depositInputHandler}
              id="depoInput"
            >
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <CurrencyDollar />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Amount (to the nearest dollar)"
                className=""
              />
            </InputGroup>
            <div className="App">Amount</div>
          </Col>
          <Col>
            <DepositButton />
          </Col>
        </Row>
        <div className="App"></div>
      </Container>
    </div>
  );
};

export default Deposits;
