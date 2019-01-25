import React from "react";
import { Link } from "react-router-dom";
import "./SmurfList.css";

const Smurf = props => {
  const { id, name, height, age } = props;
  return (
    <div className="smurf">
      <h3 className="smurf__name">{name}</h3>
      <strong className="smurf__height">{height} tall</strong>
      <p className="smurf__age">{age} smurf years old</p>
      <div className="smurf__buttons">
        <Link to="/smurf-form">
          <button
            onClick={() => props.modifySmurf(id)}
            className="btn modify"
            name="modify"
          >
            Modify
          </button>
        </Link>
        <button
          onClick={() => props.deleteSmurf(id)}
          className="btn delete"
          name="modify"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
