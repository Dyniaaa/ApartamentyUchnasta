import React, { Component } from "react";
import "./MainInfoApartmentInfoText.scss";
import { NavLink } from "react-router-dom";

class MainInfoApartmentInfoTile extends Component {
  render() {
    return (
      <section className="MainInfoApartmentInfoTile">
        <div className="appartment-container">
          <img src={require("./2.Sypialnia2.jpg")} alt="bedroom" />
          <div>
            <h3>Apartament I</h3>
            <div className="detail-box">
              <div className="detail-box_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-users"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <p>Max 4 osoby</p>
              </div>
              <div className="detail-box_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 4l4 0l0 4" />
                  <path d="M14 10l6 -6" />
                  <path d="M8 20l-4 0l0 -4" />
                  <path d="M4 20l6 -6" />
                  <path d="M16 20l4 0l0 -4" />
                  <path d="M14 14l6 6" />
                  <path d="M8 4l-4 0l0 4" />
                  <path d="M4 4l6 6" />
                </svg>
                <p>68 m²</p>
              </div>
            </div>
            <NavLink to={"/Apartament"} onClick={() => window.scrollTo(0, 0)}>
              <button>Szczegóły</button>
            </NavLink>
          </div>
        </div>
        <div className="appartment-container">
          <img src={require("./1.Kuchnia1.jpg")} alt="" />
          <div>
            <h3>Apartament II</h3>
            <div className="detail-box">
              <div className="detail-box_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-users"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
                <p>Max 4 osoby</p>
              </div>
              <div className="detail-box_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 4l4 0l0 4" />
                  <path d="M14 10l6 -6" />
                  <path d="M8 20l-4 0l0 -4" />
                  <path d="M4 20l6 -6" />
                  <path d="M16 20l4 0l0 -4" />
                  <path d="M14 14l6 6" />
                  <path d="M8 4l-4 0l0 4" />
                  <path d="M4 4l6 6" />
                </svg>
                <p>62 m²</p>
              </div>
            </div>
            <NavLink to={"/Apartament"} onClick={() => window.scrollTo(0, 0)}>
              <button>Szczegóły</button>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
}

export default MainInfoApartmentInfoTile;
