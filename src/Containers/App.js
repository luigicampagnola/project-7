import { Component } from "react";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import "./App.css";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import SignIn from "../Components/SignIn/SignIn";

class App extends Component {
  render() {
    return (
      <div className="bg-color">
        <NavbarComponent />
        <SignIn />
        <Register />
        <Home />
      </div>
    );
  }
}

export default App;
