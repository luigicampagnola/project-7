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
      <Container className="p-3 ml-4">
        <h4 className="mb-3">Cash Deposits</h4>
        <Row>
          <Col className="p-3" sm={8}>
            <InputGroup
              size="sm"
              className="b-radius"
              onChange={depositInputHandler}
            >
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Amount (to the nearest dollar)"
                className=""
              />
            </InputGroup>
            <div className="App">Amount</div>
          </Col>
          <Col sm={1}>
            <Button variant="light" className="mt-3" onClick={depoClickHandler} size='sm'>
            &rarr;  
            </Button>
          </Col>
        </Row>
        <div className="App"></div>
      </Container>
    </div>
  );
};

export default Deposits;
