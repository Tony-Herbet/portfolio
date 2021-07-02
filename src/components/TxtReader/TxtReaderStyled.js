import styled from 'styled-components';

const FolderStyled = styled.div`

  display: ${(props) => {
    if (props.txtReader.running && !props.txtReader.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.txtReader.zIndex};

  .txtReader-header {
    display: flex;
    background-color: #AEA79F;
    border-bottom: solid 1px #000000;
    padding: 0.3rem 0.1rem;
  }

  .menu-options {
    padding-right: 1rem;
  }

  .txtReader-content {
    height: 100%;
    padding: 0.5rem;
  }

  .textarea {
    border: none;
    padding: 0;
    outline: none;
    font-size: 1rem;
    width: 100%;
    height: 100%;
    resize: none;
  }

  .textarea:focus {
    border: none;
  }
`;

export default FolderStyled;
