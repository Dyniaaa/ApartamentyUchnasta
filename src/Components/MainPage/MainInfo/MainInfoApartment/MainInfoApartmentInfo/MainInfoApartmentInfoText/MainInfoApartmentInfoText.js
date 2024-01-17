import React, { Component } from "react";
import "./MainInfoApartmentInfoText.scss";

class MainInfoApartmentInfoText extends Component {
  render() {
    return (
      <section className="mainInfoApartmentInfoText">
        <img src={require("./Sypialania-Photo.webp")} alt="Apartment" />
        <div>
          <p>
            The apartment is spacious with high ceilings, large windows, an open
            balcony and a beautiful view of the beach. Stay cool with central
            A/C and wind-down comfortably in the queen sized bedroom.
          </p>
        </div>
      </section>
    );
  }
}

export default MainInfoApartmentInfoText;
