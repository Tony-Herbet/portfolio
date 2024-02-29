import React from "react";
import PropTypes from "prop-types";

import MailStyled from "./MailStyled";
import FrameHeader from "containers/FrameHeader";

import { t, handleFocusMutualize } from "../../helpers";

const Mail = ({
  mail,
  form,
  updateForm,
  sendEmail,
  error,
  success,
  updateError,
  updateSuccess,
  focusOn,
  language,
}) => {
  const handleChange = (event) => {
    const { value, name } = event.target;
    updateForm(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = form;

    if (email === "" || name === "" || message === "") {
      updateError("mail_fields_error");
      updateSuccess(false);
    } else if (event.target["email"].checkValidity()) {
      sendEmail();
    }
  };

  const handleFocus = () => {
    handleFocusMutualize(mail.minimize, focusOn, "mail");
  };

  return (
    <MailStyled className="frame-container" mail={mail} onClick={handleFocus}>
      <FrameHeader identifier="mail" name="Fmail" />
      <div className="frame-inside">
        <form onSubmit={handleSubmit} id="form">
          <h1>{t("mail_title", language)}</h1>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("mail_name", language)}
              className="name"
              autoFocus
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("mail_email", language)}
              className="email"
              autoFocus
            />
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="message"
            placeholder={t("mail_message", language)}
            autoFocus
          />
          <div className="form-end">
            <input
              type="submit"
              value={t("mail_send_button", language)}
              className="submit"
            />
            {error && (
              <div className="error form-end-messages">
                {t("mail_error", language)}
              </div>
            )}
            {success && (
              <div className="success form-end-messages">
                {t("mail_success", language)}
              </div>
            )}
            {!error && !success && (
              <a
                className="form-end-messages mailto"
                href="mailto:herbet.le.faucheur.tony@gmail.com"
              >
                {t("mail_mailto_text", language)}
              </a>
            )}
          </div>
        </form>
      </div>
    </MailStyled>
  );
};

Mail.propTypes = {
  mail: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  updateForm: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  updateError: PropTypes.func.isRequired,
  updateSuccess: PropTypes.func.isRequired,
  focusOn: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Mail;
