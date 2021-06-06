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
          type: "Deposit",
          date: "",
          amount: "",
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
        email: this.state.user.email,
      }),
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((data) => {
        console.log(data);
        data.forEach((move, i) => {
          this.setState({
            movementsTable: [
              ...this.state.movementsTable,
              {
                id: data[i].id,
                type: data[i].type,
                date: data[i].date,
                amount: data[i].amount,
              },
            ],
          });
          if (data[i].type === "Deposit") {
            this.setDepoAmount(data[i].amount);
          } else {
            this.setWithAmount(data[i].amount);
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
          type: "Withdrawal",
          date: this.timeHandler(),
          amount: 0 - this.state.WithdrawalsAmount,
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
        type: "Withdrawal",
        date: this.timeHandler(),
        amount: this.state.WithdrawalsAmount,
      }),
    }).then((response) => response.json());
  };

  /*   depositClickHandler =() =>{
    fetch("http://localhost:3000/transactions", {
      method: "put",
      headers: { "Content-Type": "application/json"}
    })
  } */

  depositClickHandler = () => {
    this.setState({
      movementsTable: [
        ...this.state.movementsTable,
        {
          id: 100,
          type: "Deposit",
          date: this.timeHandler(),
          amount: this.state.DepositsAmount,
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
        email: this.state.user.email,
        id: this.state.user.id,
        type: "Deposit",
        date: this.timeHandler(),
        amount: this.state.DepositsAmount,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((data) => {
        console.log(data);
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
    console.log(this.state.movementsTable);
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
