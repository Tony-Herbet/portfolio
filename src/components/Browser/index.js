import React from 'react';
import PropTypes from 'prop-types';
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  MoreVertical,
  Star,
  Lock,
} from 'react-feather';

import BrowserStyled from './BrowserStyled';
import FrameHeader from '../../containers/FrameHeader';

const Browser = ({
  browser,
}) => (
  <BrowserStyled className="frame-container" browser={browser}>
    <FrameHeader identifier="browser" name="Navigateur" />
    <div className="frame-inside">
      <div className="browser-nav">
        <div className="nav-icons">
          <ArrowLeft className="nav-arrow icon" />
          <ArrowRight className="nav-arrow icon" />
          <RotateCw className="icon" />
        </div>
        <div className="adressBar">
          <Lock className="icon" />
          <p className="url">
            https://portfolio
          </p>
          <Star className="icon icon-star" />
        </div>
        <MoreVertical className="icon" />
      </div>
      { browser.focus && (
        <iframe className="video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" loading="lazy" />
      )}
    </div>
  </BrowserStyled>
);

Browser.propTypes = {
  browser: PropTypes.object.isRequired,
};

export default Browser;
