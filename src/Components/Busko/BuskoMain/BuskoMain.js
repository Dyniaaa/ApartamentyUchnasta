import React, { Component } from "react";
import "./BuskoMain.scss";
import GraduationTower from "./Atractions/1 Graduation tower/graduationTower";
import Alley from "./Atractions/2 Alley/alley";
import Marconi from "./Atractions/3 Marconi/marconi";
import NatureReserve from "./Atractions/4 Nature Reserve/natureReserve";
import Buskoland from "./Atractions/5Buskoland/buskoland";
import { Fade } from "react-awesome-reveal";

class BuskoMain extends Component {
  render() {
    return (
      <div className="buskoMain">
        <Fade direction="left" triggerOnce>
          <GraduationTower />
        </Fade>
        <Marconi />
        <Fade direction="right" triggerOnce>
          <Alley />
        </Fade>
        <NatureReserve />
        <Fade direction="left" triggerOnce>
          <Buskoland />
        </Fade>
      </div>
    );
  }
}

export default BuskoMain;
