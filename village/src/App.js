import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfFormComponent/SmurfForm";
import Smurfs from "./components/SmurfsListComponent/Smurfs";
import NavbarContainer from "./components/NavBarComponent/NavbarContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      message: ""
    };
  }

  getData = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res =>
        this.setState({
          smurfs: res.data,
          message: res.statusText
        })
      )
      .catch(err =>
        this.setState({
          message: err.statusText
        })
      );
  };

  componentDidMount() {
    this.getData();
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} getData={this.getData} />}
        />
      </div>
    );
  }
}

export default App;
