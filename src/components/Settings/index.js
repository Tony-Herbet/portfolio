import React from 'react';
import PropTypes from 'prop-types';

import { FaPalette, FaImage  } from "react-icons/fa";
import { GithubPicker } from 'react-color';

import SettingsStyled from './SettingsStyled';
import FrameHeader from 'containers/FrameHeader';

const Settings = ({
  settings,
  categoryFocused,
  focusCategoryTab,
  changeThemeStyle,
  themeStyle,
  changeAccentColor,
}) => {
  const handleThemeSelect = (event) => {
    const themeSelected = event.target.value
    if(themeSelected === 'dark' || themeSelected === 'light') {
      changeThemeStyle(themeSelected)
    }
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
              <div>Current color:</div>
              <div className='accent-square-display' />
              <GithubPicker onChangeComplete={(color) => changeAccentColor(color.hex)} />
            </>
          )}

          {categoryFocused === 'background' && (
            <div className="option option-background">background</div>
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
};

export default Settings;
