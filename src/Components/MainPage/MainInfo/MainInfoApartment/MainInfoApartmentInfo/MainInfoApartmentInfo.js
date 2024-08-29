import React, { Component } from "react";
import "./MainInfoApartmentInfo.scss";
import MainInfoApartmentInfoImg from "./MainInfoApartmentInfoImg/MainInfoApartmentInfoImg";
import MainInfoApartmentInfoTile from "./MainInfoApartmentInfoText/MainInfoApartmentInfoTile";

class MainInfoApartmentInfo extends Component {
  render() {
    return (
      <div className="mainInfoApartmentInfo">
        <MainInfoApartmentInfoImg />
        <MainInfoApartmentInfoTile />
      </div>
    );
  }
}

export default MainInfoApartmentInfo;
