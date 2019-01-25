import React, { Component } from "react";
import axios from "axios";
import "./SmurfForm.css";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(res =>
        this.setState(
          {
            name: "",
            age: "",
            height: "",
            message: res.statusText
          },
          () => {
            this.props.getData(); // Initiates call to server from App.js to update data on screen
            this.props.history.push("/"); // Routes back to home
          }
        )
      )
      .catch(err =>
        this.setState({
          message: err.statusText
        })
      );
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearForm = () => {
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div className="form__container">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <div className="button__container">
            <button className="btn" type="submit">
              Add to the village
            </button>
            <button className="btn" type="button" onClick={this.clearForm}>
              Clear form
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
