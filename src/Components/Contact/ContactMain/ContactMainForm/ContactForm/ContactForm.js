import { useState } from "react";
import "../Form/Form.scss";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("");
  const { t } = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();

    setFormStatus("");

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setFormStatus("success");
        } else {
          setFormStatus("error");
        }
      })
      .catch(() => {
        setFormStatus("error");
      });
  }
  return (
    <section className="form">
      {formStatus && (
        <p className={formStatus}>
          {formStatus === "success"
            ? t("contact.successMessage")
            : t("contact.errorMessage")}
        </p>
      )}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
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
            name="email"
            id="email"
            type="email"
            placeholder={t("contact.email")}
            required
          />
        </div>
        <div>
          <textarea
            rows={10}
            name="message"
            type="text"
            placeholder={t("contact.message")}
            required
          />
        </div>
        <button type="submit" disabled={formStatus}>
          {t("contact.send")}
        </button>
      </form>
    </section>
  );
}
