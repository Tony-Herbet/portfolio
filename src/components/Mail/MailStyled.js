import styled from "styled-components";

const MailStyled = styled.div`
  display: ${(props) => {
    if (props.mail.running) {
      return "flex";
    }
    return "none";
  }};

  z-index: ${(props) => props.mail.zIndex};

  /* Mimic resize visual effects */
  top: ${(props) => {
    // Maximize
    if (props.mail.maximize) {
      return "50px";
    }
    // Minimize
    else if (props.mail.running && props.mail.minimize) {
      return "-100vh";
    }
    // Default
    else {
      return `${props.mail.y}px`;
    }
  }};
  left: ${(props) => {
    // Maximize
    if (props.mail.maximize) {
      return "0";
    }
    // Minimize
    else if (props.mail.running && props.mail.minimize) {
      return "50vw";
    }
    // Default
    else {
      return `${props.mail.x}px`;
    }
  }};
  width: ${(props) => {
    // Maximize
    if (props.mail.maximize) {
      return "100vw";
    }
    // Minimize
    else if (props.mail.running && props.mail.minimize) {
      return "0%";
    }
    // Default
    else {
      return `${props.mail.width}vw`;
    }
  }};
  height: ${(props) =>
    props.mail.maximize ? "calc(100vh - 52px)" : `${props.mail.height}vh`};

  opacity: ${(props) =>
    props.mail.minimize ? "0" : "1"}; /* Mimic fade in-out */

  /* Border when maximize */
  border: solid 2px
    ${(props) => (props.mail.maximize ? "transparent" : props.theme.accent)};
  border-top-left-radius: ${(props) => (props.mail.maximize ? 0 : "0.5rem")};
  border-top-right-radius: ${(props) => (props.mail.maximize ? 0 : "0.5rem")};

  #form {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    padding: 1rem;
  }

  #form > * {
    margin-bottom: 1rem;
  }

  .name {
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].secondary};
    color: ${(props) => props.theme[props.theme.themeStyle].text};
    outline: none;
    border: none;
    box-shadow: none;
    border-bottom: solid 2px
      ${(props) => props.theme[props.theme.themeStyle].tertiary};
  }

  .name:focus {
    outline: none;
    box-shadow: none;
  }

  .email {
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].secondary};
    color: ${(props) => props.theme[props.theme.themeStyle].text};
    outline: none;
    border: none;
    border-bottom: solid 2px
      ${(props) => props.theme[props.theme.themeStyle].tertiary};
    box-shadow: none;
  }

  .email:focus {
    outline: none;
    box-shadow: none;
  }

  .message {
    resize: none;
    flex-grow: 1;
    background-color: ${(props) =>
      props.theme[props.theme.themeStyle].secondary};
    border: none;
    color: ${(props) => props.theme[props.theme.themeStyle].text};
  }

  .message:focus {
    outline: none;
    box-shadow: none;
  }

  .submit {
    height: 36px;
    min-width: 72px;
    max-width: 72px;
    box-shadow: none;
    background-color: #0b57d0;
    border: 1px solid #0b57d0;
    color: #fff;
    border-radius: 18px;
    text-align: center;
    transition: all 0.15s ease-in;
  }

  .submit:hover {
    background-color: #1b61d1;
    border: 1px solid #1b61d1;
  }

  .submit:active {
    background-color: #1857bc;
    border: 1px solid #1857bc;
  }

  .form-end {
    display: flex;
    margin-bottom: 0 !important;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }

  .form-end-messages {
    margin-left: 15px;
  }

  .error {
    color: ${(props) => props.theme.error};
  }

  .success {
    color: ${(props) => props.theme.success};
  }

  .mailto {
    font-size: small;
  }

  @media (width < 1024px) {
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default MailStyled;
