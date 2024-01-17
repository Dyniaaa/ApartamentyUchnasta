import React, { Component } from "react";
import Menu from "../Menu/Menu";
import BuskoMain from "./BuskoMain/BuskoMain";
import Footer from "../Footer/Footer";

class Busko extends Component {
  render() {
    return (
      <>
        <Menu />
        <BuskoMain />
        <Footer />
      </>
    );
  }
}

export default Busko;
