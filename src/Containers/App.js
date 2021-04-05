import { Component } from "react";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import "./App.css";
import Home from '../Components/Home/Home';


class App extends Component {
  render() {
    return (
      <div className="bg-color">
        <NavbarComponent />
        <Home />
      </div>
    );
  }
}

export default App;
