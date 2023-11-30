import styled from 'styled-components';

const MailStyled = styled.div`

  display: ${(props) => {
    if (props.mail.running && !props.mail.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  top: ${props => props.mail.maximize ? '50px' : '80px' };
  right: ${props => props.mail.maximize ? '0' : '0.8rem' };
  left: ${props => props.mail.maximize ? '0' : '0.8rem' };
  height: ${props => props.mail.maximize ? 'calc(100vh - 50px)' : '450px' };

  z-index: ${(props) => props.mail.zIndex};
`;

export default MailStyled;
