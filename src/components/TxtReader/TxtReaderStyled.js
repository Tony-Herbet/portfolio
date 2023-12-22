import styled from 'styled-components';

const TxtReaderStyled = styled.div`

  display: ${(props) => {
    if (props.txtReader.running && !props.txtReader.minimize) {
      return 'flex';
    }
    return 'none';
  }};

  z-index: ${(props) => props.txtReader.zIndex};

  /* Position when maximize */
  top: ${props => props.txtReader.maximize ? '50px' : '80px' };
  right: ${props => props.txtReader.maximize ? '0' : '0.8rem' };
  left: ${props => props.txtReader.maximize ? '0' : '0.8rem' };
  height: ${props => props.txtReader.maximize ? 'calc(100vh - 50px)' : '450px' };

  /* Border when maximize */
  border: solid 1px ${props =>  props.txtReader.maximize ? 'transparent': props.theme.accent};
  border-top-left-radius: ${props =>  props.txtReader.maximize ? 0 : '0.5rem'};
  border-top-right-radius: ${props =>  props.txtReader.maximize ? 0 : '0.5rem'};

  .txtReader-header {
    display: flex;
    background-color: ${props => props.theme[props.theme.themeStyle].tertiary};
    border-bottom: ${props => props.theme.frameInsideHeader.borderBottom};
    padding: ${props => props.theme.frameInsideHeader.padding};

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
    margin-top: 0.2rem;
  }

  .txtReader-tab {
    display: flex;
    align-items: center;
    border-top: solid 2px transparent;
    padding: 0.2rem;
    margin: 0.2rem 0.2rem 0;
    background-color: ${props => props.theme[props.theme.themeStyle].tertiary};
  }

  .txtReader-tab:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].quarternary};
  }

  .txtReader-tab_focused {
    border-top: solid 2px ${props => props.theme.accent};
    background-color: ${props => props.theme[props.theme.themeStyle].secondary};
  }

  .tab-icon-container {
    display: flex;
    align-items: center;
    height: 15px;
    width: 15px;
    padding-left: 0.3rem;
  }

  .tab-icon {
    background-color: ${props => props.theme.close};
    border-radius: 100%;
    height: 15px;
    width: 15px;
  }

  .txtReader-content {
    overflow: scroll;
  }

`;

export default TxtReaderStyled;
