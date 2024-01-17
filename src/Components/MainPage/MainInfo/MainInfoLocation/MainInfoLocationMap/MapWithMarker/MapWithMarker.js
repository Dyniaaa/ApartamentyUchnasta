import React, { Component } from "react";
import "./MapWithMarker.scss";

class MapWithMarker extends Component {
  render() {
    return (
      <section className="mapWithMarker">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.0293427039468!2d20.7173470589467!3d50.46415774559569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717c24797e100f1%3A0x7a19b04e4528d3cb!2sUchnasta%203%2C%2028-100%20Busko-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1695211810029!5m2!1spl!2spl&z=1000"
          allowFullScreen=""
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    );
  }
}

export default MapWithMarker;
