import React, { Component } from "react";
import "./MainInfoApartmentTitle.scss";
import { Fade } from "react-awesome-reveal";

class MainInfoApartmentTitle extends Component {
  render() {
    return (
      <Fade className='mainInfoApartmentTitleContainer' direction="up" triggerOnce>
          <div className="mainInfoApartmentTitle">
        <p>A Home in the Heart of the City</p>
        <div></div>
        <p>
          Zapraszamy do naszego pensjonatu w Busku-Zdroju, słynnym uzdrowiskowym
          mieście położonym w malowniczym otoczeniu. Oferujemy komfortowy
          wypoczynek i relaks w pobliżu słynnej buskiej tężni solankowej.
        </p>
      </div>
      </Fade>
    
    );
  }
}

export default MainInfoApartmentTitle;
