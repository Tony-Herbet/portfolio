import React from 'react';
import PropTypes from 'prop-types';

import { FaPalette, FaImage  } from "react-icons/fa";
import { GithubPicker } from 'react-color';

import SettingsStyled from './SettingsStyled';
import FrameHeader from 'containers/FrameHeader';

import background1 from 'assets/images/backgrounds/1.png';
import background2 from 'assets/images/backgrounds/2.jpg';
import background3 from 'assets/images/backgrounds/3.jpg';
import background4 from 'assets/images/backgrounds/4.jpg';

import { handleCurrentBackground } from 'helpers'

const Settings = ({
  settings,
  categoryFocused,
  focusCategoryTab,
  changeThemeStyle,
  themeStyle,
  changeAccentColor,
  changeBackground,
  background
}) => {
  const handleThemeSelect = (event) => {
    const themeSelected = event.target.value
    if(themeSelected === 'dark' || themeSelected === 'light') {
      changeThemeStyle(themeSelected)
    }
  };

  const handleBackgroundClick = (event) => {
    changeBackground(event.target.name)
  };

  return (
    <SettingsStyled className="frame-container" settings={settings} categoryFocused={categoryFocused}>
      <FrameHeader identifier="settings" name="Settings" />
      <div className="frame-inside settings-frame-inside">
        <div className="categories" >
          <div className="categorie categorie-colors" id="colors" onClick={() => focusCategoryTab('colors')}>
            <FaPalette />
            <p> Colors </p>
          </div> 
          <div className="categorie categorie-background" id="background" onClick={() => focusCategoryTab('background')}>
            <FaImage  />
            <p> Background </p>
          </div> 
        </div>
        <div className="options" >
          {categoryFocused === 'colors' && (
            <>
              <label htmlFor="theme-select">Choose your theme</label>
              <select className="theme-select" id="theme-select" onChange={handleThemeSelect} value={themeStyle} >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
              <p>Choose your accent color</p>
              <GithubPicker onChangeComplete={(color) => changeAccentColor(color.hex)} />
              <div>Current color</div>
              <div className='accent-square-display' />
            </>
          )}

          {categoryFocused === 'background' && (
            <div className="option option-background">
              <div>Current background</div>
              <img className='settings-images' src={handleCurrentBackground(background)} />
              
              <p>Choose your background image</p>
              <div className='settings-images-container'>
                <img className='settings-images' src={background1} name="background1" onClick={handleBackgroundClick} />
                <img className='settings-images' src={background2} name="background2" onClick={handleBackgroundClick} />
                <img className='settings-images' src={background3} name="background3" onClick={handleBackgroundClick} />
                <img className='settings-images' src={background4} name="background4" onClick={handleBackgroundClick} />
              </div>
            </div>
          )}
        </div>
      </div>
    </SettingsStyled>
  )
};

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  categoryFocused: PropTypes.string.isRequired,
  focusCategoryTab: PropTypes.func.isRequired,
  changeThemeStyle: PropTypes.func.isRequired,
  changeAccentColor: PropTypes.func.isRequired,
  themeStyle: PropTypes.string.isRequired,
  changeBackground: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
};

export default Settings;
