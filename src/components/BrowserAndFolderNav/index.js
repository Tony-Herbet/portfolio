import React from 'react';
import PropTypes from 'prop-types';

import { FaArrowRotateRight, FaArrowLeft, FaArrowRight, FaLock } from "react-icons/fa6";
import { IoStarOutline  } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

import BrowserAndFolderNavStyled from './BrowserAndFolderNavStyled';

const BrowserAndFolderNav = ({
  where,
  folderOpenedData,
  handleBack
}) => {  
  const handleClick = () => {
    if(where === 'folder') {
      handleBack()
    }
  }

  return (
    <BrowserAndFolderNavStyled>
      <div className="nav">
        <div className="nav-icons">
          <div className='arrow-left'>
            <FaArrowLeft className="icon" onClick={handleClick}/>
          </div>
          <div>
            <FaArrowRight className="icon" />
          </div>
          <div>
            <FaArrowRotateRight className="icon" />
          </div> 
        </div>
        <div className="adressBar">
          <div className="url">
            {
              (where === 'folder') && (
                <p>
                  C:\{`${folderOpenedData.name === 'Root' ? '' : folderOpenedData.name}`}
                </p>
              ) 
            }
            {
              (where === 'browser') && (
                <div className='browser-url-inside'>
                  <div>
                    <FaLock className="icon icon-lock" />
                    <p>
                      https://tony-herbet.github.io/p3fc/
                    </p>
                  </div>
                  <IoStarOutline className="icon icon-star" />
                </div>
              ) 
            }
          </div>
        </div>
        {
          (where === 'browser') && (
            <BsThreeDotsVertical className="icon" />
          )
        }
      </div>
    </BrowserAndFolderNavStyled>
  );
}

BrowserAndFolderNav.propTypes = {
  where: PropTypes.string.isRequired,
  folderOpenedData: PropTypes.object,
  handleBack: PropTypes.func,
};

export default BrowserAndFolderNav;