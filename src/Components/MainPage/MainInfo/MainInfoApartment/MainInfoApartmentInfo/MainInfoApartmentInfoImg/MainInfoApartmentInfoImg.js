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
            src={require("./IMG_0490.jpg")}
            alt="Apartment"
          />
          <img
            className="app-img-second"
            src={require("./IMG_0374.jpg")}
            alt="Apartment"
          />
        </section>
      </Fade>
    );
  }
}

export default MainInfoApartmentInfoImg;
