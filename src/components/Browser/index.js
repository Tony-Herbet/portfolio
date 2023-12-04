import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRotateRight, FaArrowLeft, FaArrowRight, FaLock } from "react-icons/fa6";
import { IoStarOutline  } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

import BrowserStyled from './BrowserStyled';
import FrameHeader from 'containers/FrameHeader';

const Browser = ({
  browser,
}) => (
  <BrowserStyled className="frame-container" browser={browser}>
    <FrameHeader identifier="browser" name="Copium" />
    <div className="frame-inside">
      <div className="browser-nav">
        <div className="nav-icons">
          <FaArrowLeft className="nav-arrow icon" />
          <FaArrowRight className="nav-arrow icon" />
          <FaArrowRotateRight className="icon" />
        </div>
        <div className="adressBar">
          <FaLock className="icon" />
          <p className="url">
            https://tony-herbet.github.io/p3fc/
          </p>
          <IoStarOutline className="icon icon-star" />
        </div>
        <BsThreeDotsVertical className="icon" />
      </div>
      { browser.focus && (
        <iframe className="iframe" src="https://tony-herbet.github.io/p3fc/" title="p3fc" />
      )}
    </div>
  </BrowserStyled>
);

Browser.propTypes = {
  browser: PropTypes.object.isRequired,
};

export default Browser;
