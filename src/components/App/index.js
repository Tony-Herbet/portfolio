import React from 'react';
import PropTypes from 'prop-types';
import {styled, ThemeProvider} from 'styled-components';

import background from 'assets/images/ubuntu-background.png';

import Taskbar from 'containers/Taskbar';
import Terminal from 'containers/Terminal';
import Browser from 'containers/Browser';
import Folder from 'containers/Folder';
import TxtReader from 'containers/TxtReader';
import Settings from 'containers/Settings';
import Pdf from 'containers/Pdf';
import Mail from 'containers/Mail';
import data from 'assets/data';

const AppStyled = styled.div`

  font-family: sans-serif;
  margin: 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  min-height: 100%;
  min-width: 100%;

  .frame-container {
  background-color: ${props => props.theme.colors[props.theme.themeStyle].main};
  box-shadow: 0 0 1rem ${props => props.theme.colors.highlight};
}

  .frame-inside {
    background-color: ${props => props.theme.colors[props.theme.themeStyle].secondary};
    height: 100%;
    margin: 0.3rem;
    display: flex;
    flex-direction: column;
  }

  .app {
    color: ${props => props.theme.colors[props.theme.themeStyle].text}
  }
`;

const App = ({theme}) => (
  <ThemeProvider theme={theme}>
    <AppStyled>
      <div className="app">
        <Taskbar />
        <Browser />
        <Terminal data={data} />
        <Folder />
        <TxtReader />
        <Settings />
        <Pdf />
        <Mail />
      </div>
    </AppStyled>
  </ThemeProvider>
);

App.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default App;
