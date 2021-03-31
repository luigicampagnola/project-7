import React from "react";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Transfer = () => {
  return (
    <div>
      <Container>
        <h4 className="mb-3">Transfer Money</h4>
        <Row>
          <Col>
            <InputGroup size="sm" className="">
              <FormControl />
            </InputGroup>
            <div className="App">Transfer to</div>
          </Col>
          <Col>
            <InputGroup size="sm" className="">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
            <div className="App">Amount</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Transfer;
