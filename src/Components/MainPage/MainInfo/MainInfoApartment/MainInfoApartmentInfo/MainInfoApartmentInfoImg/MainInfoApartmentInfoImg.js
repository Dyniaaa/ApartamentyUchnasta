import React, { Component } from "react";
import "./MainInfoApartmentInfoImg.scss";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

class MainInfoApartmentInfoImg extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fade delay="20" direction="up" triggerOnce>
        <section className="mainInfoApartmentInfoImg">
          <div className="ourApartment">
            <p>{t("apartments.ourApartments")}</p>
            <p>{t("apartments.ourApartmentsDesc")}</p>
          </div>

          <img
            className="app-img"
            src={require("./IMG_0490.jpg")}
            alt="Apartment"
            loading="lazy"
            decoding="async"
          />
          <img
            className="app-img-second"
            src={require("./IMG_0374.jpg")}
            alt="Apartment"
            loading="lazy"
            decoding="async"
          />
        </section>
      </Fade>
    );
  }
}

export default withTranslation()(MainInfoApartmentInfoImg);
