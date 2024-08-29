import React, { Component } from "react";
import "./MainInfoApartmentInfoImg.scss";
import { Fade } from "react-awesome-reveal";

class MainInfoApartmentInfoImg extends Component {
  render() {
    return (
      <Fade delay="20" direction="up" triggerOnce>
        <section className="mainInfoApartmentInfoImg">
          <div className="ourApartment">
            <p>Nasze Apartmenty</p>
            <p>
              {" "}
              Oferujemy w pełni wyposażone apartamenty w Busku-Zdroju, blisko
              tężni solankowych, z dostępem do naszego zielonego podwórka, grilla i
              parkingu.
            </p>
          </div>

          <img
            className="app-img"
            src={require("./4.Salon1.jpg")}
            alt="Apartment"
          />
          <img
            className="app-img-second"
            src={require("./6.Kuchnia1.jpg")}
            alt="Apartment"
          />
        </section>
      </Fade>
    );
  }
}

export default MainInfoApartmentInfoImg;
