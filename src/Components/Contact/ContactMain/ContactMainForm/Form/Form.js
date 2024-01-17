import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldApplyClassName: false,
      shouldApplyClassMail: false,
      shouldApplyClassMsg: false,
      shouldApplyClassSuccess: false,
      name: "",
      mail: "",
      msg: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        break;
      case "mail":
        break;
      case "msg":
        break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, mail, msg } = this.state;
    const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length === 0) {
      this.setState({ shouldApplyClassName: true });
    } else if (name.length !== 0) {
      this.setState({ shouldApplyClassName: false });
    }

    if (!mailPattern.test(mail)) {
      this.setState({ shouldApplyClassMail: true });
    } else if (mail.length !== 0) {
      this.setState({ shouldApplyClassMail: false });
    }

    if (msg.length === 0) {
      this.setState({ shouldApplyClassMsg: true });
    } else if (msg.length !== 0) {
      this.setState({ shouldApplyClassMsg: false });
    }

    if (
      name.length !== 0 &&
      mail.length !== 0 &&
      msg.length !== 0 &&
      mailPattern.test(mail)
    ) {
      this.setState({ shouldApplyClassSuccess: true });
    } else {
      this.setState({ shouldApplyClassSuccess: false });
    }
  };

  render() {
    const {
      shouldApplyClassName,
      shouldApplyClassMail,
      shouldApplyClassMsg,
      shouldApplyClassSuccess,
    } = this.state;

    return (
      <section className="form">
        <form onSubmit={this.handleSubmit} action="mail.php" method="POST">
          <div className={shouldApplyClassName ? "errorDiv" : "nameDisplay"}>
            <p>Pole niepoprawnie wypełnione</p>
          </div>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Imię"
              onChange={this.handleChange}
            />
          </div>
          <div className={shouldApplyClassMail ? "errorDiv" : "mailDisplay"}>
            <p>Pole niepoprawnie wypełnione</p>
          </div>
          <div>
            <input
              name="mail"
              type="text"
              placeholder="Mail"
              onChange={this.handleChange}
            />
          </div>
          <div className={shouldApplyClassMsg ? "errorDiv" : "msgDisplay"}>
            <p>Pole niepoprawnie wypełnione</p>
          </div>
          <div>
            <textarea
              rows={10}
              name="msg"
              type="text"
              placeholder="Wiadomość"
              onChange={this.handleChange}
            />
          </div>
          <div
            className={
              shouldApplyClassSuccess ? "successDiv" : "successDisplay"
            }
          >
            <p>Mail został poprawnie wysłany!</p>
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </section>
    );
  }
}

export default Form;
