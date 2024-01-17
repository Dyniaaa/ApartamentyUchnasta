import React, { Component } from "react";
import "./MainInfoApartmentInfoImg.scss";
class MainInfoApartmentInfoImg extends Component {
  render() {
    return (
      <section className="mainInfoApartmentInfoImg">
        <div className="ourApartment">
          <p>Our Apartment</p>
        </div>
        <img src={require("./Apartment-photo.webp")} alt="Apartment" />
      </section>
    );
  }
}

export default MainInfoApartmentInfoImg;
