import React, { Component } from "react";
import "./alley.scss";

class Alley extends Component {
  render() {
    return (
      <div className="alley">
        <div>
          <h2>Aleja Mickiewicza</h2>
          <p>
            Aleja Mickiewicza w Busku-Zdroju to zielona, malownicza promenada,
            będąca sercem miasta i ulubionym miejscem spacerów. Otoczona
            zabytkowymi budynkami i urokliwymi kawiarniami, oferuje wyjątkową
            mieszankę kultury, historii i przyrody, tworząc atmosferę relaksu w
            samym centrum Buska-Zdroju.
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
