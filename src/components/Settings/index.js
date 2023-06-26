import React from 'react';
import PropTypes from 'prop-types';

import SettingsStyled from './SettingsStyled';
import FrameHeader from 'containers/FrameHeader';

const Settings = ({
  settings,
}) => (
  <SettingsStyled className="frame-container" settings={settings}>
    <FrameHeader identifier="settings" name="Settings" />
    <div className="frame-inside" />
  </SettingsStyled>
);

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default Settings;
