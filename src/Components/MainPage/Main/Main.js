import React, { Component } from "react";
import "./Main.scss";
import { Fade } from "react-awesome-reveal";

class Main extends Component {
  render() {
    return (
      <section className="main">
        <div>
          <Fade direction="down" triggerOnce>
            <img
              src="https://static.wixstatic.com/media/05e3dc_7c5c286e957d4aa6a00be967bebac2e3.png/v1/fill/w_75,h_7,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/05e3dc_7c5c286e957d4aa6a00be967bebac2e3.png"
              alt="zigzag"
            />
            <p>Be my guest</p>
            <img
              src="https://static.wixstatic.com/media/05e3dc_7c5c286e957d4aa6a00be967bebac2e3.png/v1/fill/w_75,h_7,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/05e3dc_7c5c286e957d4aa6a00be967bebac2e3.png"
              alt="zigzag"
            />
          </Fade>
        </div>
        <Fade direction="down" triggerOnce>
          <p className="mainText">Czuj się jak w domu, z daleka od domu</p>
        </Fade>
        <svg className="arrow-icon"  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  strokeLlinejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-arrow-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M8 12l4 4" /><path d="M12 8v8" /><path d="M16 12l-4 4" /></svg>
      </section>
    );
  }
}

export default Main;
