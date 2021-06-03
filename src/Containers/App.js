import { Component } from "react";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import "./App.css";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import SignIn from "../Components/SignIn/SignIn";

class App extends Component {
  constructor() {
    super();
    this.state = {
      WithdrawalsAmount: [],
      DepositsAmount: [],
      addedIn: [0],
      addedOut: [0],
      route: "signin",
      isSignedIn: false,
      movementsTable: [
        {
          id: 2,
          Type: "",
          Date: "",
          Amount: 0,
        },
      ],
      user: {
        id: "",
        name: "",
        email: "",
        joined: new Date(),
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
      },
    });
  };

  loadTransactions = () => {
    console.log("hi, loading transactions..");
    fetch("http://localhost:3000/loadedTransactions", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((move, i) => {
          this.setState({
            movementsTable: [
              ...this.state.movementsTable,
              {
                id: data[i].id,
                Type: data[i].Type,
                Date: data[i].Date,
                Amount: data[i].Amount,
              },
            ],
          });
          if (data[i].Type === "Deposit") {
            this.setDepoAmount(data[i].Amount);
          } else {
            this.setWithAmount(data[i].Amount);
          }
        });
      })
      .catch((err) => console.log("error catching movements"));
  };

  setDepoAmount = (data) => {
    this.setState({ addedIn: [...this.state.addedIn, data] });
    console.log(this.state.addedIn);
  };

  setWithAmount = (data) => {
    this.setState({ addedOut: [...this.state.addedOut, data] });
    console.log(this.state.addedOut);
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
      movementsTable: [
        ...this.state.movementsTable,
        {
          id: 54,
          Type: "Withdrawal",
          Date: this.timeHandler(),
          Amount: 0 - this.state.WithdrawalsAmount,
        },
      ],
    });
    this.setState({
      addedOut: [...this.state.addedOut, this.state.WithdrawalsAmount],
    });

    fetch("http://localhost:3000/transactions", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
        movements: this.state.movementsTable,
      }),
    }).then((response) => response.json());
  };

  depositClickHandler = () => {
    this.setState({
      movementsTable: [
        ...this.state.movementsTable,
        {
          id: 100,
          Type: "Deposit",
          Date: this.timeHandler(),
          Amount: this.state.DepositsAmount,
        },
      ],
    });
    this.setState({
      addedIn: [...this.state.addedIn, this.state.DepositsAmount],
    });

    fetch("http://localhost:3000/transactions", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.user.id,
        movements: this.state.movementsTable,
      }),
    }).then((response) => {
      response.json();
    });
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
    console.log("click");
  };
  render() {
    return (
      <div>
        <NavbarComponent
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
          name={this.state.user.name}
        />
        {this.state.route === "home" ? (
          <Home
            movementsTable={this.state.movementsTable}
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
          <SignIn
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
            loadTransactions={this.loadTransactions}
          />
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
