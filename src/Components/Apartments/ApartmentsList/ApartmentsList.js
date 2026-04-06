import React, { Component } from "react";
import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import { getAllApartments } from "../../../data/apartmentsData";
import { Fade } from "react-awesome-reveal";
import "./ApartmentsList.scss";

class ApartmentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: getAllApartments(),
    };
  }

  render() {
    const { apartments } = this.state;

    return (
      <>
        <Menu />
        <div className="apartments-list-page">
          <div className="apartments-list-hero">
            <Fade direction="down" triggerOnce>
              <h1>Nasze Apartamenty</h1>
              <p>Wybierz idealny apartament dla siebie i swoich bliskich</p>
            </Fade>
          </div>

          <div className="apartments-list-container">
            <div className="apartments-grid">
              {apartments.map((apartment, index) => (
                <Fade
                  key={apartment.id}
                  direction="up"
                  delay={index * 100}
                  triggerOnce
                >
                  <ApartmentCard apartment={apartment} />
                </Fade>
              ))}
            </div>
          </div>

          <div className="apartments-list-info">
            <Fade direction="up" triggerOnce>
              <div className="info-box">
                <h2>Informacje ogólne</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M2 12h20" />
                    </svg>
                    <div>
                      <h3>Zameldowanie</h3>
                      <p>od 15:00</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M17 7l-10 10M7 7h10" />
                    </svg>
                    <div>
                      <h3>Wymeldowanie</h3>
                      <p>do 11:00</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 16V8h3.5a2.5 2.5 0 1 1 0 5H9" />
                    </svg>
                    <div>
                      <h3>Parking</h3>
                      <p>Bezpłatny parking w cenie</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ApartmentsList;
