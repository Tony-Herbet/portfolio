import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FaArrowRotateRight, FaArrowLeft, FaArrowRight, FaLock } from "react-icons/fa6";
import FolderImage from 'assets/images/icons/folder.svg';
import TxtReaderImage from 'assets/images/icons/txt.svg';
import ClayGymnastReaderImage from 'assets/images/icons/pdf.svg'

import FolderStyled from './FolderStyled';
import FrameHeader from 'containers/FrameHeader';

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
  folderOpenedData
}) => {
  useEffect(() => {
    // Initial data
    updateFolderOpenedData(data.Folders.Root)
  }, [data]);

  const handleClick = (name) => {
    folderElementFocused(name)
  }

  const handleDoubleClick = (elm) => {
    console.log(elm)
    if(elm.endsWith('.txt')) {
      // TODO could be mutulize with Terminal
      // Send obj to TxtReader
      // if file already open just focus on TxtReader and tab
      if (filesOpen.find((file) => file === elm.content[0])) {
        focusOn('txtReader');
        focusFileTab(elm.content[0].name);
      }
      // else send file to txtReader and focus tab
      else {
        openTxtWithFile(elm.content[0]);
        focusFileTab(elm.content[0].name);
      }
    }
    else if(elm.endsWith('.pdf')) {
      openPdfWithFile()
    }  
    // It's a folder
    else {
      updateFolderOpenedData(data.Folders[elm])
      // We open the pdf reader
    }
  }
  
  return (
    <FolderStyled className="frame-container" folder={folder}>
      <FrameHeader identifier="folder" name="Folder" />
      <div className="frame-inside">
        {/* TODO mutualize with browser and remove unused elements */}
        <div className="folder-nav">
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
          </div>
        </div>
        <div className='folders-container'>
          {folderOpenedData.content && folderOpenedData.content.map(elm => 
            <div 
              key={elm}
              className={elementFocused === elm ? 'folder-idem-focused folder-item' : 'folder-item'}
              onClick={() => handleClick(elm)}
              onDoubleClickCapture={() => handleDoubleClick(elm)}
            >
              <img 
                className='type-icon'
                src={
                  elm.endsWith('.txt') ? TxtReaderImage :
                  elm.endsWith('.pdf') ? ClayGymnastReaderImage : FolderImage
                }
              />
              <p>{elm}</p>
            </div>
          )}
        </div>
      </div>
    </FolderStyled>
  );
}

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
};

export default Folder;
