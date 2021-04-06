import React, { Component } from "react";
import "./Home.css";
import Transfer from "../Transfer/Transfer";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Loans from "../Loans/Loans";
import Close from "../Close/Close";
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import Transactions from "../Transactions/Transactions";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="">home</h1>
        <div className="">
          <div className="mt-5">
            <Container>
              <CurrentBalance />
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
        </div>
      </div>
    );
  }
}

export default Home;
