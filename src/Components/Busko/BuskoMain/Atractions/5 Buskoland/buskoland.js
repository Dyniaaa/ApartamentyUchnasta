import React, { Component } from "react";
import "./buskoland.scss";
import { withTranslation } from "react-i18next";

class Buskoland extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="buskoland">
        <div>
          <img src={require("./buskoland.jpg")} alt="buskoland" />
        </div>
        <div>
          <h2>{t("attractions.buskoland")}</h2>
          <p>{t("attractions.buskolandDesc")}</p>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Buskoland);
