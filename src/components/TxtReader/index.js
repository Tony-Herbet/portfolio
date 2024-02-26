import React from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

import TxtReaderStyled from "./TxtReaderStyled";
import FrameHeader from "containers/FrameHeader";
import { t, txtReaderTextComponent } from "../../helpers";

const TxtReader = ({
  txtReader,
  filesOpen,
  closeFileTab,
  tabFocused,
  focusFileTab,
  focusOn,
  language,
}) => {
  const handleTabFocus = (fileName) => {
    focusFileTab(fileName);
  };

  const handleTabClosing = (e, i) => {
    // This is to prevent the click event to also trigger the handleTabFocus which would use the tab we just closed therefore nothing would be displayed
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const newFilesOpen = [];
    filesOpen.forEach((file, index) => {
      if (index !== i) {
        newFilesOpen.push(file);
      }
    });

    // If there are still tabs open
    if (newFilesOpen.length !== 0) {
      // Check to see if the tab focused was closed
      if (!newFilesOpen.find((file) => file.name === tabFocused)) {
        // If so we focus on the first tab
        focusFileTab(newFilesOpen[0].name);
      }
    }

    closeFileTab(newFilesOpen);
  };

  const handleFocus = () => {
    focusOn("txtReader");
  };

  return (
    <TxtReaderStyled
      className="frame-container"
      txtreader={txtReader}
      onClick={handleFocus}
    >
      <FrameHeader identifier="txtReader" name="TxtReader--" icon="txtreader" />
      <div className="frame-inside">
        <div className="txtReader-header">
          <span className="menu-options">{t("txtReader_file", language)}</span>
          <span className="menu-options">{t("txtReader_edit", language)}</span>
          <span className="menu-options">{t("txtReader_view", language)}</span>
          <span className="menu-options">
            {t("txtReader_settings", language)}
          </span>
        </div>
        <div className="txtReader-tabs">
          {filesOpen &&
            filesOpen.map((file, i) => (
              <div
                className={
                  file.name === tabFocused
                    ? "txtReader-tab txtReader-tab_focused"
                    : "txtReader-tab"
                }
                key={file.name}
                onClick={() => handleTabFocus(file.name)}
              >
                {t(file.name, language)}
                <div className="tab-icon-container">
                  <IoClose
                    className="tab-icon"
                    onClick={(e) => handleTabClosing(e, i)}
                  />
                </div>
              </div>
            ))}
        </div>
        {filesOpen &&
          filesOpen.map((file) =>
            file.name === tabFocused ? (
              // Only show focused file text
              <div className="txtReader-content" key={file.name}>
                {txtReaderTextComponent(
                  file.name,
                  t(file.text, language),
                  language
                )}
              </div>
            ) : (
              ""
            )
          )}
      </div>
    </TxtReaderStyled>
  );
};

TxtReader.propTypes = {
  txtReader: PropTypes.object.isRequired,
  filesOpen: PropTypes.array.isRequired,
  closeFileTab: PropTypes.func.isRequired,
  tabFocused: PropTypes.string.isRequired,
  focusFileTab: PropTypes.func.isRequired,
  focusOn: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default TxtReader;
