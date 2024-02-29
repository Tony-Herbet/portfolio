import React from "react";
import PropTypes from "prop-types";

import PdfStyled from "./PdfStyled";
import FrameHeader from "containers/FrameHeader";
import CV from "../../assets/CV_2023-09-11_Tony_Herbet_Le_Faucheur.pdf";

import { t, handleFocusMutualize } from "../../helpers";

const Pdf = ({ pdf, focusOn, language }) => {
  const handleFocus = () => {
    handleFocusMutualize(pdf.minimize, focusOn, "pdf");
  };

  return (
    <PdfStyled className="frame-container" pdf={pdf} onClick={handleFocus}>
      <FrameHeader identifier="pdf" name="Clay Gymnast Reader" />
      <div className="frame-inside" onClick={handleFocus}>
        <object
          className="pdf-object"
          data={CV}
          type="application/pdf"
          aria-label="PDF Viewer"
        >
          <p>
            {t("pdf_error_text_1", language)}
            <a href={CV}>{t("pdf_error_text_2", language)}</a>
          </p>
        </object>
        <div className="overlay">
          {/* 
            This overlay enable the onClick in the iframe when it's not focus.
            On the other hand when it's focus we can't interact with the iframe (scrolling for exemple) so we are changing the css to not display this overlay when it's focus.
          */}
        </div>
      </div>
    </PdfStyled>
  );
};

Pdf.propTypes = {
  pdf: PropTypes.object.isRequired,
  focusOn: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Pdf;
