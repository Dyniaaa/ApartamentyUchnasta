import React, { Component } from "react";
import "./MainInfoLocationMap.scss";
import MainInfoLocationMapText from "./MainInfoLocationMapText/MainInfoLocationMapText";
import MapWithMarker from "./MapWithMarker/MapWithMarker";

class MainInfoLocationMap extends Component {
  render() {
    return (
      <section className="mainInfoLocationMap">
        <div className="mapWithMarkerDiv">
          <MapWithMarker />
        </div>
        <div className="mainInfoLocationMapTextDiv">
          <MainInfoLocationMapText />
        </div>
      </section>
    );
  }
}

export default MainInfoLocationMap;
