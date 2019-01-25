import React from "react";
import "./SmurfList.css";

const Smurf = props => {
  return (
    <div className="smurf">
      <h3 className="smurf__name">{props.name}</h3>
      <strong className="smurf__height">{props.height} tall</strong>
      <p className="smurf__age">{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
