import React from "react";
import PropTypes from "prop-types";

import BrowserStyled from "./BrowserStyled";
import FrameHeader from "containers/FrameHeader";
import BrowserAndFolderNav from "../BrowserAndFolderNav";

import { handleFocusMutualize } from "helpers";

const Browser = ({ browser, focusOn }) => {
  const handleFocus = () => {
    handleFocusMutualize(browser.minimize, focusOn, "browser");
  };

  return (
    <BrowserStyled
      className="frame-container"
      browser={browser}
      onClick={handleFocus}
    >
      <FrameHeader identifier="browser" name="Bronze" />
      <div className="frame-inside">
        <BrowserAndFolderNav where="browser" />
        <iframe
          className="iframe"
          src="https://tony-herbet.github.io/p3fc/"
          title="p3fc"
          loading="lazy"
        />
      </div>
      <div className="overlay">
        {/* 
          This overlay enable the onClick in the iframe when it's not focus.
          On the other hand when it's focus we can't interact with the iframe (scrolling for exemple) so we are changing the css to not display this overlay when it's focus.
        */}
      </div>
    </BrowserStyled>
  );
};

Browser.propTypes = {
  browser: PropTypes.object.isRequired,
  focusOn: PropTypes.func.isRequired,
};

export default Browser;
