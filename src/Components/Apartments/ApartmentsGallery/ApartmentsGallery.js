import React, { Component } from "react";
import MyGallery from "./Gallery/Gallery";

class ApartmentsGallery extends Component {
  render() {
    return (
      <section className="apartmentsGallery">
        <div>
          <MyGallery />
        </div>
      </section>
    );
  }
}

export default ApartmentsGallery;
