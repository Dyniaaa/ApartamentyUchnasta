import React, { Component } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import ImageGallery from "react-image-gallery";
import { getApartmentById } from "../../../data/apartmentsData";
import { Fade } from "react-awesome-reveal";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ApartmentDetail.scss";

class ApartmentDetailClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryLoaded: false,
    };
  }

  handleGalleryLoad = () => {
    if (!this.state.galleryLoaded) {
      this.setState({ galleryLoaded: true });
    }
  };

  render() {
    const { apartment } = this.props;
    const { galleryLoaded } = this.state;

    if (!apartment) {
      return <Navigate to="/Apartament" replace />;
    }

    const images = apartment.images.map((img) => ({
      original: img,
      thumbnail: img,
      thumbnailClass: "ThumbnailClass",
    }));

    return (
      <>
        <Menu />
        <div className="apartment-detail-page">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/">Strona Główna</Link>
            <span>/</span>
            <Link to="/Apartament">Apartamenty</Link>
            <span>/</span>
            <span>Apartament {apartment.name}</span>
          </div>

          {/* Header */}
          <Fade direction="down" triggerOnce>
            <div className="apartment-detail-header">
              <div className="header-content">
                <h1>Apartament {apartment.name}</h1>
                <div className="header-info">
                  <span className="surface">{apartment.surface}</span>
                  <span className="divider">•</span>
                  <span className="floor">{apartment.floor}</span>
                  <span className="divider">•</span>
                  <span className="capacity">Do {apartment.capacity} osób</span>
                </div>
              </div>
            </div>
          </Fade>

          {/* Gallery and Description Side by Side */}
          <div className="gallery-description-wrapper">
            <div className="gallery-section">
              <div className="apartment-detail-gallery">
                {!galleryLoaded && <div className="loader"></div>}
                <div
                  className={`gallery-wrapper ${galleryLoaded ? "visible" : "hidden"}`}
                >
                  <Fade triggerOnce>
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      showFullscreenButton={true}
                      lazyLoad={true}
                      onImageLoad={this.handleGalleryLoad}
                    />
                  </Fade>
                </div>
              </div>
            </div>

            <div className="description-section">
              <Fade direction="right" triggerOnce>
                <div className="description-box-brown">
                  <h2>O apartamencie</h2>
                  <p>{apartment.fullDescription}</p>
                </div>
              </Fade>

              {/* Booking Card pod opisem */}
              <Fade direction="right" delay={100} triggerOnce>
                <div className="booking-card-side">
                  <h3>Rezerwacja</h3>
                  <p>Skontaktuj się z nami i zarezerwuj swój pobyt</p>
                  <a href="tel:884875800" className="cta-button">
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
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    884 875 800
                  </a>
                  <div className="checkin-info">
                    <div>
                      <strong>Zameldowanie:</strong> od 15:00
                    </div>
                    <div>
                      <strong>Wymeldowanie:</strong> do 11:00
                    </div>
                    <div className="flexible-time">
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
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>
                        Potrzebujesz elastycznych godzin? Skontaktuj się z nami
                        – chętnie dostosujemy się do Twoich potrzeb!
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          {/* Udogodnienia Section - FULL WIDTH */}
          <div className="facilities-wrapper-full">
            <Fade direction="up" triggerOnce>
              <div className="apartment-facilities">
                <h2>Udogodnienia</h2>
                <div className="facilities-grid">
                  <div className="facility-item">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                      <path d="M16 3l-4 4l-4 -4" />
                    </svg>
                    <span>SmartTV</span>
                  </div>
                  <div className="facility-item">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 18l.01 0" />
                      <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
                      <path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
                      <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
                    </svg>
                    <span>Internet</span>
                  </div>
                  <div className="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="currentColor"
                    >
                      <path d="M226.67-80q-26.34 0-46.5-19.83Q160-119.67 160-146.67v-666.66q0-26.34 20.17-46.5Q200.33-880 226.67-880H800v66.67h-98v66.66q0 15-12.17 27.5-12.16 12.5-27.16 12.5H365.33q-15 0-27.16-12.5-12.17-12.5-12.17-27.5v-66.66h-99.33v666.66H406Q368-173 347-211.5T326-302v-195.33h376V-302q0 52-21.33 90.5-21.34 38.5-59.34 64.83H800V-80H226.67Zm287-97.33q51 0 86.33-36.36T635.33-302v-128.67H392.67V-302q0 51.95 35 88.31t86 36.36ZM513.33-560q16.72 0 28.03-11.31 11.31-11.31 11.31-28.02 0-16.72-11.31-28.03-11.31-11.31-28.03-11.31-16.71 0-28.02 11.31Q474-616.05 474-599.33q0 16.71 11.31 28.02Q496.62-560 513.33-560Zm.67 129.33Z" />
                    </svg>
                    <span>Ekspres</span>
                  </div>
                  <div className="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="currentColor"
                    >
                      <path d="M445.33-144.67Q423-209.33 391-245t-95-61.34q-3.67 25.67-1.67 45.17 2 19.51 8 31.17 12 21 26.34 35.67Q343-179.67 361-169q18 10.67 39 16.5t45.33 7.83Zm69.34 0q74.33-7 113.33-41.66 39-34.67 51.67-106.01-22 3.34-39.34 7.01-17.33 3.66-29.67 7.33-18.66 13-33.16 27.33Q563-236.33 551.33-220q-11.66 16.33-20.33 34.83-8.67 18.5-16.33 40.5Zm-34.67-362q72 0 122.67-50.66Q653.33-608 653.33-680v-76.67l-81.33 69-92-111-92 111-81.33-69V-680q0 72 50.66 122.67Q408-506.67 480-506.67ZM440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-152.39q-86-13.94-143-80.64T240-680v-150q0-21.94 19.67-30.81 19.66-8.86 35.66 5.48L380-782l74.33-90q9.92-12 25.63-12 15.71 0 25.71 12L580-782l84.67-73.33q16-14.34 35.66-5.48Q720-851.94 720-830v150q0 90.25-57 156.94t-143 80.73V-290q43-51 106-80.99 63-29.99 134-29.01v80q0 100-70 170T520-80h-80Zm40-573Zm125 418Zm-249 0Z" />
                    </svg>
                    <span>Ogród</span>
                  </div>
                  <div className="facility-item">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225z" />
                      <path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
                      <path d="M15 14l1 2" />
                      <path d="M9 14l-3 6" />
                      <path d="M15 18h-8" />
                      <path d="M15 5v-1" />
                      <path d="M12 5v-1" />
                      <path d="M9 5v-1" />
                    </svg>
                    <span>Grill</span>
                  </div>
                  <div className="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="currentColor"
                    >
                      <path d="M280-80v-246h-68.67Q174-326 147-351.67q-27-25.66-27-63 0-27.66 14.33-51.5Q148.67-490 174-501.33L448.67-620v-36.67q-36.67-11-59.67-41.5t-23-68.5Q366-814 399.67-847q33.66-33 81-33 47.33 0 81 33 33.66 33 33.66 80.33h-66.66q0-19.66-14.17-33.16-14.17-13.5-33.83-13.5-19.67 0-33.84 13.5-14.16 13.5-14.16 33.16 0 21 14.16 35.17Q461-717.33 482-717.33q13.67 0 23.5 9.5t9.83 23.16V-620L786-501.33q25.33 11.33 39.67 35.16Q840-442.33 840-414.67q0 37.34-27 63Q786-326 748.67-326H680v246H280Zm-68.67-312.67H280V-440h400v47.33h68.67q9.66 0 17.16-6.66 7.5-6.67 7.5-16.67 0-7.67-4.16-13.5-4.17-5.83-11.17-9.17l-276-124-280 124q-7 3.34-11.17 9.17-4.16 5.83-4.16 12.83 0 10 7.16 17 7.17 7 17.5 7Zm135.34 246h266.66v-226.66H346.67v226.66Zm0-226.66h266.66-266.66Z" />
                    </svg>
                    <span>Ręczniki</span>
                  </div>
                  <div className="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 61 60"
                      fill="currentColor"
                    >
                      <path d="M17.3313 1.97168C8.06875 1.97168 0.53125 9.50918 0.53125 18.7717C0.53125 23.4029 2.40156 27.617 5.44375 30.6592C5.46719 30.6732 5.49531 30.6873 5.51875 30.6967C5.55156 30.7295 5.56094 30.7811 5.59375 30.8092C5.67344 30.9076 5.81875 31.0951 6.08125 31.6342C6.44688 32.3842 6.89688 33.6076 7.13125 35.3842C7.21563 36.0217 7.09375 38.3514 6.79375 40.8217C6.49375 43.292 6.05781 46.0436 5.63125 48.0967C5.24688 49.9389 5.28438 51.6217 6.04375 53.0467C6.80313 54.4717 8.23281 55.4842 10.1313 56.0467C10.1828 56.0514 10.2297 56.0514 10.2813 56.0467L16.2063 57.0592C16.2203 57.0592 16.2297 57.0592 16.2438 57.0592C16.5906 57.1014 17.6313 57.1811 18.7563 57.0592C19.3188 56.9982 19.9047 56.9186 20.4813 56.6467C21.0578 56.3748 21.6859 55.8686 21.9438 55.1092C22.2297 54.2607 22.0703 53.3607 21.7938 52.7467C21.5172 52.1326 21.2219 51.7248 20.9688 51.2467C20.4625 50.2904 19.9844 49.0623 20.7063 45.9592C21.3297 43.2826 22.0094 41.1686 22.8063 38.5717C23.4719 36.4014 24.3906 35.2436 25.0938 34.5967C25.7969 33.9498 26.1438 33.8842 26.1438 33.8842C26.2609 33.8514 26.3781 33.7998 26.4813 33.7342L46.4313 28.7842C46.9609 28.6482 47.3313 28.1701 47.3313 27.6217V9.92168C47.3313 9.37324 46.9609 8.89512 46.4313 8.75918L22.4688 2.79668L22.3938 2.75918V2.79668C20.7953 2.29043 19.1031 1.97168 17.3313 1.97168ZM17.3313 4.37168C18.8688 4.37168 20.3641 4.63418 21.7563 5.08418C21.7797 5.08418 21.8078 5.08418 21.8313 5.08418L44.9313 10.8592V26.6842L21.8313 32.4592C21.8078 32.4592 21.7797 32.4592 21.7563 32.4592C20.3641 32.9092 18.8688 33.1717 17.3313 33.1717C13.3984 33.1717 9.84063 31.5967 7.24375 29.0467C7.20625 29.0186 7.16875 28.9951 7.13125 28.9717C7.10781 28.9482 7.07969 28.9201 7.05625 28.8967C7.03281 28.8686 7.00938 28.8451 6.98125 28.8217C4.46406 26.2295 2.93125 22.6764 2.93125 18.7717C2.93125 10.8076 9.36719 4.37168 17.3313 4.37168ZM17.3313 10.3717C12.7047 10.3717 8.93125 14.1451 8.93125 18.7717C8.93125 23.3982 12.7047 27.1717 17.3313 27.1717C21.9578 27.1717 25.7313 23.3982 25.7313 18.7717C25.7313 14.1451 21.9578 10.3717 17.3313 10.3717Z" />
                    </svg>
                    <span>Suszarka</span>
                  </div>
                  <div className="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="currentColor"
                    >
                      <path d="M186.67-546.67v360h586.66v-360H186.67Zm0-66.66h586.66v-160H186.67v160ZM479.94-258q-30.27 0-51.77-21.54-21.5-21.54-21.5-51.79 0-27 16.66-58.84Q440-422 480-478q40 56 56.67 87.83 16.66 31.84 16.66 58.84 0 30.25-21.56 51.79Q510.22-258 479.94-258Zm213.39-402q13.67 0 23.5-9.83 9.84-9.84 9.84-23.5 0-13.67-9.84-23.5-9.83-9.84-23.5-9.84-13.66 0-23.5 9.84Q660-707 660-693.33q0 13.66 9.83 23.5 9.84 9.83 23.5 9.83ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-493.33v-160 160Z" />
                    </svg>
                    <span>Zmywarka</span>
                  </div>
                  <div className="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="currentColor"
                    >
                      <path d="M160-120v-66.67h640V-120H160Zm154-146.67q-64 0-109-44.66Q160-356 160-420v-420h653.33q27.5 0 47.09 19.58Q880-800.83 880-773.33v146.66q0 27.5-19.58 47.09Q840.83-560 813.33-560h-90.66v140q0 64-45 108.67-45 44.66-109 44.66H314Zm0-506.66h342-429.33H314Zm408.67 146.66h90.66v-146.66h-90.66v146.66ZM568.65-333.33q35.02 0 61.18-26.17Q656-385.67 656-420v-353.33H398V-746l71.33 58q1.34 1.33 8.67 17.33V-514q0 9.07-6.67 15.87-6.66 6.8-16.66 6.8h-154q-10 0-16.67-6.8-6.67-6.8-6.67-15.87v-156.67q0-3.33 8.67-17.33l72-58v-27.33H226.67V-420q0 34.33 26.5 60.5T314-333.33h254.65ZM358-773.33h40-40Z" />
                    </svg>
                    <span>Kawa i herbata</span>
                  </div>
                  <div className="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="currentColor"
                    >
                      <path d="M80-240v-120q0-66 47-113t113-47h373.33v-46.55q0-19.78-13.41-33.28-13.42-13.5-33.25-13.5H394q-19.83 0-33.25 13.41-13.42 13.42-13.42 33.25H280Q280-614 313.06-647q33.05-33 80.27-33h173.34q47.22 0 80.27 33.06Q680-613.89 680-566.67v173.34q21 0 37.17-12.84Q733.33-419 733.33-440v-166.67q0-47.22 33.06-80.27Q799.44-720 846.67-720H880v66.67h-33.33q-19.84 0-33.25 13.41Q800-626.5 800-606.67V-440q0 48.67-35.33 81-35.34 32.33-84.67 32.33V-240H80Zm66.67-66.67h466.66v-146.66H240q-39 0-66.17 27.16Q146.67-399 146.67-360v53.33Zm466.66 0v-146.66 146.66Z" />
                    </svg>
                    <span>Żelazko</span>
                  </div>
                  <div className="facility-item">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                      <path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M8 6h.01" />
                      <path d="M11 6h.01" />
                      <path d="M14 6h2" />
                      <path d="M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0" />
                    </svg>
                    <span>Pralka</span>
                  </div>
                  <div className="facility-item">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 6h8v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1v2z" />
                      <path d="M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v8.071a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l1.094 -1.759" />
                      <path d="M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M10 10h4" />
                    </svg>
                    <span>Lodówka</span>
                  </div>
                  <div className="facility-item">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 6h8v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1v2z" />
                      <path d="M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v8.071a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l1.094 -1.759" />
                      <path d="M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M10 10h4" />
                    </svg>
                    <span>Zestaw kosmetyków</span>
                  </div>
                  <div className="facility-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="currentColor"
                    >
                      <path d="M240-120v-720h285.33Q624-840 692-772q68 68 68 166.67 0 98.66-68 166.66t-166.67 68h-152V-120H240Zm133.33-384H528q43 0 72.17-29.17 29.16-29.16 29.16-72.16t-29.16-72.17Q571-706.67 528-706.67H373.33V-504Z" />
                    </svg>
                    <span>Darmowy parking</span>
                  </div>
                  <div className="facility-item">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" />
                      <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" />
                      <path d="M8 9v2" />
                      <path d="M7 10h2" />
                      <path d="M14 10h2" />
                    </svg>
                    <span>Konsola</span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Back button */}
          <div className="back-button-container">
            <Link
              to="/Apartament"
              className="back-button"
              onClick={() => window.scrollTo(0, 0)}
            >
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
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Powrót do listy apartamentów
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

// Wrapper with hooks
const ApartmentDetail = () => {
  const { id } = useParams();
  const apartment = getApartmentById(id);

  return <ApartmentDetailClass apartment={apartment} />;
};

export default ApartmentDetail;
