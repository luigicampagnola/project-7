import { Component } from "react";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import "./App.css";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import SignIn from "../Components/SignIn/SignIn";
import { Money } from "../Components/Money/Money";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Money: Money,
      CurrentBalance: 0,
      WithdrawalsAmount: 0,
      DepositsAmount: [],
      addedIn: [0],
      addedOut: [0],
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        joined: new Date(),
        transactions: {
          movements: [
            {
              id: 0,
              Type: "",
              Date: "",
              Amount: 0,
            },
          ],
        },
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: new Date(),
        transactions: {
          movements: [
            {
              id: data.transactions.movements.id,
              Type: data.transactions.movements.Type,
              Date: data.transactions.movements.Date,
              Amount: data.transactions.movements.Amount,
            },
          ],
        },
      },
    });
  };

  //routing
  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  //Date and Time function
  timeHandler = () => {
    const Now = new Date();
    const Day = `${Now.getDate()}`.padStart(2, 0);
    const Month = `${Now.getMonth() + 1}`.padStart(2, 0);
    const Year = Now.getFullYear();
    const Hour = Now.getHours();
    const Minutes = `${Now.getMinutes()}`.padStart(2, 0);
    return `${Month}/${Day}/${Year} at ${Hour}:${Minutes}`;
  };

  //CLICK HANDLERS

  withdrawalClickHandler = () => {
    this.setState({
      Money: [
        ...this.state.Money,
        {
          Type: "Withdraw",
          Date: this.timeHandler(),
          Amount: 0 - this.state.WithdrawalsAmount,
        },
      ],
    });
    this.setState({
      addedOut: [...this.state.addedOut, this.state.WithdrawalsAmount],
    });
  };

  depositClickHandler = () => {
    this.setState({
      Money: [
        ...this.state.Money,
        {
          Type: "Deposit",
          Date: this.timeHandler(),
          Amount: this.state.DepositsAmount,
        },
      ],
    });
    this.setState({
      addedIn: [...this.state.addedIn, this.state.DepositsAmount],
    });
    /*     fetch("http://localhost:3000/transactions", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.props.id,
      }),
    }) */
  };

  //INPUT HANDLERS

  withdrawalsInputHandler = (event) => {
    this.setState({ WithdrawalsAmount: Number(event.target.value) });
  };

  depositInputHandler = (event) => {
    this.setState({ DepositsAmount: Number(event.target.value) });
  };
  deleteClickHandler = () => {
    console.log("click");
  };

  deleteInputHandler = (event) => {
    console.log(event.target.value);
  };
  testClickHandler = () => {
    console.log(this.state.user);
  };
  render() {
    return (
      <div>
        <NavbarComponent
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        {this.state.route === "home" ? (
          <Home
            Money={this.state.Money}
            transactions={this.state.user.transactions}
            deleteInputHandler={this.deleteInputHandler}
            deleteClickHandler={this.deleteClickHandler}
            withdrawalClickHandler={this.withdrawalClickHandler}
            depositClickHandler={this.depositClickHandler}
            withdrawalsInputHandler={this.withdrawalsInputHandler}
            depositInputHandler={this.depositInputHandler}
            addedOut={this.state.addedOut}
            addedIn={this.state.addedIn}
            testClickHandler={this.testClickHandler}
          />
        ) : this.state.route === "signin" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
