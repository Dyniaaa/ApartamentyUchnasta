import React, { Component } from "react";
import "./MainInfoLocationTitle.scss";

class MainInfoLocationTitle extends Component {
  render() {
    return (
      <section className="MainInfoLocationTitle">
        <div>
          <p>BUSKO - ZDRÓJ</p>
        </div>
        <img src={require("./uzdrowisko.jpg")} alt="Uzdrowisko" />
        
      </section>
    );
  }
}

export default MainInfoLocationTitle;
