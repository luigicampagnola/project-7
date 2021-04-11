import React from "react";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Withdrawals = ({ withdrawalsInputHandler, widthClickHandler }) => {
  return (
    <div>
      <Container className="p-3 ml-4">
        <h4 className="mb-3">Cash Withdrawals</h4>
        <Row>
          <Col className="p-3" sm={8}>
            <InputGroup
              size="sm"
              className="b-radius"
              onChange={withdrawalsInputHandler}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
            <div className="App">Amount</div>
          </Col>
          <Col sm={1}>
            <Button
              variant="light"
              className="mt-3"
              onClick={widthClickHandler}
              size="sm"
            >
              &rarr;
            </Button>
          </Col>
        </Row>
        <div className="App"></div>
      </Container>
    </div>
  );
};

export default Withdrawals;
