import React, { Component } from "react";
import "./marconi.scss";
import { withTranslation } from "react-i18next";

class Marconi extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="marconi">
        <div>
          <img src={require("./marconi.jpg")} alt="marconi" />
        </div>
        <div className="text-box">
          <h2>{t("attractions.marconi")}</h2>
          <p>{t("attractions.marconiDesc")}</p>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Marconi);
