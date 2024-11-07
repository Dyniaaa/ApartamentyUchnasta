import React, { Component } from "react";
import "./ContactMainForm.scss";
import HowToGetHere from "./HowToGetHere/HowToGetHere";
import ContactForm from "./ContactForm/ContactForm";

class ContactMainForm extends Component {
  render() {
    return (
      <section className="contactMainForm">
        <div className="contactUsDiv">
          <div className="askUsDiv">
            <p>Pytaj o co Chcesz!</p>
          </div>
          <div className="formDiv">
            <ContactForm />
          </div>
        </div>

        <HowToGetHere />
      </section>
    );
  }
}

export default ContactMainForm;
