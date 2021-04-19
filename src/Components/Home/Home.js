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
import CurrentTime from "../CurrentTime/CurrentTime";
import { Money } from "../Money/Money";
import TestButton from "../TestButton/TestButton";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      Money: Money,
      CurrentBalance: 0,
      WithdrawalsAmount: "0",
      DepositsAmount: "0",
    };
  }

  //Create a function

  withdrawalClickHandler = () => {
    const Now = new Date();
    const Day = `${Now.getDate()}`.padStart(2, 0);
    const Month = `${Now.getMonth() + 1}`.padStart(2, 0);
    const Year = Now.getFullYear();
    const Hour = Now.getHours();
    const Minutes = `${Now.getMinutes()}`.padStart(2, 0);
    this.setState({
      Money: [
        ...this.state.Money,
        {
          Type: "Withdraw",
          Date: `${Month}/${Day}/${Year} at ${Hour}:${Minutes}`,
          Amount: "-" + this.state.WithdrawalsAmount,
        },
      ],
    });
    console.log(this.state.CurrentBalance);

    /*     console.log(this.state.Money);
     */
  };

  depositClickHandler = () => {
    const Now = new Date();
    const Day = `${Now.getDate()}`.padStart(2, 0);
    const Month = `${Now.getMonth() + 1}`.padStart(2, 0);
    const Year = Now.getFullYear();
    const Hour = Now.getHours();
    const Minutes = `${Now.getMinutes()}`.padStart(2, 0);
    this.setState({
      Money: [
        ...this.state.Money,
        {
          Type: "Deposit",
          Date: `${Month}/${Day}/${Year} at ${Hour}:${Minutes}`,
          Amount: this.state.DepositsAmount,
        },
      ],
    });
    /*     this.setState({ CurrentBalance: this.state.DepositsAmount })
     */
  };

  testButtonHandler = () => {
    console.log(this.state.Money);
  };

  deleteClickHandler = () => {};

  withdrawalsInputHandler = (event) => {
    this.setState({ WithdrawalsAmount: event.target.value });
  };

  depositInputHandler = (event) => {
    this.setState({ DepositsAmount: event.target.value });
  };

  deleteInputHandler = (event) => {
    console.log(event.target.value);
  };

  render() {
    /*     const addWithdrawal = this.state.Money.push(this.state.Withdrawal);
     */ return (
      <div>
        <h1 className="">home</h1>
        <div className="">
          <div className="mt-5">
            <Container>
              <CurrentBalance CurrentBalance={this.state.Money} />
              <CurrentTime className="mb-1" />
              <Row>
                <Col sm={7}>
                  <TableComponent Money={this.state.Money} />
                </Col>
                <Col sm={5}>
                  <div className="transaction-color">
                    <Withdrawals
                      withdrawalsInputHandler={this.withdrawalsInputHandler}
                      withdrawalClickHandler={this.withdrawalClickHandler}
                      className="bg-warning shadow-1-strong"
                    />
                  </div>
                  <div className="mt-2 loan-color">
                    <Deposits
                      depositInputHandler={this.depositInputHandler}
                      depositClickHandler={this.depositClickHandler}
                    />
                  </div>
                  <div className="mt-2 close-color">
                    <Close
                      deleteInputHandler={this.deleteInputHandler}
                      deleteClickHandler={this.deleteClickHandler}
                    />
                  </div>
                </Col>
              </Row>
              <TestButton testButtonHandler={this.testButtonHandler} />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
