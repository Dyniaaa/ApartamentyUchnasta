import React, { Component } from "react";
import "./MainInfoApartmentTitle.scss";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

class MainInfoApartmentTitle extends Component {
  render() {
    const { t } = this.props;
    return (
      <Fade
        className="mainInfoApartmentTitleContainer"
        direction="up"
        triggerOnce
      >
        <div className="mainInfoApartmentTitle">
          <p>{t("apartments.title")}</p>
          <p>{t("apartments.description")}</p>
        </div>
      </Fade>
    );
  }
}

export default withTranslation()(MainInfoApartmentTitle);
