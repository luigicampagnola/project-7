import React from "react";
import Transactions from "../Transactions/Transactions";
import "./Home.css";
import Transfer from "../Transfer/Transfer";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Loans from "../Loans/Loans";

const Home = () => {
  return (
    <div>
      <h1 className="">home</h1>
      <div className="">
        <h2 className="current-balance">Current Balance</h2>
        <Container>
          <Row>
            <Col sm={8}>
              <Transactions />
            </Col>
            <Col sm={4}>
              <Transfer className="bg-warning shadow-1-strong" />
            </Col>
            <Col sm={4}>
              <Loans />
            </Col>
          </Row>
        </Container>
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
