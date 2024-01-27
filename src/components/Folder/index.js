import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FolderImage from 'assets/images/icons/folder.svg';
import TxtReaderImage from 'assets/images/icons/txt.svg';
import PdfImage from 'assets/images/icons/pdf.svg'

import FolderStyled from './FolderStyled';
import FrameHeader from 'containers/FrameHeader';
import BrowserAndFolderNav from '../BrowserAndFolderNav';

import { t } from 'helpers';

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
    updateFolderOpenedData(data.Folders.Root);
    openTxtWithFile(data['Presentation.txt']);
    focusFileTab('Presentation.txt');
  }, [data]);

  const handleClick = (name) => {
    folderElementFocused(name)
  };

  const handleDoubleClick = (elm) => {
    if(elm.endsWith('.txt')) {
      // TODO could be mutualize with Terminal
      // Send obj to TxtReader
      // if file already open just focus on TxtReader and tab
      if (filesOpen.find((file) => file === data[elm])) {
        focusOn('txtReader');
        focusFileTab(data[elm].name);
      }
      // else send file to txtReader and focus tab
      else {
        openTxtWithFile(data[elm]);
        focusFileTab(data[elm].name);
      }
    }
    else if(elm.endsWith('.pdf')) {
      openPdfWithFile()
    }  
    // It's a folder
    else {
      // We open the pdf reader
      updateFolderOpenedData(data.Folders[elm])
    }
  };

  const handleBack = () => {
    if(folderOpenedData.name === 'Projets' || folderOpenedData.name === 'Diplomes') {
      updateFolderOpenedData(data.Folders['Root']);
      folderElementFocused('')
    }
  };

  const handleFocus = () => {
    focusOn('folder');
  };
  
  return (
    <FolderStyled className="frame-container" folder={folder} onClick={handleFocus}>
      <FrameHeader identifier="folder" name={t('folder_frameHeader_name', language)} icon="folder" />
        <div className="frame-inside">
          <BrowserAndFolderNav where='folder' handleBack={handleBack} folderOpenedData={folderOpenedData} />
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
                    elm.endsWith('.pdf') ? PdfImage : FolderImage
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
  language: PropTypes.string.isRequired,
};

export default Folder;
