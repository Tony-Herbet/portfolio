import React from 'react';
import styled from 'styled-components';

import background from '../../assets/images/ubuntu-background.png';

import Taskbar from '../../containers/Taskbar';
import Terminal from '../../containers/Terminal';
import Browser from '../../containers/Browser';
import Folder from '../../containers/Folder';
import TxtReader from '../../containers/TxtReader';
import Settings from '../../containers/Settings';
import data from '../../assets/data';
import './styles.scss';

const AppStyled = styled.div`
    font-family: sans-serif;
    margin: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    min-height: 100%;
    min-width: 100%;

  .app {
    ${'' /* padding: 4.5rem 0.8rem 1rem; */}
  }
`;

const App = () => (
  <AppStyled>
    <div className="app">
      <Taskbar />
      <Browser />
      <Terminal data={data} />
      <Folder />
      <TxtReader />
      <Settings />
    </div>
  </AppStyled>
);

export default App;
