import React, { Component } from "react";
import Menu from "../Menu/Menu";
import ApartmentsGallery from "./ApartmentsGallery/ApartmentsGallery";
import Footer from "../Footer/Footer";

class Apartments extends Component {
  render() {
    return (
      <>
        <Menu />
        <ApartmentsGallery />
        <Footer />
      </>
    );
  }
}

export default Apartments;
