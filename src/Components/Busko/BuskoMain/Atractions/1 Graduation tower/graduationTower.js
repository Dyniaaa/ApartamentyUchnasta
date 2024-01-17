import React, { Component } from "react";
import "./graduationTower.scss";

class GraduationTower extends Component {
  render() {
    return (
      <div className="graduationTower">
        <div>
          <img src={require("./graduationTower.jpg")} alt="graduationTower" />
        </div>
        <div>
          <p>
            Tężnia w Busku-Zdroju to nowoczesny ośrodek uzdrowiskowy, oferujący
            inhalacje solankowe dla poprawy zdrowia i samopoczucia.
            Zainspirowana tradycyjnymi tężniami uzdrowiskowymi, tężnia w
            Busku-Zdroju wykorzystuje bogactwo mikroelementów, takich jak jod i
            brom, aby stworzyć korzystne warunki do regeneracji i relaksu. Ta
            harmonijna przestrzeń łączy w sobie naturalne metody leczenia z
            nowoczesnym podejściem do wellness, przyciągając zarówno turystów,
            jak i mieszkańców, którzy pragną korzystać z dobroczynnych efektów
            tężni w spokojnym i urokliwym otoczeniu.
          </p>
        </div>
      </div>
    );
  }
}

export default GraduationTower;
