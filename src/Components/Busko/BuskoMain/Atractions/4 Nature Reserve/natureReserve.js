import React, { Component } from "react";
import "./natureReserve.scss";
import { withTranslation } from "react-i18next";

class NatureReserve extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="natureReserve">
        <div>
          <img src={require("./natureReserve.jpg")} alt="natureReserve" />
        </div>
        <div>
          <h2>{t("attractions.natureReserve")}</h2>
          <p>{t("attractions.natureReserveDesc")}</p>
        </div>
      </div>
    );
  }
}

export default withTranslation()(NatureReserve);
