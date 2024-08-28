import React, { Component } from "react";
import "./natureReserve.scss";

class NatureReserve extends Component {
  render() {
    return (
      <div className="natureReserve">
        <div>
          <img src={require("./natureReserve.jpg")} alt="natureReserve" />
        </div>
        <div>
          <h2>Rezerwat Zimne Wody</h2>
          <p>
            Rezerwat Zimne Wody w Busku-Zdroju to malownicza oaza przyrody,
            ceniona za unikalne walory przyrodnicze i lecznicze wody mineralne.
            Przebiegające przez bujne lasy ścieżki spacerowe prowadzą nad
            malownicze strumienie, tworząc idealne warunki do wypoczynku i
            obcowania z naturą. To miejsce, gdzie miłośnicy przyrody mogą
            odkrywać rzadkie gatunki flory i fauny oraz cieszyć się spokojem i
            pięknem otaczającego świata.
          </p>
        </div>
      </div>
    );
  }
}

export default NatureReserve;
