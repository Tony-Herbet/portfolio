import React from 'react';
import PropTypes from 'prop-types';

import PdfStyled from './PdfStyled';
import FrameHeader from 'containers/FrameHeader';
import CV from '../../assets/CV_2023-09-11_Tony_Herbet_Le_Faucheur.pdf'

const Pdf = ({
  pdf,
  focusOn
}) => {
  const handleFocus = () => {
    focusOn('pdf')
  };

  return (
    <PdfStyled className="frame-container" pdf={pdf} onClick={handleFocus}>
      <FrameHeader identifier="pdf" name="Clay Gymnast Reader" icon="pdf" />
      <div className="frame-inside" onClick={handleFocus}>
        <iframe className="iframe" src={CV} title="CV" loading="lazy" />
        <div className="overlay">
          {/* 
            This overlay enable the onClick in the iframe when it's not focus.
            On the other hand when it's focus we can't interact with the iframe (scrolling for exemple) so we are changing the css to not display this overlay when it's focus.
          */}
        </div>
      </div>
    </PdfStyled>
  );
}

Pdf.propTypes = {
  pdf: PropTypes.object.isRequired,
  focusOn: PropTypes.func.isRequired,
};

export default Pdf;
