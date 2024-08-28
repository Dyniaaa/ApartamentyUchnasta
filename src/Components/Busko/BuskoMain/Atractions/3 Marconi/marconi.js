import React, { Component } from "react";
import "./marconi.scss";

class Marconi extends Component {
  render() {
    return (
      <div className="marconi">
        <div>
          <img src={require("./marconi.jpg")} alt="marconi" />
        </div>
        <div className="text-box">
          <h2>Sanatorium Marconi</h2>
          <p>
            Sanatorium Marconi w Busku-Zdroju jest renomowanym ośrodkiem zdrowia
            i rehabilitacji, specjalizującym się w kompleksowej opiece medycznej
            i terapeutycznej. Znane ze swojego wysokiego standardu usług
            medycznych, sanatorium oferuje nowoczesne metody leczenia i
            kompleksowe programy rehabilitacyjne dla pacjentów z różnorodnymi
            schorzeniami. Wyposażone w zaawansowany sprzęt medyczny oraz zespół
            doświadczonych specjalistów, Sanatorium Marconi zapewnia kompleksową
            opiekę, od diagnostyki i terapii po opiekę pooperacyjną. Otoczone
            malowniczym krajobrazem Buska-Zdroju, sanatorium jest również
            miejscem, gdzie pacjenci mogą cieszyć się spokojem i harmonią
            podczas rekonwalescencji.
          </p>
        </div>
      </div>
    );
  }
}

export default Marconi;
