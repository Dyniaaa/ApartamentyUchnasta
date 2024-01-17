import React, { Component } from "react";
import "./MainInfoApartment.scss";
import MainInfoApartmentTitle from "./MainInfoApartmentTitle/MainInfoApartmentTitle";
import MainInfoApartmentInfo from "./MainInfoApartmentInfo/MainInfoApartmentInfo";

class MainInfoApartment extends Component {
  render() {
    return (
      <section className="mainInfoApartment">
        <MainInfoApartmentTitle />
        <MainInfoApartmentInfo />
      </section>
    );
  }
}

export default MainInfoApartment;
