import React, { Component } from "react";
import "./ContactMainForm.scss";
import Form from "./Form/Form";
import HowToGetHere from "./HowToGetHere/HowToGetHere";

class ContactMainForm extends Component {
  render() {
    return (
      <section className="contactMainForm">
        <div className="contactUsDiv">
          <div className="askUsDiv">
            <p>Pytaj o co Chcesz!</p>
          </div>
          <div className="formDiv">
            <Form />
          </div>
        </div>

        <HowToGetHere />
      </section>
    );
  }
}

export default ContactMainForm;
