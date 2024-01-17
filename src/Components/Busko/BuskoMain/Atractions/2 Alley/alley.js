import React, { Component } from "react";
import "./alley.scss";

class Alley extends Component {
  render() {
    return (
      <div className="alley">
        <div>
          <p>
            Aleja Mickiewicza w Busku-Zdroju to urocza promenada pełna zieleni,
            stanowiąca serce miasta i ulubione miejsce spacerów i relaksu dla
            lokalnych mieszkańców oraz turystów. Znana z malowniczych alejek i
            starannie pielęgnowanych ogrodów, aleja oferuje wyjątkową mieszankę
            kultury, historii i przyrody. Otoczona zabytkowymi budynkami i
            urokliwymi kawiarniami, ta reprezentacyjna arteria przyciąga
            miłośników spacerów, spragnionych cieszyć się spokojem i pięknem
            przyrody, tworząc atmosferę relaksu i sielanki w samym sercu
            Buska-Zdroju.
          </p>
        </div>
        <div>
          <img src={require("./alley.jpg")} alt="Alley" />
        </div>
      </div>
    );
  }
}

export default Alley;
