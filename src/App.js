import "./App.scss";
import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import NotFound from "./Components/NotFound";
import Apartments from "./Components/Apartments/Apartments";
import Busko from "./Components/Busko/Busko";
import Contact from "./Components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Apartament" element={<Apartments />} />
          <Route path="/Busko" element={<Busko />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
