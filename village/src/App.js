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
      shownSmurfs: [],
      message: "",
      searchInput: ""
    };
  }

  getData = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res =>
        this.setState({
          smurfs: res.data,
          shownSmurfs: res.data,
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

  searchSmurfs = () => {
    if (this.state.searchInput) {
      const searched = this.state.shownSmurfs.filter(smurf => {
        if (
          JSON.stringify(smurf.name)
            .toLowerCase()
            .includes(this.state.searchInput.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      this.setState({
        shownSmurfs: searched
      });
    } else {
      this.setState({
        shownSmurfs: this.state.smurfs
      });
    }
  };

  handleSearchChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.searchSmurfs();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <NavbarContainer handleSearchChange={this.handleSearchChange} />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs {...props} smurfs={this.state.shownSmurfs} />
          )}
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
