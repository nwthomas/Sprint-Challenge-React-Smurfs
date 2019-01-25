import React, { Component } from "react";
import Smurf from "./Smurf";
import "./SmurfList.css";

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
        <h1 className="smurfs__title">Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
