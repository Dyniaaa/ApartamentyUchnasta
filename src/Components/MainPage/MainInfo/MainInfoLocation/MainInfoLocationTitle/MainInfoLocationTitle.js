import React, { Component } from "react";
import "./MainInfoLocationTitle.scss";
import { NavLink } from "react-router-dom";
class MainInfoLocationTitle extends Component {
  render() {
    return (
      <section className="MainInfoLocationTitle">
        <h2>BUSKO - ZDRÓJ</h2>
        <div className="activity_icons">
          <NavLink to={"/Busko"} onClick={() => window.scrollTo(0, 0)}>
            <div className="activity_icons-box">
              <img src={require("./img/teznia.png")} alt="teznia"></img>
              <p>Tężnia</p>
            </div>
          </NavLink>
          <NavLink to={"/Busko"} onClick={() => window.scrollTo(0, 0)}>
            <div className="activity_icons-box">
              <img src={require("./img/aleja.png")} alt="teznia"></img>
              <p>Deptak Mickiewicza</p>
            </div>
          </NavLink>
          <NavLink to={"/Busko"} onClick={() => window.scrollTo(0, 0)}>
            <div className="activity_icons-box">
              <img src={require("./img/buskoland.png")} alt="teznia"></img>
              <p>BuskoLand</p>
            </div>
          </NavLink>
        </div>
        {/* <img className="background" src={require("./img/uzdrowisko.jpg")} alt="Uzdrowisko" /> */}
      </section>
    );
  }
}

export default MainInfoLocationTitle;
