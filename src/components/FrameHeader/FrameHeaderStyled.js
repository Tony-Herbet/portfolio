import styled from 'styled-components';

const FrameHeaderStyled = styled.div`

  display: flex;
  align-items: center;
  margin-top: 0.2rem;

  .frame-name {
    padding: 0.3rem;
    flex-grow: 2;
  }

  .icons {
    display: flex;
    width: 85px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 0.2rem;
  }

  .icon-border {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-border:hover {
    background-color: ${props => props.theme[props.theme.themeStyle].highlight};
  }

  .icon-container {
    border: solid 1px ${props => props.theme.border};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 100%;
    padding: 0.2rem;
    background-color: ${props => props.theme[props.theme.themeStyle].secondary};
    height: 15px;
    width: 15px;
  }

  .icon {
    align-self: center;
    width: 12px;
    height: 12px;
  }
  
  .icon-x:hover {
    background-color: ${props => props.theme.close};
  }
`;

export default FrameHeaderStyled;
