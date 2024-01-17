import React, { Component } from "react";
import "./ApartmentsGallery.scss";
import Gallery from "./Gallery/Gallery";

class ApartmentsGallery extends Component {
  render() {
    return (
      <section className="apartmentsGallery">
        <div>
          <Gallery />
        </div>
      </section>
    );
  }
}

export default ApartmentsGallery;
