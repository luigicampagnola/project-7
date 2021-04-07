import React, { Component } from "react";
import "./Home.css";
import Withdrawals from "../Withdrawals/Withdrawals";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Deposits from "../Deposits/Deposits";
import Close from "../Close/Close";
import CurrentBalance from "../CurrentBalance/CurrentBalance";
import TableComponent from "../Table/TableComponent";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Withdrawals: "",
      Deposits: "",
    };
  }

  withdrawalsInputHandler = (event) => {
    this.setState({ Withdrawals: event.target.value })
    console.log(event.target.value) 
  };

  depositInputHandler = (event) => {
    console.log(event.target.value);
  }

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
                  <TableComponent />
                </Col>
                <Col sm={5}>
                  <div className="transaction-color">
                    <Withdrawals withdrawalsInputHandler={this.withdrawalsInputHandler} className="bg-warning shadow-1-strong" />
                  </div>
                  <div className="mt-3 loan-color">
                    <Deposits depositInputHandler={this.depositInputHandler}/>
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
