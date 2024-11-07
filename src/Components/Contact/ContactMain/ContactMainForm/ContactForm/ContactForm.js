import { useState } from "react";
import "../Form/Form.scss";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("");

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
          console.log("sucess");
          setFormStatus("success");
        } else {
          console.log("er");
          setFormStatus("error");
        }
      })
      .catch(() => {
        setFormStatus("error");
        console.log("errrr");
      });
  }
  return (
    <section className="form">
      {formStatus ? (
        <p className={formStatus}>
          {formStatus === "success"
            ? "Wiadomość została wysłana pomyślnie!"
            : "Wystąpił błąd podczas wysyłania wiadomości. Skontaktuj się telefonicznie lub spróbuj jeszcze raz"}
        </p>
      ) : (
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Imię"
              required
            />
          </div>

          <div>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Mail"
              required
            />
          </div>
          <div>
            <textarea
              rows={10}
              name="message"
              type="text"
              placeholder="Wiadomość"
              required
            />
          </div>
          <button type="submit">Wyślij</button>
        </form>
      )}
    </section>
  );
}
