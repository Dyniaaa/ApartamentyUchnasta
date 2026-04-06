import React from "react";
import { Link } from "react-router-dom";
import "./ApartmentCard.scss";

const ApartmentCard = ({ apartment }) => {
  return (
    <Link
      to={`/Apartament/${apartment.id}`}
      className="apartment-card"
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="apartment-card__image-container">
        <img
          src={apartment.thumbnail}
          alt={apartment.title}
          className="apartment-card__image"
          loading="lazy"
          decoding="async"
        />
        <div className="apartment-card__overlay">
          <div className="apartment-card__overlay-content">
            <h3>Zobacz szczegóły</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="apartment-card__content">
        <div className="apartment-card__header">
          <h2 className="apartment-card__name">Apartament {apartment.name}</h2>
          <span className="apartment-card__surface">{apartment.surface}</span>
        </div>

        <p className="apartment-card__description">
          {apartment.shortDescription}
        </p>

        <div className="apartment-card__details">
          <div className="apartment-card__detail">
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>{apartment.capacity} osoby</span>
          </div>

          <div className="apartment-card__detail">
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
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{apartment.floor}</span>
          </div>
        </div>

        <div className="apartment-card__cta">
          <span>Zobacz więcej</span>
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
