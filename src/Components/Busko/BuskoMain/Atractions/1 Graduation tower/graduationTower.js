import React, { Component } from "react";
import "./graduationTower.scss";
import { withTranslation } from "react-i18next";

class GraduationTower extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="graduationTower">
        <div className="text-box">
          <h2>{t("attractions.graduationTower")}</h2>
          <p>{t("attractions.graduationTowerDesc")}</p>
        </div>
        <div>
          <img src={require("./graduationTower.jpg")} alt="graduationTower" />
        </div>
      </div>
    );
  }
}

export default withTranslation()(GraduationTower);
