import { Component } from "react";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import "./App.css";
import Home from "../Components/Home/Home";
import Signup from "../Components/Signup/Signup";

class App extends Component {
  render() {
    return (
      <div className="bg-color">
        <NavbarComponent />
        <Signup />
        <Home />
      </div>
    );
  }
}

export default App;
