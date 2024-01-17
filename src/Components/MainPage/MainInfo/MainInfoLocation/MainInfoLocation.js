import React, { Component } from "react";
import "./MainInfoLocation.scss";
import MainInfoLocationTitle from "./MainInfoLocationTitle/MainInfoLocationTitle";
import MainInfoLocationMap from "./MainInfoLocationMap/MainInfoLocationMap";

class MainInfoLocation extends Component {
  render() {
    return (
      <section className="mainInfoLocation">
        <MainInfoLocationTitle />
        <MainInfoLocationMap />
      </section>
    );
  }
}

export default MainInfoLocation;
