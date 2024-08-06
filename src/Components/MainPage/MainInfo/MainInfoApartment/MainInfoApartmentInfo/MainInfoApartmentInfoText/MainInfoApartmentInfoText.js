import React, { Component } from "react";
import "./MainInfoApartmentInfoText.scss";

class MainInfoApartmentInfoText extends Component {
  render() {
    return (
      <section className="mainInfoApartmentInfoText">
        <img src={require("./6.Kuchnia1.jpg")} alt="Apartment" />
        <div>
          <p>
            Oferujemy w pełni wyposażone apartamenty w Busku-Zdroju, blisko
            tężni solankowych, z dostępem do naszego zielonego podwórka i
            parkingu.
          </p>
        </div>
      </section>
    );
  }
}

export default MainInfoApartmentInfoText;
