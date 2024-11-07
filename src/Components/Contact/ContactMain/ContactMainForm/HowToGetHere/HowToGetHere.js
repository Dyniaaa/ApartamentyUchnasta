import React, { Component } from "react";
import "./HowToGetHere.scss";
import MapWithMarker from "../../../../MainPage/MainInfo/MainInfoLocation/MainInfoLocationMap/MapWithMarker/MapWithMarker";

class HowToGetHere extends Component {
  render() {
    return (
      <section className="howToGetHere">
        <div className="psDiv">
          <p className="howToGetHereTitle">Jak się tu dostać</p>
          <p>28-100, Busko-Zdrój</p>
          <p>ul. Uchnasta 3</p>
          <div>
            <img src={require("./PhoneIcon.jpg")} alt="phoneIcon" />
            <a href="tel:504253973">504 253 973</a>
          </div>
          <div>
            <img src={require("./PhoneIcon.jpg")} alt="phoneIcon" />
            <a href="tel:884875800">884 875 800</a>
          </div>
        </div>
        <div className="contactMapDiv">
          <MapWithMarker />
        </div>
      </section>
    );
  }
}

export default HowToGetHere;
