import React, { Component } from "react";
import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import { getAllApartments } from "../../../data/apartmentsData";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
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
    const { t } = this.props;

    return (
      <>
        <Menu />
        <div className="apartments-list-page">
          <div className="apartments-list-hero">
            <Fade direction="down" triggerOnce>
              <h1>{t("apartments.ourApartments")}</h1>
              <p>{t("apartments.chooseIdeal")}</p>
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
                <h2>{t("apartments.generalInfo")}</h2>
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
                      <h3>{t("apartmentDetail.checkIn")}</h3>
                      <p>{t("apartments.checkInTime")}</p>
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
                      <h3>{t("apartmentDetail.checkOut")}</h3>
                      <p>{t("apartments.checkOutTime")}</p>
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
                      <h3>{t("info.parking")}</h3>
                      <p>{t("apartments.freeParkingInPrice")}</p>
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

export default withTranslation()(ApartmentsList);
