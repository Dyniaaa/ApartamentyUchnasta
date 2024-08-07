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
      </section>
    );
  }
}

export default Main;
