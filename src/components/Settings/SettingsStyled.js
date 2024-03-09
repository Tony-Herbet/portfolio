import styled from "styled-components";

const SettingsStyled = styled.div`
  display: ${(props) => {
    if (props.settings.running) {
      return "flex";
    }
    return "none";
  }};

  z-index: ${(props) => props.settings.zIndex};

  /* Mimic resize visual effects */
  top: ${(props) => {
    // Maximize
    if (props.settings.maximize) {
      return "50px";
    }
    // Minimize
    else if (props.settings.running && props.settings.minimize) {
      return "-100vh";
    }
    // Default
    else {
      return `${props.settings.y}px`;
    }
  }};
  left: ${(props) => {
    // Maximize
    if (props.settings.maximize) {
      return "0";
    }
    // Minimize
    else if (props.settings.running && props.settings.minimize) {
      return "50vw";
    }
    // Default
    else {
      return `${props.settings.x}px`;
    }
  }};
  width: ${(props) => {
    // Maximize
    if (props.settings.maximize) {
      return "100vw";
    }
    // Minimize
    else if (props.settings.running && props.settings.minimize) {
      return "0%";
    }
    // Default
    else {
      return `${props.settings.width}vw`;
    }
  }};
  height: ${(props) =>
    props.settings.maximize
      ? "calc(100vh - 52px)"
      : `${props.settings.height}vh`};

  opacity: ${(props) =>
    props.settings.minimize ? "0" : "1"}; /* Mimic fade in-out */

  /* Border when maximize */
  border: solid 2px
    ${(props) => (props.settings.maximize ? "transparent" : props.theme.accent)};
  border-top-left-radius: ${(props) =>
    props.settings.maximize ? 0 : "0.5rem"};
  border-top-right-radius: ${(props) =>
    props.settings.maximize ? 0 : "0.5rem"};

  .settings-frame-inside {
    display: flex;
    flex-direction: row !important;
  }

  .categories {
    width: 200px;
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].tertiary};
  }

  .categorie {
    padding: 0.5rem 0.5rem 0.5rem 0;
    display: flex;
    align-items: center;
    height: 50px;
  }

  .categorie:hover {
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].taskbar.hover};
  }

  .categorie:active {
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].taskbar.hoverFocus};
  }

  .categorie > * {
    margin-left: 0.5rem;
  }

  .categorie-colors {
    border-right: ${(props) =>
        props.categoryfocused === "colors" ? props.theme.accent : "transparent"}
      solid 5px;
  }

  .categorie-background {
    border-right: ${(props) =>
        props.categoryfocused === "background"
          ? props.theme.accent
          : "transparent"}
      solid 5px;
  }

  .options {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].secondary};
    width: 100%;
    max-height: 100%;
  }

  .options > * {
    margin: 0.5rem;
  }

  .theme-select {
    width: 100px;
    color: ${(props) => props.theme[props.theme.themeStyle].text};
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].taskbar.color};
    border: solid 2px ${(props) => props.theme[props.theme.themeStyle].text};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  .theme-select:focus {
    border: solid 2px ${(props) => props.theme.accent};
  }

  .accent-square-display {
    background-color: ${(props) => props.theme.accent};
    height: 25px;
    width: 25px;
    border: rgb(255, 255, 255) solid 2px;
  }

  .settings-images-current {
    cursor: default;
  }

  .settings-images {
    width: 100px;
    height: 100px;
    object-fit: cover; /* Keep aspect ratio */
    margin-right: 0.5rem;
    border: solid transparent 2px;
    cursor: pointer;
  }

  .settings-images-container > *:hover {
    background-color: ${(props) => props.theme.accent};
  }

  .settings-images-container > *:active {
    background-color: rgba(
      ${(props) => {
        const hex = props.theme.accent.replace("#", ""); // Remove the '#' symbol
        const r = parseInt(hex.substring(0, 2), 16); // Convert the first two characters to red value
        const g = parseInt(hex.substring(2, 4), 16); // Convert the next two characters to green value
        const b = parseInt(hex.substring(4, 6), 16); // Convert the last two characters to blue value
        return `${r}, ${g}, ${b}, 0.5`; // Adjust opacity to 0.5
      }}
    );
  }

  @media (width < 1024px) {
    display: none;
  }
`;

export default SettingsStyled;
