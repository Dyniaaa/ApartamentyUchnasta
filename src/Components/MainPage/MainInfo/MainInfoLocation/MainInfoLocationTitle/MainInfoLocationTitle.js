import React, { Component } from "react";
import "./MainInfoLocationTitle.scss";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
class MainInfoLocationTitle extends Component {
  render() {
    const { t } = this.props;
    return (
      <section className="MainInfoLocationTitle">
        <h2>{t("attractions.busko")}</h2>
        <div className="activity_icons">
          <NavLink to={"/Busko"} onClick={() => window.scrollTo(0, 0)}>
            <div className="activity_icons-box">
              <img
                src={require("./img/teznia.png")}
                alt="teznia"
                loading="lazy"
                decoding="async"
              ></img>
              <p>{t("attractions.graduationTower")}</p>
            </div>
          </NavLink>
          <NavLink to={"/Busko"} onClick={() => window.scrollTo(0, 0)}>
            <div className="activity_icons-box">
              <img
                src={require("./img/aleja.png")}
                alt="teznia"
                loading="lazy"
                decoding="async"
              ></img>
              <p>{t("attractions.alley")}</p>
            </div>
          </NavLink>
          <NavLink to={"/Busko"} onClick={() => window.scrollTo(0, 0)}>
            <div className="activity_icons-box">
              <img
                src={require("./img/buskoland.png")}
                alt="teznia"
                loading="lazy"
                decoding="async"
              ></img>
              <p>{t("attractions.buskoland")}</p>
            </div>
          </NavLink>
        </div>
        {/* <img className="background" src={require("./img/uzdrowisko.jpg")} alt="Uzdrowisko" /> */}
      </section>
    );
  }
}

export default withTranslation()(MainInfoLocationTitle);
