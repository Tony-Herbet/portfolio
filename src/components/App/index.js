import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import AppStyled from "./AppStyled";
import Taskbar from "containers/Taskbar";
import Terminal from "containers/Terminal";
import Browser from "containers/Browser";
import Folder from "containers/Folder";
import TxtReader from "containers/TxtReader";
import Settings from "containers/Settings";
import Pdf from "containers/Pdf";
import Mail from "containers/Mail";
import Landing from "containers/Landing";
import Loader from "containers/Loader";

import { handleCurrentBackground } from "helpers";
import { backgroundNames, validColors } from "constants";

const App = ({
  theme,
  landingIsOpen,
  loading,
  transition,
  changeAccentColor,
  changeBackground,
}) => {
  useEffect(() => {
    // Use the previously used settings if they are saved in the localStorage, else the initialState will be used
    const previousAccent = window.localStorage.getItem("accent");
    if (validColors.find((color) => color === previousAccent)) {
      changeAccentColor(previousAccent);
    }

    const previousBackground = window.localStorage.getItem("background");
    if (
      backgroundNames.find(
        (backgroundName) => backgroundName === previousBackground
      )
    ) {
      changeBackground(previousBackground);
    }
  }, []);
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <AppStyled
          transition={transition}
          handleCurrentBackground={handleCurrentBackground}
        >
          <div className="app">
            {landingIsOpen && <Landing />}
            {!landingIsOpen && loading && <Loader />}
            {!landingIsOpen && !loading && (
              <>
                <Taskbar />
                {window.innerWidth >= 1024 && (
                  // This makes the DOM cleaner
                  <>
                    <Browser />
                    <Terminal />
                    <Folder />
                    <TxtReader />
                    <Settings />
                  </>
                )}
                <Pdf />
                <Mail />
              </>
            )}
          </div>
        </AppStyled>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

App.propTypes = {
  theme: PropTypes.object.isRequired,
  landingIsOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  transition: PropTypes.bool.isRequired,
  changeAccentColor: PropTypes.func.isRequired,
  changeBackground: PropTypes.func.isRequired,
};

export default App;
