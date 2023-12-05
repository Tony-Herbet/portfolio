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
  height: ${props => props.mail.maximize ? 'calc(100vh - 50px)' : '450px' };

  /* Border when maximize */
  border: solid 1px ${props =>  props.mail.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.mail.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.mail.maximize ? 0 : '0.5rem'};
`;

export default MailStyled;
