import React, { Component } from "react";
import "./MainInfoApartmentInfoImg.scss";
class MainInfoApartmentInfoImg extends Component {
  render() {
    return (
      <section className="mainInfoApartmentInfoImg">
        <div className="ourApartment">
          <p>Nasze Apartmenty</p>
        </div>
        <img src={require("./4.Salon1.jpg")} alt="Apartment" />
      </section>
    );
  }
}

export default MainInfoApartmentInfoImg;
