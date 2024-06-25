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
    console.log(this.state.Menu, 'click');
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
         
          <NavLink to={"/"}>
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
              <NavLink to={"/"} className={"listElement"}>
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Apartament"} className={"listElement"}>
                Apartament
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Busko"} className={"listElement"}>
                Busko
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
          <div className="returnMenu" onClick={this.handleClick}>
            <img
              src={require("./x.png")}
              alt="X"
            />
          </div>
          <ul>
            <li>
              <NavLink to={"/"} className={"listElement"}>
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Apartament"} className={"listElement"}>
                Apartament
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Busko"} className={"listElement"}>
                Busko
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"} className={"listElement"}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="phoneMenuBackground hide"></div>
      </div>
    );
  }
}

export default Menu;
