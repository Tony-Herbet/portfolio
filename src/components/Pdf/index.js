import React from 'react';
import PropTypes from 'prop-types';

import PdfStyled from './PdfStyled';
import FrameHeader from 'containers/FrameHeader';
import CV from '../../assets/CV_2023-09-11_Tony_Herbet_Le_Faucheur.pdf'

const Pdf = ({
  pdf,
}) => (
  <PdfStyled className="frame-container" pdf={pdf}>
    <FrameHeader identifier="pdf" name="Clay Gymnast Reader" icon="pdf" />
    <div className="frame-inside">
      <object className="CV" data={CV}>
        <p className='pdf-text'>
          It appears you can't read this PDF file. You can <a href={CV} >click here to see or download this PDF file.</a>
        </p>
      </object>
    </div>
  </PdfStyled>
);

Pdf.propTypes = {
  pdf: PropTypes.object.isRequired,
};

export default Pdf;
