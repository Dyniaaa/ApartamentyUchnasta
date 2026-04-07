import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { getAllApartments } from "../../data/apartmentsData";
import "./Menu.scss";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      Menu: false,
      apartmentsDropdownOpen: false,
      apartmentsExpandedMobile: false,
    };
    this.apartments = getAllApartments();
  }

  toggleApartmentsMobile = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      apartmentsExpandedMobile: !prevState.apartmentsExpandedMobile,
    }));
  };

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

  handleMouseEnter = () => {
    this.setState({ apartmentsDropdownOpen: true });
  };

  handleMouseLeave = () => {
    this.setState({ apartmentsDropdownOpen: false });
  };

  handleLanguageChange = (lang) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  };

  render() {
    const { apartmentsDropdownOpen } = this.state;
    const isOnApartmentPage = window.location.pathname.includes("/Apartament");
    const { t, i18n } = this.props;
    const currentLang = i18n.language;

    return (
      <div>
        <div className="menu">
          <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)}>
            <img
              src={require("./LogoBusko.png")}
              alt="Logo Apartamenty Uchnasta"
            />
          </NavLink>
          <div className="language-switcher">
            <button
              className={`lang-btn ${currentLang === "pl" ? "active" : ""}`}
              onClick={() => this.handleLanguageChange("pl")}
            >
              PL
            </button>
            <span className="lang-separator">|</span>
            <button
              className={`lang-btn ${currentLang === "en" ? "active" : ""}`}
              onClick={() => this.handleLanguageChange("en")}
            >
              EN
            </button>
          </div>
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
                {t("menu.home")}
              </NavLink>
            </li>
            <li
              className="dropdown-menu-item"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              <NavLink
                to={"/Apartament"}
                className={"listElement"}
                onClick={() => window.scrollTo(0, 0)}
              >
                {t("menu.apartments")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="dropdown-arrow"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </NavLink>
              {apartmentsDropdownOpen && (
                <div className="dropdown-content">
                  <NavLink
                    to={"/Apartament"}
                    onClick={() => window.scrollTo(0, 0)}
                    className="dropdown-link all-apartments"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    {t("menu.allApartments")}
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  {this.apartments.map((apt) => (
                    <NavLink
                      key={apt.id}
                      to={`/Apartament/${apt.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="dropdown-link"
                    >
                      {t("menu.apartment")} {apt.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
            <li>
              <NavLink
                to={"/Busko"}
                className={"listElement"}
                onClick={() => window.scrollTo(0, 0)}
              >
                {t("menu.attractions")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Contact"}
                className={"listElement"}
                onClick={() => window.scrollTo(0, 0)}
              >
                {t("menu.contact")}
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
                  {t("menu.home")}
                </NavLink>
              </li>
              <li>
                <div
                  className={`listElement apartment-toggle ${isOnApartmentPage ? "active" : ""}`}
                  onClick={this.toggleApartmentsMobile}
                >
                  {t("menu.apartments")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`mobile-dropdown-arrow ${this.state.apartmentsExpandedMobile ? "expanded" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </li>
              <li
                className={`phone-apartments-wrapper ${this.state.apartmentsExpandedMobile ? "expanded" : ""}`}
              >
                <NavLink
                  to={"/Apartament"}
                  end
                  className={"listElement phone-all-apts"}
                  onClick={(e) => {
                    window.scrollTo(0, 0);
                    this.handleClick();
                  }}
                >
                  → {t("menu.allApartments")}
                </NavLink>
                {this.apartments.map((apt) => (
                  <NavLink
                    key={apt.id}
                    to={`/Apartament/${apt.id}`}
                    className={"listElement phone-sub-element"}
                    onClick={(e) => {
                      window.scrollTo(0, 0);
                      this.handleClick();
                    }}
                  >
                    → {t("menu.apartment")} {apt.name}
                  </NavLink>
                ))}
              </li>
              <li>
                <NavLink
                  to={"/Busko"}
                  className={"listElement"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t("menu.attractions")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Contact"}
                  className={"listElement"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {t("menu.contact")}
                </NavLink>
              </li>
              <li className="phone-language-switcher">
                <div className="language-switcher-mobile">
                  <button
                    className={`lang-btn ${currentLang === "pl" ? "active" : ""}`}
                    onClick={() => this.handleLanguageChange("pl")}
                  >
                    PL
                  </button>
                  <span className="lang-separator">|</span>
                  <button
                    className={`lang-btn ${currentLang === "en" ? "active" : ""}`}
                    onClick={() => this.handleLanguageChange("en")}
                  >
                    EN
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Menu);
