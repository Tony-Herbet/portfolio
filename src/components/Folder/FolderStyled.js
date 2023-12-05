import styled from 'styled-components';

const FolderStyled = styled.div`

  display: ${(props) => {
    if (props.folder.running && !props.folder.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.folder.zIndex};

  /* Position when maximize */
  top: ${props => props.folder.maximize ? '50px' : '80px' };
  right: ${props => props.folder.maximize ? '0' : '0.8rem' };
  left: ${props => props.folder.maximize ? '0' : '0.8rem' };
  height: ${props => props.folder.maximize ? 'calc(100vh - 50px)' : '450px' };

  /* Border when maximize */
  border: solid 1px ${props =>  props.folder.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.folder.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.folder.maximize ? 0 : '0.5rem'};
`;

export default FolderStyled;
