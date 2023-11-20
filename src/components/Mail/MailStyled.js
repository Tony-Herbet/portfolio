import styled from 'styled-components';

const MailStyled = styled.div`

  display: ${(props) => {
    if (props.mail.running && !props.mail.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.mail.zIndex};
`;

export default MailStyled;
