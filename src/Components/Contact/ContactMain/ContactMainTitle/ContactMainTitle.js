import React, { Component } from "react";
import "./ContactMainTitle.scss";
import { withTranslation } from "react-i18next";

class ContactMainTitle extends Component {
  render() {
    const { t } = this.props;
    return (
      <section className="contactMainTitle">
        <p>{t("contact.title")}</p>
        <div className="decorative-line"></div>
      </section>
    );
  }
}

export default withTranslation()(ContactMainTitle);
