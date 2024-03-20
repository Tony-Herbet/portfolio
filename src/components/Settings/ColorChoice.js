import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const ColorChoiceStyled = styled.div`
  background-color: ${(props) => props.color};
  height: 25px;
  width: 25px;
  border: transparent solid 2px;
  margin: 1px;

  &:hover {
    border-color: ${(props) =>
      props.theme.themeStyle === "light"
        ? props.theme["light"].text
        : "rgb(255, 255, 255)"}
`;

const ColorChoice = ({ color, changeAccentColor }) => (
  <ColorChoiceStyled color={color} onClick={() => changeAccentColor(color)} />
);

ColorChoice.propTypes = {
  color: PropTypes.string.isRequired,
  changeAccentColor: PropTypes.func.isRequired,
};

export default ColorChoice;
