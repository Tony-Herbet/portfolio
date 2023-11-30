import styled from 'styled-components';

const FolderStyled = styled.div`

  display: ${(props) => {
    if (props.folder.running && !props.folder.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  top: ${props => props.folder.maximize ? '50px' : '80px' };
  right: ${props => props.folder.maximize ? '0' : '0.8rem' };
  left: ${props => props.folder.maximize ? '0' : '0.8rem' };
  height: ${props => props.folder.maximize ? 'calc(100vh - 50px)' : '450px' };

  z-index: ${(props) => props.folder.zIndex};
`;

export default FolderStyled;
