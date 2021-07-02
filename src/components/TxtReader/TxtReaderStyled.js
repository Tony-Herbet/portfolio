import styled from 'styled-components';

const FolderStyled = styled.div`

  display: ${(props) => {
    if (props.txtReader.running && !props.txtReader.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.txtReader.zIndex};
`;

export default FolderStyled;
