import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footerConact">
          <p className="footerContactTitle">Kontakt</p>
          <div>
            <div className="contactDiv">
              <img src={require("./MailIcon.jpg")} alt="mailIcon" />
              <NavLink to={"/Contact"} className={"listElement"}>
                <p>Przejdź do Formularza Kontaktowego</p>
              </NavLink>
            </div>
            <div className="contactDiv">
              <img src={require("./MailIcon.jpg")} alt="mailIcon" />
              <p>apartamentyuchnasta3@gmail.com</p>
            </div>
            <div className="contactDiv">
              <img src={require("./PhoneIcon.jpg")} alt="phoneIcon" />
              <p>884 875 800</p>
            </div>
            <div className="contactDiv">
              <img src={require("./PhoneIcon.jpg")} alt="phoneIcon" />
              <p>504 253 973</p>
            </div>
          </div>
        </div>
        <div className="logoDiv">
          <img src={require("./LogoBusko.png")} alt="Logo Apartamenty Busko" />
        </div>
      </section>
    );
  }
}

export default Footer;
