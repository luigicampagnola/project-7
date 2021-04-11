import React from "react";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Deposits = ({ depositInputHandler, depoClickHandler }) => {
  return (
    <div>
      <Container className="p-3">
        <h4 className="mb-3">Cash Deposits</h4>
        <Row>
          <Col className="p-3">
            <InputGroup
              size=""
              className="b-radius"
              onChange={depositInputHandler}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
            <div className="App">Amount</div>
          </Col>
        </Row>
        <div className="App">
          <Button variant="light" className="mt-2" onClick={depoClickHandler}>
            Confirm
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Deposits;
