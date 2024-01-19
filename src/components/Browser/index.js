import React from 'react';
import PropTypes from 'prop-types';

import BrowserStyled from './BrowserStyled';
import FrameHeader from 'containers/FrameHeader';
import BrowserAndFolderNav from '../BrowserAndFolderNav'

const Browser = ({
  browser,
}) => (
  <BrowserStyled className="frame-container" browser={browser}>
    <FrameHeader identifier="browser" name="Copium" icon="browser" />
    <div className="frame-inside">
      <BrowserAndFolderNav where='browser' />
      { browser.focus && (
        <iframe className="iframe" src="https://tony-herbet.github.io/p3fc/" title="p3fc" loading="lazy" />
      )}
    </div>
  </BrowserStyled>
);

Browser.propTypes = {
  browser: PropTypes.object.isRequired,
};

export default Browser;
