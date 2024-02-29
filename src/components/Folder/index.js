import React, { useEffect } from "react";
import PropTypes from "prop-types";

import FolderImage from "assets/images/icons/folder.svg";
import TxtReaderImage from "assets/images/icons/txt.svg";
import PdfImage from "assets/images/icons/pdf.svg";

import FolderStyled from "./FolderStyled";
import FrameHeader from "containers/FrameHeader";
import BrowserAndFolderNav from "../BrowserAndFolderNav";

import { t, openFile } from "helpers";

const Folder = ({
  folder,
  data,
  openPdfWithFile,
  filesOpen,
  focusOn,
  focusFileTab,
  openTxtWithFile,
  folderElementFocused,
  elementFocused,
  updateFolderOpenedData,
  folderOpenedData,
  language,
}) => {
  useEffect(() => {
    // Initial datas
    if (filesOpen.length === 0) {
      // The condition is to prevent presentation to be added more than once in development
      updateFolderOpenedData(data.Folders.Root);
      openTxtWithFile(data["presentation_name"]);
      focusFileTab("presentation_name");
    }
  }, [data]);

  const handleClick = (elmName) => {
    folderElementFocused(elmName);
  };

  const handleDoubleClick = (elm) => {
    if (t(elm, language).endsWith(".txt")) {
      openFile(filesOpen, data[elm], focusFileTab, openTxtWithFile);
    } else if (t(elm, language).endsWith(".pdf")) {
      // We open the pdf reader
      openPdfWithFile();
    }
    // It's a folder
    else {
      updateFolderOpenedData(data.Folders[elm]);
    }
  };

  const handleBack = () => {
    if (folderOpenedData.name === "experiences_name") {
      updateFolderOpenedData(data.Folders["Root"]);
      folderElementFocused("");
    }
  };

  const handleFocus = () => {
    focusOn("folder");
  };

  return (
    <FolderStyled
      className="frame-container"
      folder={folder}
      onClick={handleFocus}
    >
      <FrameHeader
        identifier="folder"
        name={t("folder_frameHeader_name", language)}
      />
      <div className="frame-inside">
        <BrowserAndFolderNav
          where="folder"
          handleBack={handleBack}
          folderOpenedData={folderOpenedData}
          language={language}
        />
        <div className="folders-container">
          {folderOpenedData.content &&
            folderOpenedData.content.map((elm) => (
              <div
                key={elm}
                className={
                  elementFocused === elm
                    ? "folder-idem-focused folder-item"
                    : "folder-item"
                }
                onClick={() => handleClick(elm)}
                onDoubleClickCapture={() => handleDoubleClick(elm)}
              >
                <img
                  className="type-icon"
                  src={
                    t(elm, language).endsWith(".txt")
                      ? TxtReaderImage
                      : t(elm, language).endsWith(".pdf")
                      ? PdfImage
                      : FolderImage
                  }
                />
                <p className="file-name">
                  <span>{t(elm, language)}</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </FolderStyled>
  );
};

Folder.propTypes = {
  folder: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  openPdfWithFile: PropTypes.func.isRequired,
  filesOpen: PropTypes.array.isRequired,
  focusOn: PropTypes.func.isRequired,
  openTxtWithFile: PropTypes.func.isRequired,
  focusFileTab: PropTypes.func.isRequired,
  folderElementFocused: PropTypes.func.isRequired,
  elementFocused: PropTypes.string.isRequired,
  updateFolderOpenedData: PropTypes.func.isRequired,
  folderOpenedData: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};

export default Folder;
