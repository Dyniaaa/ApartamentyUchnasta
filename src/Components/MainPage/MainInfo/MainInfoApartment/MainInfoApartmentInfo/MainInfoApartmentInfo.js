import React, { Component } from "react";
import "./MainInfoApartmentInfo.scss";
import MainInfoApartmentInfoImg from "./MainInfoApartmentInfoImg/MainInfoApartmentInfoImg";
import MainInfoApartmentInfoText from "./MainInfoApartmentInfoText/MainInfoApartmentInfoText";

class MainInfoApartmentInfo extends Component {
  render() {
    return (
      <div className="mainInfoApartmentInfo">
        <MainInfoApartmentInfoImg />
        <MainInfoApartmentInfoText />
      </div>
    );
  }
}

export default MainInfoApartmentInfo;
