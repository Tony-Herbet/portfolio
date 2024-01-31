import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import LanguageMenuStyled from './LanguageMenu';

import { t } from '../../helpers'

const LanguageMenu = ({
  languageMenuOpen,
  handleLanguageMenuState,
  language,
  changeLanguage,
}) => {
  const selectRef = useRef(null);
  
  // This is use to mimic the behavior of a select menu
  const handleDocumentClick = (event) => {
    // Check if the click is outside the custom select menu
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      handleLanguageMenuState(false);
      // Clean event listener
      document.removeEventListener('click', handleDocumentClick);
    }
  };

  useEffect(() => {
    if(languageMenuOpen) {
      // Add event listener to the document body when the component mounts
      document.addEventListener('click', handleDocumentClick);
    }
  }, [languageMenuOpen]);

  const handleLanguageSelection = () => {
    if(languageMenuOpen) {
      handleLanguageMenuState(false);
    } 
    else if(!languageMenuOpen) {
      handleLanguageMenuState(true);
    }
  };

  const handleLanguageOption = (e) => {
    changeLanguage(e.currentTarget.id);
    handleLanguageMenuState(false);
  };

  return (
    <LanguageMenuStyled className='languageMenu-container' ref={selectRef}>
      <p className='languageMenu-language' onClick={handleLanguageSelection} >
        {language}
      </p>
      {languageMenuOpen && (
        <div className='languageMenu-select'>
          <div className={language === 'FRA' ? 'languageMenu-option selected' : 'languageMenu-option'} id="FRA" onClick={handleLanguageOption} >
            <span>FRA</span> {t('language_option_fra', language)}
          </div>
          <div className={language === 'ENG' ? 'languageMenu-option selected' : 'languageMenu-option'} id="ENG" onClick={handleLanguageOption} >
            <span>ENG</span> {t('language_option_eng', language)}
          </div>
        </div>
      )}
    </LanguageMenuStyled>
  );
};

LanguageMenu.propTypes = {
  languageMenuOpen: PropTypes.bool.isRequired,
  handleLanguageMenuState: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,

};

export default LanguageMenu;
