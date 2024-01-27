import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FaPalette, FaImage  } from "react-icons/fa";
import { GithubPicker } from 'react-color';

import SettingsStyled from './SettingsStyled';
import FrameHeader from 'containers/FrameHeader';

import background1 from 'assets/images/backgrounds/1.png';
import background2 from 'assets/images/backgrounds/2.jpg';
import background3 from 'assets/images/backgrounds/3.jpg';
import background4 from 'assets/images/backgrounds/4.jpg';

import { handleCurrentBackground, t } from 'helpers'

const Settings = ({
  settings,
  categoryfocused ,
  focusCategoryTab,
  changeThemeStyle,
  themeStyle,
  changeAccentColor,
  changeBackground,
  background,
  focusOn,
  language,
}) => {
  // Pre load the images
  useEffect(() => {
    const backgrounds = [background1, background2, background3, background4];
    backgrounds.forEach((background) => {
      new Image().src = background;
    });
  }, []);

  const handleThemeSelect = (event) => {
    const themeSelected = event.target.value
    if(themeSelected === 'dark' || themeSelected === 'light') {
      changeThemeStyle(themeSelected)
    }
  };

  const handleBackgroundClick = (event) => {
    changeBackground(event.target.name)
  };

  const handleFocus = () => {
    focusOn('settings');
  };

  return (
    <SettingsStyled className="frame-container" settings={settings} categoryfocused={categoryfocused} onClick={handleFocus}>
      <FrameHeader identifier="settings" name={t('settings_frameHeader_name', language)} icon="settings" />
      <div className="frame-inside settings-frame-inside">
        <div className="categories" >
          <div className="categorie categorie-colors" id="colors" onClick={() => focusCategoryTab('colors')}>
            <FaPalette />
            <p>{t('settings_tab_colors', language)}</p>
          </div> 
          <div className="categorie categorie-background" id="background" onClick={() => focusCategoryTab('background')}>
            <FaImage  />
            <p>{t('settings_tab_background', language)}</p>
          </div> 
        </div>
        <div className="options" >
          {categoryfocused  === 'colors' && (
            <>
              <label htmlFor="theme-select">{t('settings_theme_label', language)}</label>
              <select className="theme-select" id="theme-select" onChange={handleThemeSelect} value={themeStyle} >
                <option value="dark">{t('settings_theme_dark', language)}</option>
                <option value="light">{t('settings_theme_light', language)}</option>
              </select>
              <p>{t('settings_theme_accent_choice', language)}</p>
              <GithubPicker onChangeComplete={(color) => changeAccentColor(color.hex)} />
              <div>{t('settings_theme_accent_current', language)}</div>
              <div className='accent-square-display' />
            </>
          )}

          {categoryfocused  === 'background' && (
            <>
              <div className='option-background-text'>{t('settings_theme_background_current', language)}</div>
              <img className='settings-images' src={handleCurrentBackground(background)} />
              
              <p className='option-background-text'>{t('settings_theme_background_choice', language)}</p>
              <div className='settings-images-container'>
                <img className='settings-images' src={background1} name="background1" onClick={handleBackgroundClick} />
                <img className='settings-images' src={background2} name="background2" onClick={handleBackgroundClick} />
                <img className='settings-images' src={background3} name="background3" onClick={handleBackgroundClick} />
                <img className='settings-images' src={background4} name="background4" onClick={handleBackgroundClick} />
              </div>
            </>
          )}
        </div>
      </div>
    </SettingsStyled>
  )
};

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  categoryfocused : PropTypes.string.isRequired,
  focusCategoryTab: PropTypes.func.isRequired,
  changeThemeStyle: PropTypes.func.isRequired,
  changeAccentColor: PropTypes.func.isRequired,
  themeStyle: PropTypes.string.isRequired,
  changeBackground: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
  focusOn: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Settings;
