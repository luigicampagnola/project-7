import React from "react";
import Transactions from "../Transactions/Transactions";
import "./Home.css";
import Transfer from "../Transfer/Transfer";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Loans from "../Loans/Loans";
import Close from "../Close/Close";

const Home = () => {
  return (
    <div>
      <h1 className="">home</h1>
      <div className="">
        <div className="mt-5">
          <Container>
            <h2>Current Balance</h2>
            <Row>
              <Col sm={7}>
                <Transactions />
              </Col>
              <Col sm={5}>
                <div className="transaction-color">
                  <Transfer className="bg-warning shadow-1-strong" />
                </div>
                <div className="mt-3 loan-color">
                  <Loans />
                </div>
                <div className="mt-3 close-color">
                  <Close />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <p>Date and Time</p>
        <p>Transaction component</p>
        <p>Transfer Money Component</p>
        <p>Request Loan Component</p>
        <p>Close Account Component</p>
        <p>Calculation component </p>
      </div>
    </div>
  );
};

export default Home;
