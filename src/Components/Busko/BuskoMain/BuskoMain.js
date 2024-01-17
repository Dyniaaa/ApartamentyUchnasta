import React, { Component } from "react";
import "./BuskoMain.scss";
import GraduationTower from "./Atractions/1 Graduation tower/graduationTower";
import Alley from "./Atractions/2 Alley/alley";
import Marconi from "./Atractions/3 Marconi/marconi";
import NatureReserve from "./Atractions/4 Nature Reserve/natureReserve";

class BuskoMain extends Component {
  render() {
    return (
      <div className="buskoMain">
        <GraduationTower />
        <Alley />
        <Marconi />
        <NatureReserve />
      </div>
    );
  }
}

export default BuskoMain;
