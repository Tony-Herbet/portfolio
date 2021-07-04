import styled from 'styled-components';

const TxtReaderStyled = styled.div`

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

  .txtReader-tabs {
    display: flex;
    flex-wrap: wrap;
  }

  .txtReader-tab {
    display: flex;
    align-items: center;
    border-top: solid 2px transparent;
    padding: 0.2rem;
    margin: 0.2rem 0.2rem 0;
    background-color: lightgray;
  }

  .txtReader-tab_focused {
    border-top: solid 2px orange;
    background-color: white;
  }

  .tab-icon-container {
    display: flex;
    align-items: center;
    height: 15px;
    width: 15px;
    padding-left: 0.3rem;
  }

  .tab-icon {
    background-color: red;
    border-radius: 100%;
    height: 15px;
    width: 15px;
    color: white;
  }

  .txtReader-content {
    overflow: scroll;
  }

  ${'' /* .textarea {
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
  } */}
`;

export default TxtReaderStyled;
