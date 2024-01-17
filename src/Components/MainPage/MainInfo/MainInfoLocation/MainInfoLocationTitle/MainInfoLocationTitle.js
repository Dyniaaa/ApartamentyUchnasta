import React, { Component } from "react";
import "./MainInfoLocationTitle.scss";

class MainInfoLocationTitle extends Component {
  render() {
    return (
      <section className="MainInfoLocationTitle">
        <img src={require("./uzdrowisko.jpg")} alt="Uzdrowisko" />
        <div>
          <p>Location</p>
        </div>
      </section>
    );
  }
}

export default MainInfoLocationTitle;
