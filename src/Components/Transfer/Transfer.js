import React from "react";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Transfer = () => {
  return (
    <div>
      <Container className="p-3">
        <h4 className="mb-3">Transfer Money</h4>
        <Row>
          <Col className='p-3'>
            <InputGroup size="" className="b-radius">
              <FormControl />
            </InputGroup>
            <div className="App">Transfer to</div>
          </Col>
          <Col className='p-3'>
            <InputGroup size="" className="b-radius">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
            <div className="App">Amount</div>
          </Col>
        </Row>
        <div className='App'>
          <Button variant="light" className=''>Confirm</Button>
        </div>
      </Container>
    </div>
  );
};

export default Transfer;
