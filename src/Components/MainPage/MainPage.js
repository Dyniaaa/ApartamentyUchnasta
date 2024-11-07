import React, { Component } from "react";
import Menu from "../Menu/Menu";
import Main from "./Main/Main";
import MainInfo from "./MainInfo/MainInfo";
import Footer from "../Footer/Footer";

class MainPage extends Component {
  render() {
    return (
      <section className="mainPage">
        <Menu />
        <Main />
        <MainInfo />
        <Footer />
      </section>
    );
  }
}

export default MainPage;
