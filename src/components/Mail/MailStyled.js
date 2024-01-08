import styled from 'styled-components';

const MailStyled = styled.div`

  display: ${(props) => {
    if (props.mail.running && !props.mail.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.mail.zIndex};

  /* Position when maximize */
  top: ${props => props.mail.maximize ? '50px' : '80px' };
  right: ${props => props.mail.maximize ? '0' : '0.8rem' };
  left: ${props => props.mail.maximize ? '0' : '0.8rem' };
  height: ${props => props.mail.maximize ? 'calc(100vh - 52px)' : '450px' }; /* Screen size - taskbar + frames borders */

  /* Border when maximize */
  border: solid 1px ${props =>  props.mail.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.mail.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.mail.maximize ? 0 : '0.5rem'};

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
    background-color: ${props => props.theme[props.theme.themeStyle].secondary};
    color: ${props => props.theme[props.theme.themeStyle].text};
    outline: none;
    border: none;
    box-shadow: none;
    border-bottom: solid 2px ${props => props.theme[props.theme.themeStyle].tertiary};
  }

  .name:focus {
    outline: none;
    box-shadow: none;
  }

  .email {
    background-color: ${props => props.theme[props.theme.themeStyle].secondary};
    color: ${props => props.theme[props.theme.themeStyle].text};
    outline: none;
    border: none;
    border-bottom: solid 2px ${props => props.theme[props.theme.themeStyle].tertiary};
    box-shadow: none;
  }

  .email:focus {
    outline: none;
    box-shadow: none;
  }

  .message {
    resize: none;
    flex-grow: 1;
    background-color: ${props => props.theme[props.theme.themeStyle].secondary};
    border: none;
    color: ${props => props.theme[props.theme.themeStyle].text};
  }

  .message:focus {
    outline: none;
    box-shadow: none;
  }

  .submit {
    height: 36px;
    width: 72px;
    box-shadow: none;
    background-color: #0b57d0;
    border: 1px solid #0b57d0;
    color: #fff;
    border-radius: 18px;
    text-align:center;
  }

  .submit:hover {
    cursor: pointer;
    background-color: #1b61d1;
    border: 1px solid #1b61d1;
    box-shadow: 0 1px 2px 0 rgba(26,115,232,0.451), 0 1px 3px 1px rgba(26,115,232,0.302);
  }

  .form-end {
    display: flex;
    margin-bottom: 0 !important;
  }

  .error {
    align-self: center;
    margin-left: 15px;
    color: ${props => props.theme.error};
  }

  .success {
    align-self: center;
    margin-left: 15px;
    color: ${props => props.theme.success};
  }
`;

export default MailStyled;
