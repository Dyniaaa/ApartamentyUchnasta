import React, { Component } from "react";
import "./MainInfoLocationMapText.scss";
import { withTranslation } from "react-i18next";

class MainInfoLocationMapText extends Component {
  render() {
    const { t } = this.props;
    return (
      <section className="mainInfoLocationMapText">
        <div>
          <p>{t("location.idealPlace")}</p>
        </div>
      </section>
    );
  }
}

export default withTranslation()(MainInfoLocationMapText);
