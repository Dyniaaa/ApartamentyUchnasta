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
    let first = document.querySelector(".topDiv");
    let second = document.querySelector(".midDiv");
    let third = document.querySelector(".bottomDiv");
    if (!this.state.Menu) {
      phoneMenu.classList.add("show");
      phoneMenu.classList.remove("hide");
      first.classList.add("first");
      second.classList.add("second");
      third.classList.add("third");
    }
    if (this.state.Menu) {
      phoneMenu.classList.add("hide");
      phoneMenu.classList.remove("show");
      first.classList.remove("first");
      second.classList.remove("second");
      third.classList.remove("third");
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
            <div className="phoneMenuDiv topDiv "></div>
            <div className="phoneMenuDiv midDiv "></div>
            <div className="phoneMenuDiv bottomDiv "></div>
          </div>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={"listElement"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Apartament"}
                className={"listElement"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Apartamenty
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Busko"}
                className={"listElement"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Atrakcje
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Contact"}
                className={"listElement"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
          <div className="phoneMenu hide">
            <ul className="phoneUl">
              <li> 
                <NavLink
                  to={"/"}
                  className={"listElement"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Strona Główna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Apartament"}
                  className={"listElement"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Apartamenty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Busko"}
                  className={"listElement"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Busko - Zdrój
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Contact"}
                  className={"listElement"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
