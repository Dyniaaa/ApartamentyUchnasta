import React, { Component } from "react";
import "./Form.scss";
import { withTranslation } from "react-i18next";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("./mail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === "success") {
          this.setState({ status: "success" });
        } else {
          this.setState({ status: "error" });
        }
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was an error!", error);
      this.setState({ status: "error" });
    }
  };

  render() {
    const { t } = this.props;
    const success = {
      textAlign: "center",
      backgroundColor: "rgb(243 255 244)",
      border: "1px solid green",
      borderRadius: "10px",
      width: "40%",
      padding: "1rem",
    };

    const error = {
      textAlign: "center",
      backgroundColor: "rgb(255 236 236)",
      border: "1px solid red",
      borderRadius: "10px",
      width: "40%",
      padding: "1rem",
    };

    return (
      <section className="form">
        {this.state.status === "success" ? (
          <p style={success}>{t("contact.successMessage")}</p>
        ) : this.state.status === "error" ? (
          <p style={error}>{t("contact.errorMessage")}</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                name="name"
                type="text"
                id="name"
                placeholder={t("contact.name")}
                required
              />
            </div>

            <div>
              <input
                name="mail"
                id="mail"
                type="text"
                placeholder={t("contact.email")}
                required
              />
            </div>
            <div>
              <textarea
                rows={10}
                name="msg"
                type="text"
                placeholder={t("contact.message")}
                required
              />
            </div>

            <button type="submit">{t("contact.send")}</button>
          </form>
        )}
      </section>
    );
  }
}

export default withTranslation()(Form);
