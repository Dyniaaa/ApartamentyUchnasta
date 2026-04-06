import React, { Component } from "react";
import "./MainInfoApartmentInfoText.scss";
import ApartmentCard from "../../../../../Apartments/ApartmentCard/ApartmentCard";
import { getAllApartments } from "../../../../../../data/apartmentsData";

class MainInfoApartmentInfoTile extends Component {
  render() {
    const apartments = getAllApartments();

    return (
      <section className="MainInfoApartmentInfoTile">
        <div className="apartments-grid-homepage">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </section>
    );
  }
}

export default MainInfoApartmentInfoTile;
