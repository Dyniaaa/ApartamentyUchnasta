import React, { Component } from "react";
import "./alley.scss";
import { withTranslation } from "react-i18next";

class Alley extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="alley">
        <div>
          <h2>{t("attractions.alleyTitle")}</h2>
          <p>{t("attractions.alleyDesc")}</p>
        </div>
        <div>
          <img src={require("./alley.jpg")} alt="Alley" />
        </div>
      </div>
    );
  }
}

export default withTranslation()(Alley);
