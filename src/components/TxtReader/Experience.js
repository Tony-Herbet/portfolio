import React from "react";
import PropTypes from "prop-types";

import { t } from "helpers";

const Experience = ({ text, language }) => (
  <div className="experience-container">
    <p>
      <span>{t("experiences_role", language)}</span>
      {text.role}
    </p>
    <br></br>
    <p>
      <span>{t("experiences_date", language)}</span>
      {text.date}
    </p>
    <br></br>
    <p>
      <span>{t("experiences_type", language)}</span>
      {text.type}
    </p>
    <br></br>
    <p>
      <span>{t("experiences_team", language)}</span>
      {text.team}
    </p>
    <br></br>
    <p>
      <span>{t("experiences_tech", language)}</span>
      {text.tech}
    </p>
    <br></br>
    <p className="experience-description-container">
      <span>{t("experiences_description", language)}</span>
      <p dangerouslySetInnerHTML={{ __html: text.description }}></p>
    </p>
    <br></br>
    {text.github && (
      <p>
        <span>{t("experiences_github", language)}</span>
        <a
          href={text.github}
          target="_blank"
          rel="noopener noreferrer"
          className="txtReader-link"
        >
          {text.github}
        </a>
      </p>
    )}
    <br></br>
    {text.link && (
      <p>
        <span>{t("experiences_link", language)}</span>
        <a
          href={text.link}
          target="_blank"
          rel="noopener noreferrer"
          className="txtReader-link"
        >
          {text.name}
        </a>
      </p>
    )}
  </div>
);

Experience.propTypes = {
  text: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default Experience;
