import React, { Component } from "react";
import "./natureReserve.scss";

class NatureReserve extends Component {
  render() {
    return (
      <div className="natureReserve">
        <div>
          <p>
            Rezerwat Zimne Wody w Busku-Zdroju to malownicza oaza przyrody,
            znana z unikatowych walorów przyrodniczych i kulturowych. Znajdujący
            się w sercu regionu, rezerwat jest domem dla rzadkich gatunków flory
            i fauny, a także zasobów wód mineralnych o szczególnych
            właściwościach leczniczych. Słynie z urokliwych ścieżek spacerowych,
            które prowadzą przez bujne lasy i nad malownicze strumienie, tworząc
            idealne warunki do aktywnego wypoczynku i obcowania z naturą.
            Rezerwat Zimne Wody to miejsce, gdzie miłośnicy przyrody mogą
            cieszyć się spokojem i pięknem otaczającego świata, odkrywając
            jednocześnie unikalne skarby przyrody Buska-Zdroju.
          </p>
        </div>
        <div>
          <img src={require("./natureReserve.jpg")} alt="natureReserve" />
        </div>
      </div>
    );
  }
}

export default NatureReserve;
