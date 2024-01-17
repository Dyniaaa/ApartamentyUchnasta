import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <h1>
        <NavLink to={"/"}>Powrót</NavLink>
      </h1>
    );
  }
}

export default NotFound;
