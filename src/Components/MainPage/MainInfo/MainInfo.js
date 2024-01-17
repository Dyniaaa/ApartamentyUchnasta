import React, { Component } from "react";
import "./MainInfo.scss";
import MainInfoApartment from "./MainInfoApartment/MainInfoApartment";
import MainInfoLocation from "./MainInfoLocation/MainInfoLocation";

class MainInfo extends Component {
  render() {
    return (
      <section className="mainInfo">
        <MainInfoApartment />
        <MainInfoLocation />
      </section>
    );
  }
}

export default MainInfo;
