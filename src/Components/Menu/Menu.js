import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      Menu: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      Menu: !prevState.Menu,
    }));
    let phoneMenu = document.querySelector(".phoneMenu");
    let phoneMenuBackground = document.querySelector(".phoneMenuBackground");
    if (!this.state.Menu) {
      phoneMenu.classList.add("show");
      phoneMenuBackground.classList.add("show");
      phoneMenuBackground.classList.remove("hide");
      phoneMenu.classList.remove("hide");
    }
    if (this.state.Menu) {
      phoneMenu.classList.add("hide");
      phoneMenuBackground.classList.add("hide");
      phoneMenuBackground.classList.remove("show");
      phoneMenu.classList.remove("show");
    }
  };

  render() {
    return (
      <div>
        <div className="menu">
          <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)}>
            <img
              src={require("./LogoBusko.png")}
              alt="Logo Apartamenty Uchnasta"
            />
          </NavLink>
          <div className="phoneMenuIcon" onClick={this.handleClick}>
            <div className="phoneMenuDiv"></div>
            <div className="phoneMenuDiv"></div>
            <div className="phoneMenuDiv"></div>
          </div>
          <ul>
            <li>
              <NavLink to={"/"} className={"listElement"} onClick={() => window.scrollTo(0, 0)}>
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Apartament"} className={"listElement"}>
                Apartamenty
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Busko"} className={"listElement"} onClick={() => window.scrollTo(0, 0)}>
                Atrakcje
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"} className={"listElement"}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="phoneMenu hide">
          <div className="returnMenu">
            <img src={require("./x.png")} alt="X" onClick={this.handleClick} />
          </div>
          <ul>
            <li>
              <NavLink to={"/"} className={"listElement"}>
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Apartament"} className={"listElement"}>
                Apartamenty
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Busko"} className={"listElement"}>
                Busko - Zdrój
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"} className={"listElement"}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="phoneMenuBackground hide"
          onClick={this.handleClick}
        ></div>
      </div>
    );
  }
}

export default Menu;
