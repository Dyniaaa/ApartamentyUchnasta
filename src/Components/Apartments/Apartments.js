import React, { Component } from "react";
import Menu from "../Menu/Menu";
import ApartmentsGallery from "./ApartmentsGallery/ApartmentsGallery";
import Footer from "../Footer/Footer";
import ApartmentsDescription from './ApartmentsDescription/ApartmentsDescription'
class Apartments extends Component {
  render() {
    return (
      <>
        <Menu />
        <ApartmentsGallery />
        <ApartmentsDescription/>
        <Footer />
      </>
    );
  }
}

export default Apartments;
