import React from 'react';
import PropTypes from 'prop-types';
import {styled, ThemeProvider, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import Taskbar from 'containers/Taskbar';
import Terminal from 'containers/Terminal';
import Browser from 'containers/Browser';
import Folder from 'containers/Folder';
import TxtReader from 'containers/TxtReader';
import Settings from 'containers/Settings';
import Pdf from 'containers/Pdf';
import Mail from 'containers/Mail';
import Landing from 'components/Landing';
import Loader from 'components/Loader';

import { handleCurrentBackground } from 'helpers'

const AppStyled = styled.div`

  font-family: sans-serif;
  margin: 0;
  background-image: url(${props =>  
    handleCurrentBackground(props.theme.background)
  });
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100%;
  min-width: 100%;

  .frame-container {
    background-color: ${props => props.theme[props.theme.themeStyle].main};
  }

  .frame-inside {
    background-color: ${props => props.theme[props.theme.themeStyle].secondary};
    height: 100%;
    margin: 0.3rem;
    display: flex;
    flex-direction: column;
  }

  .app {
    color: ${props => props.theme[props.theme.themeStyle].text}
  }
`;

const App = ({theme, landingIsOpen, closeLanding, loading, switchLoading}) => (
  <StyleSheetManager shouldForwardProp={isPropValid} >
    <ThemeProvider theme={theme}>
      <AppStyled>
        <div className="app">
          {landingIsOpen && <Landing closeLanding={closeLanding} switchLoading={switchLoading} />}
          {!landingIsOpen && loading && (
            <Loader switchLoading={switchLoading} />
          )}
          {!landingIsOpen && !loading && (
            <>    
              <Taskbar />
              <Browser />
              <Terminal />
              <Folder />
              <TxtReader />
              <Settings />
              <Pdf />
              <Mail />
            </>
          )}
        </div>
      </AppStyled>
    </ThemeProvider>
  </StyleSheetManager>
);

App.propTypes = {
  theme: PropTypes.object.isRequired,
  landingIsOpen: PropTypes.bool.isRequired,
  closeLanding: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  switchLoading: PropTypes.func.isRequired,
};

export default App;
