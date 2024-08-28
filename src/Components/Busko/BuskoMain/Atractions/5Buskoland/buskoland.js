import React, { Component } from "react";
import "./buskoland.scss";

class Buskoland extends Component {
  render() {
    return (
      <div className="buskoland">
        <div>
          <img src={require("./buskoland.jpg")} alt="buskoland" />
        </div>
        <div>
          <h2>BuskoLand</h2>
          <p>
            Buskoland w Busku-Zdroju to rodzinny park rozrywki, który oferuje
            szeroką gamę atrakcji dla dzieci i dorosłych. Znajdziesz tu
            nowoczesne place zabaw z kolorowymi zjeżdżalniami, trampolinami i
            innymi urządzeniami, które zapewniają dzieciom bezpieczną i radosną
            zabawę. Rodzice mogą odpocząć w specjalnych strefach relaksu,
            ciesząc się komfortem i spokojem, podczas gdy ich pociechy bawią się
            w pobliżu. Buskoland to idealne miejsce na aktywny wypoczynek na
            świeżym powietrzu.
          </p>
        </div>
      </div>
    );
  }
}

export default Buskoland;
