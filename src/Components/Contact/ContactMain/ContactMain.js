import React, { Component } from "react";
import "./ContactMain.scss";
import ContactMainForm from "./ContactMainForm/ContactMainForm";
import ContactMainTitle from "./ContactMainTitle/ContactMainTitle";

class ContactMain extends Component {
  render() {
    return (
      <section className="contactMain">
        <ContactMainTitle />
        <ContactMainForm />
      </section>
    );
  }
}

export default ContactMain;
